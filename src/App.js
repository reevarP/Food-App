import * as React from 'react';
import ReactDom from 'react-dom';
import TextField from '@mui/material/TextField';
import Food from './Food';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function App() {

  const [foodval, setFoodVal] = useState(Food[0]);
  console.log(foodval);
  
  return (
    <>
      <div>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70rem', height: '100vh', margin: '1rem', boxShadow: '4px 4px 8px grey', borderRadius: '1rem' }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Food}
            sx={{ height: '10vh', width: 300, marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}
            renderInput={(params) => <TextField {...params} label="Food" />}
            value={foodval}
            onChange={(event, newfood) => {
              setFoodVal(newfood);
            }}
          />
          <br />
          <Box sx={{ display: 'flex', width: '100%' }}>
            {foodval?.list.map((val, index) => {
              return (
                <FoodCard key={index} name={val} iden={val} />
              );
            })}
          </Box>
        </Box>
      </div>
    </>
  );
}