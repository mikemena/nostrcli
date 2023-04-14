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
    <div className='page'>
      <form action='' method='post' className='form'>
        <div className='input'>
          <input
            className='input-text'
            placeholder='Alias'
            type='text'
            name='alias'
            id='alias'
            required
            fullWidth
            autoComplete='alias'
            autoFocus
            value={alias}
            onChange={e => setAlias(e.target.value)}
          />
          <label className='input-label' for='alias'>
            Alias
          </label>
        </div>
        <div>
          <input type='submit' onClick={onSubmit} className='primary-button' />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
