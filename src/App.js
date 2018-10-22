import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/routes/home';
import Create from './components/routes/create';
import Quiz from './components/routes/quiz';
import NotFound from './components/routes/notFound';

import generateDate from './utils/generateDate';
import generateId from './utils/generateId';
import { setLocal, getLocal } from './utils/local';

class App extends Component {
  state = {
    quizArray: []
  };

  componentDidMount() {
    const quizArray = getLocal('quizArray');
    if (quizArray) {
      this.setState({
        quizArray
      });
    }
  }

  handleCreateQuiz = (quiz) => {
    quiz.date = generateDate();
    quiz.id = generateId(5);

    this.setState(currentState => {
      const quizArray = currentState.quizArray.concat(quiz);
      setLocal('quizArray', quizArray);
      return {
        quizArray
      };
    });
  };

  handleDeleteQuiz = (quiz) => event => {
    this.setState(currentState => {
      const quizArray = currentState.quizArray.filter(item => item.id !== quiz.id);
      setLocal('quizArray', quizArray);
      return {
        quizArray
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