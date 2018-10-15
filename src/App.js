import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';

class App extends Component {
  state = {
    quizArray: [1, 2, 3]
  };

  render() {
    return (
      <div className="app" style={{ height: '100vh', paddingTop: 20, paddingBottom: 20 }}>
        <div className="container">
          <Route exact path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default App;



const quizes = [
  {
    title: 'Math',
    created: '18.03.2018',
    id: 'asldjfakjs1923u409wj',
    questions: [
      {
        id: 0,
        question: 'What\'s 9 + 10?',
        answers: [
          { id: 0, text: '18' },
          { id: 1, text: '21' },
          { id: 2, text: '19', correct: true }
        ]
      },
      {
        id: 1,
        question: 'What\'s 5 * 5?',
        answers: [
          { id: 0, text: '3' },
          { id: 1, text: '25', correct: true },
          { id: 2, text: '69' }
        ]
      }
    ]
  }
]