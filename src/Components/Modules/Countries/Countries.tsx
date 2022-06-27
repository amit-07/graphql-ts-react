import React, {useEffect, useState, useRef, useCallback} from 'react';
import { useQuery } from '@apollo/client';
import { useLocation, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { CountriesData, FILTERED_COUNTRIES_QUERY, 
            CountryVariable, LanguagesData, LANGUAGES_QUERY } from '../../../queries/graphql';
import { Country, Language } from "../../../app-interfaces";

import TileComponent from "../../ReusableComponents/TileComponent";
import Item from "../../ReusableComponents/Item";
import FilterCheckboxes from '../../ReusableComponents/FilterCheckboxes';

import "./Countries.css";
import { filterByLanguages } from '../../../Utils/Filters';
import Typography from '@mui/material/Typography';


const Countries = () => {

    const location = useLocation();
    const continent: any = location.state;
    const isComponentMounted = useRef(true);

    const { data: countryData, loading: countryLoading } = useQuery<CountriesData, CountryVariable>(FILTERED_COUNTRIES_QUERY, {
        variables: {
            code: continent.code,
        },
    });
    const { data: langData, loading: langLoading } = useQuery<LanguagesData>(LANGUAGES_QUERY);
    const [filteredCountries, setFilteredCountries] = useState<any>([]);
    const [languages, setLanguages] = useState<any>([]);
    const [selectedLanguages, setSelected] = useState<any>([]);

    useEffect(() => {
        if((countryLoading === false && countryData) && 
            (langLoading === false && langData)
        ) {
            setFilteredCountries(countryData.countries);
            setLanguages(langData.languages);
        }
        return () => {
            isComponentMounted.current = false;
        }   
    }, [countryLoading, 
        countryData,
        langLoading,
        langData
        ]
    );

    useEffect(() => {
        if(selectedLanguages.length > 0) {
            const countries = filterByLanguages(selectedLanguages, countryData?.countries);
            console.log(countries);
            setFilteredCountries(countries);
        }else{
            setFilteredCountries(countryData?.countries);
        }
    }, [selectedLanguages, countryData?.countries])

    const handleFilterSelection = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            if(e.target.checked){
                setSelected((prevState: any) => [...prevState, e.target.name]);
            }else{
                const updatedLanguages = selectedLanguages.filter((language: string) => language !== e.target.name);
                setSelected(updatedLanguages);
            }
    }, [selectedLanguages]);

    if (countryLoading || langLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    className="languages"
                    item xs={12} md={2}>
                        <Item>
                            <h3>Filter by Language</h3>
                            {languages?.map((lang : Language, idx: number) => (
                                <FilterCheckboxes 
                                    key={idx} 
                                    language={lang}
                                    handleChange={handleFilterSelection}
                                />
                            ))}
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        {filteredCountries.length > 0 ?<Item>
                            <h3>Nations in {continent.name}</h3>
                            <div className="countries">
                                {filteredCountries?.map((country: Country, idx: number) => (
                                <Link
                                    to="/details"
                                    state={{ name: country.name, 
                                        languages: country.languages,  
                                        phone: country.phone,
                                        continent: country.continent.name,
                                        capital: country.capital,
                                        currency: country.currency
                                    }}
                                >
                                    <TileComponent data={country} key={idx} />
                                </Link>
                                ))}
                            </div> 
                        </Item> :
                        <Typography className="no-results" variant="h4" component="h4">No Results to show</Typography>
                        }                        
                    </Grid>
            </Grid>
        </Box>
    )
}

export default Countries;