import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Button } from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Logo from './Image/Logo.png'
import './Timer.css'

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '100px',
        height: '100px',
    },
    heading: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "30px",
        },
        [theme.breakpoints.down(325)]: {
            fontSize: '25px',
        },
    },
    timer: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "60px",
        },
    },
    start: {
        fontSize: '17px',
        padding: '8px 40px',
        backgroundColor: green[800],
        color: 'white',
        '&:hover': {
            backgroundColor: green[900],
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '15px',
            padding: '5px 30px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '13px',
            padding: '5px 19px',
        },
        [theme.breakpoints.down(325)]: {
            fontSize: '12px',
            padding: '5px 10px',
        },
    },
    stop: {
        fontSize: '17px',
        padding: '8px 40px',
        backgroundColor: red[800],
        color: 'white',
        '&:hover': {
            backgroundColor: red[900],
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '15px',
            padding: '5px 30px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '13px',
            padding: '5px 19px',
        },
        [theme.breakpoints.down(325)]: {
            fontSize: '12px',
            padding: '5px 10px',
        },
    },
    reset: {
        fontSize: '17px',
        padding: '8px 40px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '15px',
            padding: '5px 30px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '13px',
            padding: '5px 19px',
        },
        [theme.breakpoints.down(325)]: {
            fontSize: '12px',
            padding: '5px 10px',
        },
    }
}))

const Timer = () => {
    const classes = useStyles();

    const [min, setMin] = useState("00")
    const [sec, setSec] = useState("00")
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(false)

    const convertTo2Dec = (time: string) => {
        return (parseInt(time).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }))
    }

    useEffect(() => {
        if (reset) {
            setReset(false)
            setStart(false)
            setMin("00")
            setSec("00")
        }

        if (start) {
            console.log('Starting Timer');
            const timer = setInterval(() => {
                if (parseInt(sec) < 59) {
                    setSec(convertTo2Dec((parseInt(sec) + 1).toString()))
                }
                else {
                    setSec("00");
                    setMin(convertTo2Dec((parseInt(min) + 1).toString()))
                }
            }, 1000)

            return () => clearInterval(timer)
        }

    }, [sec, min, start, reset])

    return (
        <div className='timer-container'>
            <div className="header-container">
                <img src={Logo} alt="logo" width="150" height="150" className={classes.logo} />
                <Typography variant="h2" className={classes.heading}>CountDown Timer</Typography>
            </div>
            <div className='timer-display-container'>
                <Typography variant='h1' className={classes.timer}>{min} : {sec}</Typography>
            </div>
            <div className='timer-button-container'>
                <Button variant="contained" className={classes.start} onClick={() => { setStart(true) }}>Start</Button>{" "}
                <Button variant="contained" className={classes.stop} onClick={() => { setStart(false) }}>Stop</Button>{" "}
                <Button variant="contained" color="primary" className={classes.reset} onClick={() => { setReset(true) }}>Reset</Button>
            </div>
        </div>
    );
}
export default Timer