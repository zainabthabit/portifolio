import "./App.css";
import { state } from './store'
function App() {
    // Use the dispatch function in both handleIncrement and handleDecrement, so when they're clicked, the dispatch is triggered and sends the correct actions to the reducer to update the state
    function handleIncrement() {
        // dispatching some actions
    }
    function handleDecrement() {
        // dispatching some actions
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={ handleIncrement }>+</button>
                <p>0</p>
                <button onClick={ handleDecrement }>-</button>
            </header>
        </div>
    );
}

export default App;