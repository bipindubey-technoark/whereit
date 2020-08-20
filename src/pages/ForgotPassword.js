import React from 'react';
import axios from 'axios';
import {Paper, Grid, Typography, Button, InputAdornment} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'navy',
        background: 'none',
        margin:'20px 0 40px 0'
    },
    formPaper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
        maxWidth: 600,
        height: 'fit-content',
        padding: 20,
        margin: 20,
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        width: 120,
    },
});

// http://62.252.239.190:9003/
function ForgotPassword() {
    const classes = useStyles();
    const [visibility, setVisibility] = React.useState(false);
    
    const handleSubmit = async(values,actions) => {
        try {
            const { data } = await axios.post('http://62.252.239.190:9003/auth/forgot-pass/check', values);
        } catch (error) {
            if (
                error.response !== undefined &&
                error.response.data !== null &&
                error.response.data.errors.length !== 0
            ) {
                toast.error(error.response.data.errors[0]);
                actions.setSubmitting(false);
            } else {
                toast.error(error.message);
                actions.setSubmitting(false);
            }
        }
    }
    const toggleVisibility = () => {
        setVisibility(!visibility);
      }

    return (
        <div style={{backgroundColor:'#f8f8ff', height:'100vh'}}>
            <div className={classes.root}>
                {/* <img src={logo} /> */}
                <Typography className={classes.title} variant="h4">
                        WhereIt
                    </Typography>
                <Paper className={classes.formPaper}>
                    <Typography className={classes.title} variant="h4">
                         Reset Password
                    </Typography>
                    <Formik
                        validationSchema={Yup.object({
                            username: Yup.string()
                            .email("Invalid Email")
                            .required("Required*"),
                            password: Yup.string()
                                .matches(
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\-\$%\^&\*])(?=.{8,})/,
                                'Password must contain 8 characters, one uppercase, one lowercase, one special character and one digit.'
                            )
                                .required("Password is Required*"),
                            // confirmPassword: Yup.string()
                            //     .oneOf(
                            //     [Yup.ref("password")],
                            //     "Password and Confirm Password does not match"
                            //     )
                            //     .required("Confirm your New Password*"),
                        })}
                        initialValues={{
                            email: '',
                            password: '',
                            // confirmPassword: '',
                        }}
                        onSubmit={handleSubmit}
                    >
                        {
                            ({values,setFieldValue}) => {
                                return(
                                    <Form>
                                        <Field
                                            name="email"
                                            component={TextField}
                                            label="Email"
                                            margin="normal"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment>
                                                        <EmailIcon color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            fullWidth
                                        />
                                        <Field
                                            name="password"
                                            type={visibility ? "text" : "password"}
                                            component={TextField}
                                            label="Password"
                                            margin="normal"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment>
                                                        <LockIcon color="primary"/>
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment
                                                      position="end"
                                                    >
                                                      {
                                                        visibility ? <VisibilityIcon onClick={toggleVisibility} style={{cursor:'pointer'}}/> : <VisibilityOffIcon onClick={toggleVisibility} style={{cursor:'pointer'}}/>
                                                      }
                                                    </InputAdornment>
                                                  ),
                                            }}
                                            fullWidth
                                        />
                                        {/* <Field
                                            name="confirmPassword"
                                            type="password"
                                            component={TextField}
                                            label="Confirm Password"
                                            margin="normal"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon color="secondary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            fullWidth
                                        /> */}
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                        </Form>
                                );
                            }
                        }
                        </Formik>
                </Paper>
            </div>
        </div>
    );
}

export default ForgotPassword;