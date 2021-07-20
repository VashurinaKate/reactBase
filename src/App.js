import { Message } from './Message';
import './App.css';

function App(props) {
  console.log(props)
  const message = "This is message from props";
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <Message msg={message}/>
      </header>
    </div>
  );
}

export default App;
