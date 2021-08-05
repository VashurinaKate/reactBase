import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export const ChatListItem = ({ name, id }) => {
    return (
        <Link to={`/home/${id}`} key={id}>
            <ListItem button alignItems="flex-start" >
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
            </ListItem>
            <Divider variant="inset" component="li" />
        </Link>
    )
}
