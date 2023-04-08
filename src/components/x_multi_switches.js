import { useState } from 'react';
import { toppings } from '../utils/toppings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const getFormattedPrice = price => `$${price?.toFixed(2)}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className='App'>
      <h3>Select Toppings</h3>
      <FormGroup>
        {toppings.map(({ name }, index) => {
          return <FormControlLabel control={<Switch />} label={name} />;
        })}
      </FormGroup>
    </div>
  );
}
