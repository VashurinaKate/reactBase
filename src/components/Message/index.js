import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { AUTHORS } from '../../constants';

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 600,
        width: 'fit-content',
        margin: `${theme.spacing(1)}px auto 0`,
        marginRight: '0px',
        padding: theme.spacing(2)
    },
    paperBot: {
        background: '#d0dde8bf',
        maxWidth: 600,
        width: 'fit-content',
        margin: `${theme.spacing(1)}px 20px auto`,
        padding: theme.spacing(2)
    }
}));

export const Message = ({ message, author }) => {
    const isRobot = author;
    const classes = useStyles();

    if (isRobot === AUTHORS.robot) {
        return (
        <Paper className={classes.paperBot}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar>{author}</Avatar>
                </Grid>
            <Grid item xs>
                <Typography style={{textAlign: 'left'}}>{message}</Typography>
            </Grid>
            </Grid>
        </Paper>
        )
    }
    return (
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar>{author}</Avatar>
                </Grid>
                <Grid item xs>
                    <Typography style={{textAlign: 'right'}}>{message}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
