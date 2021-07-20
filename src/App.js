import { Message } from './Message';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <Message/>

      </header>
    </div>
  );
}

export default App;
