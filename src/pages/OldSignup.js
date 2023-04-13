import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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

  const textFieldStyle = {
    '& label.Mui-focused': {
      color: '#282c34'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ffe200'
      }
    }
  };

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid className='grid' item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src='../banana.svg'
            alt='triangle with all three sides equal'
            height='87'
            width='100'
          />
          <Typography component='h1' variant='h1'>
            nostrcli
          </Typography>
          <Box component='form' noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              value={alias}
              onChange={e => setAlias(e.target.value)}
              margin='normal'
              required
              fullWidth
              id='alias'
              label='alias'
              name='alias'
              autoComplete='alias'
              autoFocus
              sx={textFieldStyle}
            />

            <Button
              type='submit'
              onClick={onSubmit}
              fullWidth
              variant='contained'
              className='primary-button'
            >
              Sign Up
            </Button>
            <Link href='/' className='link'>
              {'Already have an account? Sign In'}
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;