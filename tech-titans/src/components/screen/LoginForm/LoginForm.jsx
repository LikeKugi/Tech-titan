import {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel, Grid, Link,
  TextField,
  Typography
} from "@mui/material";
import {Copyright} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "react-query";
import usersService from "../../../services/users.service";
import {useDispatch} from "react-redux";
import {signUp} from "../../../store/slices/userSlice";

const LoginFormLegacy = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
      <form>
        <input type="text"
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder='Email'/>
        <input type="password"
               value={pass}
               onChange={e => setPass(e.target.value)}
               placeholder='Password'/>
        <button onClick={handleClick}>{title}</button>
      </form>
  );
}

const LoginForm = () => {
  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange',
  });
  // const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {mutate} = useMutation(['logIn'], (data) => usersService.logIn(data), {
    onSuccess: (data) => {
      dispatch(signUp(data));
      reset();
    },
  });
  const logIn = (data) => {
    mutate(data);
  }

  return (<Container component="main"
                     maxWidth="xs">
    <CssBaseline/>
    <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
    >
      <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
        <LockOutlinedIcon/>
      </Avatar>
      <Typography component="h1"
                  variant="h5">
        Sign in
      </Typography>
      <Box component="form"
           onSubmit={handleSubmit(logIn)}
           noValidate
           sx={{mt: 1}}>
        <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register('email', {required: true})}
        />
        <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password', {required: true})}
        />
        <FormControlLabel
            control={<Checkbox value="remember"
                               color="primary"/>}
            label="Remember me"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item
                xs>
            <Link href="#"
                  variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#"
                  variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{mt: 8, mb: 4}}/>
  </Container>)
}
export default LoginForm;