import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,  Paper, MenuItem, Select, TextField, Box, Typography
} from '@material-ui/core';
// import QRCode from "react-qr-code";
import QRCode from 'qrcode.react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    qrCode: {
        marginTop: theme.spacing(4),
    },
    textField: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    select: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    button: {
        backgroundColor: '#007BFF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
        marginBottom: theme.spacing(2),
    },
}));

const Pamplate = () => {
    const classes = useStyles();
    const [bartext, setBartext] = useState('youtube');
    const [selectValue, setSelectValue] = useState('black');
    const [selectValue1, setSelectValue1] = useState('white');


    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                    QR Code Generator
                </Typography>
                {/* <form noValidate autoComplete="off" className={classes.form}> */}
                <TextField
                    // variant="outlined"
                    label="Enter the URL or Text"
                    value={bartext}
                    onChange={(e) => setBartext(e.target.value)}
                    className={classes.textField}
                />
                <Select
                    labelId="select-label"
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    className={classes.select}
                    variant="outlined"
                >
                    <MenuItem value="black">Black</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                    <MenuItem value="pink">Pink</MenuItem>
                    <MenuItem value="green">Green</MenuItem>
                    <MenuItem value="blue">Blue</MenuItem>
                </Select>
                <Select
                    labelId="select-label"
                    value={selectValue1}
                    onChange={(e) => setSelectValue1(e.target.value)}
                    className={classes.select}
                    variant="outlined"
                >
                    <MenuItem value="white">White</MenuItem>
                    <MenuItem value="yellow">Yellow</MenuItem>
                    <MenuItem value="lightblue">Light Blue</MenuItem>
                    <MenuItem value="lightgreen">Light Green</MenuItem>
                </Select>
                {/* <Button
                        variant="contained"
                        className={classes.button}
                        onClick={handleGetBarcode}
                    >
                        Generate QR Code
                    </Button>
                </form> */}
                <Box className={classes.qrCode}>
                    {/* <QRCode
                        size={256}
                        value={bartext}
                        bgColor={selectValue1}
                        fgColor={selectValue}
                    /> */}
                    <QRCode
                        size={256}
                        value={bartext}
                        bgColor={selectValue1}
                        fgColor={selectValue}
                    />
                    <img
                        src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
                        alt="icon"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 256/10,
                            height: 256/10,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </Box>
            </Paper>
        </Container>
    );
};

export default Pamplate;
