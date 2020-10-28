import './App.css';
import { Provider } from 'react-redux'
import React from 'react'

// import Books from './Books/Books';
import ChessBoard from './chessBoard/chessBoard'
import store from './chessBoard/chessBoardStore'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Books /> */}
        <ChessBoard />
      </div>
    </Provider>
  );
}

export default App;
