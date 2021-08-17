import { Router } from './components/Router';
import Container from '@material-ui/core/Container';
import { Provider } from "react-redux";
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { Login } from './components/Login';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}/>
            <div className="App">
                <header className="App-header">
                    My Chat
                </header>
                <Container maxWidth="md" style={{ minHeight: '100vh', backgroundColor: '#cfe8fc' }}>
                    <Router/>
                    {/* <Login/> */}
                </Container>
            </div>
        </Provider>
    );
}

export default App;
