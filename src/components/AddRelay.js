import { useState } from 'react';

const AddRelay = ({ onAdd }) => {
  const [relay, setRelay] = useState('');

  //Handle Submit
  const onSubmit = e => {
    setRelay('');
  };

  //Handle Clear Task Form
  const onClear = () => {
    setRelay('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Relay</label>
        <input
          className='field'
          type='text'
          value={relay}
          onChange={e => setRelay(e.target.value)}
        />
      </div>
      <input
        type='submit'
        onClick={onSubmit}
        value='Save Task'
        className={'btn btn-block btn-submit'}
      />
      <input
        type='clear'
        onClick={onClear}
        onChange={onClear}
        value='Clear Task'
        className='btn btn-block btn-clear'
      />
    </form>
  );
};

export default AddRelay;
