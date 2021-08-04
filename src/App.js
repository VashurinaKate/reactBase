import { Router } from './components/Router';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                My Chat
            </header>
            <Container maxWidth="md" style={{ minHeight: '100vh', backgroundColor: '#cfe8fc' }}>
                <Router/>
            </Container>
        </div>
    );
}

export default App;
