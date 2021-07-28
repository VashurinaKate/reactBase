import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

export const ChatListItem = ({ chatName }) => {
    return(
        <ListItem button>
            <ListItemIcon>
                <EmailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={chatName} />
        </ListItem>
    )
}
