import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

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
                        <Grid container alignItems="center" justifyContent="space-between" >
                            <Grid item>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" className={classes.large} />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="First Name"
                                    style={{ display: 'block' }}
                                    fullWidth
                                    />
                                <TextField
                                    id="standard-full-width"
                                    label="Last Name"
                                    fullWidth
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
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ padding: '15px' }} >
                        <div>
                            User Name
                        </div>
                        <div>
                            Change Number
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}