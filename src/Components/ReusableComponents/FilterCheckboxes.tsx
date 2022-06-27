import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

interface LanguageProps{
    name: String;
    code: String;
    native: String;
}


const FilterCheckboxes = (props: any) => {

  const [checked, setCheckbox] = React.useState(false);

  const {language,handleChange} = props;  
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl component="fieldset" variant="standard">
          <FormControlLabel
            control={
              <Checkbox checked={checked} name={language.name} onChange={(e) => {
                setCheckbox(e.target.checked)
                handleChange(e);
            }}
            />
            }
            label={language.name}
          />
      </FormControl>
    </Box>
  );
}

export default FilterCheckboxes;
