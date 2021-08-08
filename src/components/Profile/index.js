import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from "../../store/profile/actions";
import { selectLastName, selectName } from '../../store/profile/selectors';
// import { ChatList } from '../ChatList';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export const Profile = () => {
    const classes = useStyles();
    const [nameValue, setNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");

    const name = useSelector(selectName);
    const lastName = useSelector(selectLastName);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setName(nameValue, lastNameValue));
        setNameValue("")
        setLastNameValue("")
    }

    const handleChange = (e) => {
        setNameValue(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastNameValue(e.target.value)
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={3}>
                {/* <ChatList/> */}
            </Grid>
            <Grid
                item xs={9}
                container
                spacing={2}
                direction="column"
                style={{ minHeight: '100vh', paddingBottom: '30px' }}>
                <Grid item>
                    <Paper style={{ padding: '15px' }}>
                        <Grid container alignItems="center" spacing={4}>
                            <Grid item>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" className={classes.large} />
                            </Grid>
                            {name} / {lastName}
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ padding: '15px' }} >
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className={classes.root}
                            noValidate
                            autoComplete="off">
                            <Grid container alignItems="center" justifyContent="space-between" >
                                <Grid item>
                                    <TextField
                                        onChange={handleChange}
                                        value={nameValue}
                                        label="First Name"
                                        style={{ display: 'block' }}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        onChange={handleLastNameChange}
                                        value={lastNameValue}
                                        id="standard-full-width"
                                        label="Last Name"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="outlined-full-width"
                                        label="BIO"
                                        style={{ margin: 4 }}
                                        placeholder="A few words about you"
                                        helperText="Any details such as age, occupation or city"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                    <Button
                                        onClick={handleSubmit}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        >
                                        Set
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
