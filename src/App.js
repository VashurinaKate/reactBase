import { Router } from './components/Router';
import Container from '@material-ui/core/Container';
import { Provider } from "react-redux";
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    My Chat
                </header>
                <Container maxWidth="md" style={{ minHeight: '100vh', backgroundColor: '#cfe8fc' }}>
                    <Router/>
                </Container>
            </div>
        </Provider>
    );
}

export default App;
