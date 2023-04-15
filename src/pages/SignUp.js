import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generatePrivateKey, getPublicKey } from 'nostr-tools';

const SignUp = () => {
  const [alias, setAlias] = useState('');

  // Route to homepage
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // Add User to database
  const addUser = async user => {
    const res = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    console.log(data);
  };

  //Handle Submit
  const onSubmit = e => {
    e.preventDefault();
    let sk = generatePrivateKey(); // `sk` is a hex string
    let pk = getPublicKey(sk); // `pk` is a hex string

    console.log('Public Key', pk);
    console.log('Private Key', sk);
    if (!alias) {
      alert('Please add a username');
      return;
    } else {
      addUser({ alias, pk, sk });
      setAlias('');
      routeChange();
    }
  };

  return (
    <div className='form-section'>
      <form action='' method='post' className='form'>
        <div className='input-wrapper'>
          <input
            className='input-text'
            type='text'
            name='alias'
            placeholder='alias'
            id='alias'
            value={alias}
            onChange={e => setAlias(e.target.value)}
          />
          <label htmlFor='alias' className='input-label'>
            Alias
          </label>
        </div>
        <div className='button-wrapper'>
          <input type='submit' onClick={onSubmit} className='primary-button' />
        </div>
        <a className='form-link' href='/'>
          {'Already have an account? Sign In'}
        </a>
      </form>
    </div>
  );
};

export default SignUp;
