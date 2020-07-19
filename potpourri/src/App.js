import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import frontPage from './components/navbar'
import editQuery from './components/search'
import recipePage from './components/dish'

const App = () => {
    const [userText, setUserText] = useState('');
    const updateUserText = event => {
        setUserText(event.target.value);
        console.log('current userText', userText);
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <header>This is the start of something exciting</header>
                    <div className="container">
                        <h2>MERN Stack Recipe App</h2>
                        <input value={userText} onChange={updateUserText} />
                    </div>
                    <Route path='/' exact component={frontPage} />
                    <Route path='/foodName/:id' component={editQuery} />
                    <Route path='/prepare' component={recipePage} />
                    <Route path='/cutlery' component={presentation} />
                    <Route path='/kitchenEssentials' component={utensils} />
                </div>
            </Router>
        );
    }
}

export default App;

/*
 *    useEffect(() => {
        if (gameState.victory) document.title = 'Victory!';
      });
 *    const chooseSnippet = snippetIndex => () => {
      console.log('setSnippet', snippetIndex);
      setSnippet(SNIPPETS[snippetIndex]);
      setGameState({ ...gameState, startTime: new Date().getTime() });
    };
     * {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0, 10)}...
          </button>
        ))
      }
     const updateUserText = event => {
      setUserText(event.target.value);
      if (event.target.value === snippet) {
        setGameState({
          ...gameState,
          victory: true,
          endTime: new Date().getTime() - gameState.startTime
        });
      }
    }

{articles.map(el => <li key={el.id}>{el.title}</li>)}
 */