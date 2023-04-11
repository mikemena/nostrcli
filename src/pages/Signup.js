import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { generatePrivateKey, getPublicKey } from 'nostr-tools';

// Add Task
const addUser = async user => {
  const res = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};

const SignUp = () => {
  let privateKey = generatePrivateKey(); // `sk` is a hex string
  let publicKey = getPublicKey(privateKey); // `pk` is a hex string
  console.log('Public Key', publicKey);
  console.log('Private Key', privateKey);

  const [username, setUsername] = useState('');
  const onChangeHandler = e => {
    e.preventDefault();
    setUsername(e.target.value);

    let username = e.target.value;

    console.log('username', username);
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
          <Box component='form' noValidate onSubmit={addUser} sx={{ mt: 1 }}>
            <TextField
              value={username}
              onChange={onChangeHandler}
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              name='name'
              autoComplete='name'
              autoFocus
              sx={textFieldStyle}
            />

            <Button
              type='submit'
              onClick={addUser}
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
