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
      <aside className='signup-image'></aside>
      <div className='signup-form'>
        <img
          src='../banana.svg'
          alt='triangle with all three sides equal'
          height='87'
          width='100'
        />
        <h2>nostrcli</h2>
        <form action='' method='post' class='form'>
          <input
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
          <label for='alias'>Alias</label>
          <input type='submit' onClick={onSubmit} className='primary-button' />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
