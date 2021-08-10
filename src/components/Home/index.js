import { useEffect, useCallback } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { ChatList } from '../ChatList';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import { AUTHORS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../store/chats/actions';

function Home() {
    const { chatId } = useParams();
    const chats = useSelector((state) => state.chats)
    const dispatch = useDispatch();

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessage(chatId, newMessage))
    }, [chatId])

    // if (!chats[chatId]) {
    //     return null
    // }
    // useEffect(() => {
    //     if (!chatId ||
    //         !chats[chatId].messages.length ||
    //         chats[chatId].messages[chats[chatId].messages.length - 1].author === AUTHORS.robot) {
    //             return
    //         }
    //         const timeout = setTimeout(() => {
    //             const robotMess = {
    //                 text: 'hello',
    //                 author: AUTHORS.robot,
    //                 id: Date.now()
    //             };
    //             handleSendMessage(robotMess)
    //         }, 1000);
    //         return () => clearTimeout(timeout);
    // }, [chats, chatId]);
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <ChatList chatList={chats}/>
            </Grid>
            { !!chatId && 
            <Grid
                item xs={9}
                container
                direction="column"
                justifyContent="space-between"
                style={{ minHeight: '100vh', paddingBottom: '30px' }}>
                    <Grid item>
                        <MessageList messages={chats[chatId].messages}/>
                        {/* { chats[chatId].messages ? <MessageList messages={chats[chatId].messages}/> : <Redirect to="/nochat" /> } */}
                    </Grid>
                    <Grid item><MessageForm onSendMessage={handleSendMessage}/></Grid>
            </Grid>
            }
        </Grid>
    );
}

export default Home;
