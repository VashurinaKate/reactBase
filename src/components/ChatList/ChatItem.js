import React, { useCallback } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch } from 'react-redux';
import { deleteChatWithFB } from '../../store/chats/actions';

export const ChatItem = ({ name, id, onDelete }) => {
    const dispatch = useDispatch();

    const handleRemoveChat = useCallback(() => {
        // dispatch(removeChat(id))
        dispatch(deleteChatWithFB(id))
    }, [])

    return (
        <Link to={`/home/${id}`} >
            <ListItem button alignItems="center">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp"/>
                </ListItemAvatar>

                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                style={{ display: 'inline' }}
                                color="textPrimary"
                                >
                                Ali Connors
                            </Typography>
                        </React.Fragment>
                    }
                />
                <HighlightOffIcon
                    onClick={handleRemoveChat}/>
            </ListItem>
            <Divider variant="inset" component="li" />
        </Link>
    )
}
