import { useState } from 'react';
import { toppings } from '../utils/toppings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '../App.css';

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log(checkedState);
  };

  return (
    <div className='form-container'>
      <h3>Select Toppings</h3>
      <FormGroup className='formgroup'>
        {toppings.map(({ name }, index) => {
          return (
            <FormControlLabel
              control={
                <Switch
                  color='warning'
                  id={`custom-checkbox-${index}`}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
              }
              label={name}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}
