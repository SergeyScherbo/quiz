import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/routes/home';
import Create from './components/routes/create';
import Quiz from './components/routes/quiz';
import NotFound from './components/routes/notFound';

import generateDate from './utils/generateDate';
import generateId from './utils/generateId';

class App extends Component {
  state = {
    quizArray: []
  };

  componentDidMount() {
    const quizArray = JSON.parse(localStorage.getItem('quizArray'));
    if (quizArray) {
      this.setState({
        quizArray
      });
    }
  }

  handleCreateQuiz = (quiz) => event => {
    quiz.date = generateDate();
    quiz.id = generateId(5);

    this.setState(currentState => {
      const quizArray = currentState.quizArray.concat(quiz);
      localStorage.setItem('quizArray', JSON.stringify(quizArray));
      return {
        quizArray
      };
    });
  };

  handleDeleteQuiz = (quiz) => event => {
    this.setState(currentState => {
      return {
        quizArray: currentState.quizArray.filter(item => item.id !== quiz.id)
      };
    });
  }

  render() {
    return (
      <div className="app" style={{ minHeight: '100vh', paddingTop: 20, paddingBottom: 20 }}>
        <div className="container">
          <Switch>
            <Route path="/create" render={(props) => <Create onCreateQuiz={this.handleCreateQuiz} {...props} />} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/quiz-:id" component={Quiz} />
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  quizArray={this.state.quizArray}
                  onDeleteQuiz={this.handleDeleteQuiz}
                  {...props} />
              )} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;