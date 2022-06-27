import React from 'react';
import { useQuery } from '@apollo/client';
import TileComponent from "../../../Components/ReusableComponents/TileComponent";
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { ContinentsData, CONTINENTS_QUERY } from '../../../queries/graphql';

import "./Continents.css";

  
const Continents = () => {
  const { data, loading, error } = useQuery<ContinentsData>(CONTINENTS_QUERY);
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <>
        <Typography className="title" variant="h2" component="h2" gutterBottom>Select a Continent</Typography>
        <div className="continents">
            {
                data?.continents.map((continent,idx) => (
                    <Link 
                      to="/countries"
                      state={{code: continent.code, name: continent.name}}
                    >
                      <TileComponent  
                        key={idx} 
                        data={continent}
                      />
                    </Link> 
                ))
            }
        </div>
      </>
        
    )
}

export default Continents;