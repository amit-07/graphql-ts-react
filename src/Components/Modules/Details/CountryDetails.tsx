import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Item from "../../ReusableComponents/Item";
import { useLocation } from 'react-router-dom';

const CountryDetails = () => {
    const location = useLocation();
    const country: any = location.state;
    const languages = country?.languages?.map((language: any) => (language.name));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    item xs={12} md={12}>
                        <Item>
                            <Typography variant="h3" component="h3" gutterBottom>Country Details</Typography>
                            <Typography variant="h4" component="h4" gutterBottom>Name : {country.name}</Typography>
                            <Typography variant="h4" component="h4" gutterBottom>Continent : {country.continent}</Typography>
                            <Typography variant="h4" component="h4" gutterBottom>Capital : {country.capital}</Typography>
                            <Typography variant="h4" component="h4" gutterBottom>Languages : {languages.join(', ')}</Typography>    
                        </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CountryDetails;