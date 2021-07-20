import { Message } from './Message';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <Message msg="This is message from props"/>
      </header>
    </div>
  );
}

export default App;
