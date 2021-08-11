import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const ChatListItem = ({ name, id, onRemove }) => {
    const handleRemove = () => {
        onRemove(id)
    }

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
                    onClick={handleRemove}
                    />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Link>
    )
}
