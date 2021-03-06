import React, { useEffect, useState } from 'react';
import { fetchSignup } from '../apis/signup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()

  // ここはリファクタリングできる？
  function handleChangeName(event) {
    setName(event.target.value)
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }
  function handleChangePasswordConfirm(event) {
    setPasswordConfirm(event.target.value)
  }

  //ユーザー認証
  function handleTestCallApi() {
    console.log('test submit')
    const params = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirm
    }
    fetchSignup(params)
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* <form className={classes.form} noValidate> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="Name"
              variant="outlined"
              required
              fullWidth
              id="Name"
              label="名前"
              autoFocus
              onChange={handleChangeName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              onChange={handleChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password_comfirmation"
              label="パスワードの確認"
              type="password_comfirmation"
              id="password_comfirmation"
              onChange={handleChangePasswordConfirm}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="inherit"
          className={classes.submit}
          onClick={handleTestCallApi}
        >
          Sign Up
          </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              ログインはこちらから
              </Link>
          </Grid>
        </Grid>
        {/* </form> */}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
