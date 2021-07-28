import { useState, useEffect, useCallback } from 'react';
import { MessageList } from './components/MessageList';
import { MessageForm } from './components/MessageForm';
import { ChatList } from './components/ChatList';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { AUTHORS } from './constants';

function App() {
    const [messageList, setMessageList] = useState([]);

    const handleSendMessage = useCallback((newMessage) => {
        setMessageList([...messageList, newMessage])
    }, [messageList])

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.robot) {
            const robotMess = { message: 'hello', author: AUTHORS.robot, id: Date.now() };
            const timeout = setTimeout(() => setMessageList([...messageList, robotMess]), 1500);
            return () => clearTimeout(timeout);
        }
    }, [messageList]);

    return (
        <div className="App">
            <header className="App-header">
                My Chat
            </header>
            <CssBaseline />
            <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc', marginTop: '4px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <ChatList/>
                    </Grid>
                    <Grid
                        item xs={9}
                        container
                        direction="column"
                        justifyContent="space-between"
                        style={{ minHeight: '100vh', borderLeft: '1px solid rgba(0, 0, 0, 0.12)', paddingBottom: '30px' }}>
                        <Grid item><MessageList messageList={messageList}/></Grid>
                        <Grid item><MessageForm onSendMessage={handleSendMessage}/></Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
