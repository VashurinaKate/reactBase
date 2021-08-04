import React from 'react';
import { Link } from 'react-router-dom';
import { AUTHORS } from "../../constants";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

export const ChatList = ({ chatList, onSetChats }) => {
    const handleSetChat = () => {
        onSetChats({
            name: "New Chat",
            id: Date.now(),
            messages: [{ 
                message: "message from new chat",
                author: AUTHORS.human,
                id: Date.now()
            }]
        })
    }
    
    return(
        <>
        <Paper>
            <List>
                {Object.values(chatList).map((item) => (
                    <Link to={`/home/${item.id}`} key={item.id}>
                        <ListItem button alignItems="flex-start" >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp"/>
                            </ListItemAvatar>
                
                            <ListItemText
                                primary={item.name}
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
                ))}
            </List>
        </Paper>

        <Fab color="primary" aria-label="add" onClick={handleSetChat} style={{ marginTop: '15px' }}>
            <AddIcon/>
        </Fab>
        </>
    )
}
