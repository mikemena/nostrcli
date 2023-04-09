import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <h4>Nothing to see here</h4>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default NoMatch;
