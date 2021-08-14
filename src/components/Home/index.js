import { useCallback } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { ChatList } from '../ChatList';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux'
import { sendMessageWithReply } from '../../store/chats/actions';
import { selectAbbreviatedName } from '../../store/profile/selectors';

function Home() {
    const { chatId } = useParams();
    const chats = useSelector((state) => state.chats)
    const abbreviatedName = useSelector(selectAbbreviatedName)

    const dispatch = useDispatch();

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessageWithReply(chatId, { ...newMessage, author: abbreviatedName }))
    }, [chatId])

    if (!chats[chatId]) {
        return <Redirect to="/nochat" />
    }
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <ChatList
                    chatList={chats} />
            </Grid>
            { !!chatId && 
            <Grid
                item xs={9}
                container
                direction="column"
                justifyContent="space-between"
                style={{ minHeight: '100vh', paddingBottom: '30px' }}>
                    <Grid item>
                        <MessageList messages={chats[chatId].messages} abbreviatedName={abbreviatedName}/>
                    </Grid>
                    <Grid item><MessageForm onSendMessage={handleSendMessage}/></Grid>
            </Grid>
            }
        </Grid>
    );
}

export default Home;
