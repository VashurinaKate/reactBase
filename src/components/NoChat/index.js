import { ChatList } from '../ChatList'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';

export const NoChat = () => {
    const chats = useSelector((state) => state.chats)

    return (
        <Grid container spacing={1}>
        <Grid item xs={3}>
            <ChatList chatList={chats}/>
        </Grid>
        <Grid
            item xs={9}
            container
            direction="column"
            justifyContent="space-between"
            style={{ minHeight: '100vh', paddingBottom: '30px' }}>
                <Grid item>
                    Please select a chat
                </Grid>
        </Grid>
    </Grid>
    )
}
