import React from 'react';
import axios from 'axios';
import {Paper, Grid, Typography, Button, InputAdornment} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
});

// http://62.252.239.190:9003/
function InitialPage() {
    const classes = useStyles();
    return (
        <div style={{backgroundColor:'#f8f8ff', height:'100vh'}}>
            <div className={classes.root}>
                <Typography className={classes.title} variant="h4">
                        WhereIt
                    </Typography>
            </div>
        </div>
    );
}

export default InitialPage;