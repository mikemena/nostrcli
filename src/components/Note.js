import { FaDumpster, FaEdit } from 'react-icons/fa';
import { useState } from 'react';

//https://react-icons.github.io/react-icons

const Note = ({
  task,
  onDelete,
  onToggle,
  onEdit,
  onChange,
  onClose,
  editMode,
  darkMode
}) => {
  const [text, setText] = useState('');

  return (
    <div
      className={
        darkMode
          ? `light task-container task ${task.reminder && 'reminder'}`
          : `dark task-container task ${task.reminder && 'reminder'}`
      }
      onDoubleClick={() => onToggle(task.id)}
    >
      <h4 className={darkMode ? 'task-id' : 'task-id'}>{task.id}</h4>

      <h3 className={darkMode ? 'task-title' : 'task-title'}>{task.text} </h3>

      <p className={darkMode ? 'task-date ' : 'task-date'}>{task.day}</p>

      <FaEdit className='task-edit task-icon' onClick={() => onEdit(task.id)} />
      <FaDumpster
        className='task-delete task-icon'
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default Note;
