import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/common/navBar';
import Home from './components/routes/home';
import User from './components/routes/user';
import Create from './components/routes/create';
import Quiz from './components/routes/quiz';
import About from './components/routes/about';
import NoPermission from './components/routes/noPermission';
import NotFound from './components/routes/notFound';
import Login from './components/routes/login';

import generateDate from './utils/generateDate';
import generateId from './utils/generateId';
import { setLocal, getLocal } from './utils/local';

class App extends Component {
  state = {
    quizArray: [],
    logged: false
  };

  componentDidMount() {
    // get all earlier created quizes from DB

    // const quizArray = getLocal('quizArray');
    // if (quizArray) {
    //   this.setState({
    //     quizArray
    //   });
    // }
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
      <React.Fragment>
        <NavBar logged={this.state.logged} />
        <div className="container">
          <Switch>
            <Route path="/quiz-:id" component={Quiz} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
            {!this.state.logged
              ? <Route path="/create" component={NoPermission} />
              : <Route path="/create" render={(props) => <Create onCreateQuiz={this.handleCreateQuiz} {...props} />} />
            }
            {!this.state.logged
              ? <Route path="/user" component={NoPermission} />
              : <Route path="/user" render={(props) => (<User quizArray={this.state.quizArray} onDeleteQuiz={this.handleDeleteQuiz} {...props} />)} />
            }
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;