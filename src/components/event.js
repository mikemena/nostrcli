import { useState } from 'react';

const AddTask = ({ onAdd, task, darkMode }) => {
  console.log('task passed in', task);
  var today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  const [text, setText] = useState('');
  const [day, setDay] = useState(today);
  const [reminder, setReminder] = useState(false);

  //Handle Submit
  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    } else {
      onAdd({ text, day, reminder });
      setText('');
      setDay('');
      setReminder(false);
    }
  };

  //Handle Clear Task Form
  const onClear = () => {
    setText('');
    setDay(today);
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          className={darkMode ? 'light-input' : 'dark-input'}
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
          className={darkMode ? 'light-input' : 'dark-input'}
          style={{ fontFamily: 'Poppins' }}
          type='date'
          value={day}
          min='2021-01-01'
          max='2023-01-01'
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <input
          className={darkMode ? 'light' : 'dark'}
          type='checkbox'
          id='reminder'
          name='reminder'
          defaultValue={reminder}
          checked={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
        <label className='reminder-label' htmlFor='reminder'>
          Set Reminder
        </label>
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

export default AddTask;
