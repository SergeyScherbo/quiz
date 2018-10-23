import React, { Component } from 'react';

import PageStart from '../common/pageStart';
import QuizInfo from '../quizInfo';
import QuestionList from '../questionList';
import CreateBtnGroup from '../createBtnGroup';

import generateId from '../../utils/generateId';

class Create extends Component {
	state = {
		quizName: '',
		quizTheme: '',
		questions: []
	};

	handleAddQuestion = () => {
		const id = generateId(5);
		const question = {
			id,
			title: '',
			options: [
				{ id: id + '-a1', value: '', isChosen: false, isCorrect: true },
				{ id: id + '-a2', value: '', isChosen: false }
			]
		};

		this.setState(currentState => {
			return {
				questions: currentState.questions.concat(question)
			};
		});
	}

	handleRemoveQuestion = (id) => event => {
		this.setState(currentState => {
			return {
				questions: currentState.questions.filter(question => question.id !== id)
			};
		});
	}

	handleChangeQuestion = question => event => {
		const value = event.target.value;
		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => {
					if (q.id === question.id) {
						q.title = value
					}
					return q;
				})
			};
		});
	}

	handleChangeOption = (id, option) => event => {
		const value = event.target.value;
		const curQuestion = { ...this.state.questions.find(q => q.id === id) };
		const curOptions = curQuestion.options.map(o => {
			if (o.id === option.id) {
				o.value = value;
			}
			return o;
		});

		curQuestion.options = curOptions;

		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => q.id === id ? curQuestion : q)
			};
		});
	}

	handlePickAnswer = (id, option) => event => {
		const curQuestion = { ...this.state.questions.find(q => q.id === id) };
		const curOptions = curQuestion.options.map(o => {
			if (o.id === option.id) {
				o.isCorrect = true;
			} else {
				o.isCorrect = false;
			}
			return o;
		});

		curQuestion.options = curOptions;

		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => q.id === id ? curQuestion : q)
			};
		});
	}

	handleAddOption = id => event => {
		const curQuestion = { ...this.state.questions.find(question => question.id === id) };
		const curOptions = curQuestion.options.map(o => ({ ...o }));
		curOptions.push({
			id: `${id}-a${curOptions.length + 1}`,
			value: '',
			isChosen: false
		});
		curQuestion.options = curOptions;

		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => q.id === id ? curQuestion : q)
			};
		});
	}

	handleRemoveOption = id => event => {
		const curQuestion = { ...this.state.questions.find(question => question.id === id) };
		const curOptions = curQuestion.options.map(o => ({ ...o }));
		const removed = curOptions.pop();

		if (removed.isCorrect) {
			curOptions[curOptions.length - 1].isCorrect = true;
		}

		curQuestion.options = curOptions;

		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => q.id === id ? curQuestion : q)
			};
		});
	}

	handleChangeName = (event) => {
		this.setState({
			quizName: event.target.value
		});
	}

	handleChangeTheme = (event) => {
		this.setState({
			quizTheme: event.target.value
		});
	}

	handleCreate = (event) => {
		this.props.onCreateQuiz(this.state);
		this.props.history.push('/');
	}

	validate() {
		const quiz = this.state;

		if (quiz.quizName.length === 0 || quiz.quizTheme.length === 0) {
			return true;
		}

		return this.findEmptyFields();
	}

	findEmptyFields() {
		const questions = this.state.questions;
		for (let i = 0; i < questions.length; i++) {
			if (questions[i].title.length === 0) {
				return true;
			}

			const options = questions[i].options;
			for (let j = 0; j < options.length; j++) {
				if (options[j].value.length === 0) {
					return true;
				}
			}
		}

		return false;
	}

	render() {
		const { questions } = this.state;
		return (
			<React.Fragment>
				<PageStart
					heading="Create quiz"
					text='This is the quiz generator. To add new question - click "Add question" button. Be aware, that quiz must contain at least two questions and every filed should be filled!'
				/>
				<QuizInfo
					name={this.state.quizName}
					theme={this.state.quizTheme}
					onChangeName={this.handleChangeName}
					onChangeTheme={this.handleChangeTheme}
				/>
				<QuestionList
					questions={questions}
					onChangeQuestion={this.handleChangeQuestion}
					onChangeOption={this.handleChangeOption}
					onPickAnswer={this.handlePickAnswer}
					onAddOption={this.handleAddOption}
					onRemoveOption={this.handleRemoveOption}
					onRemoveQuestion={this.handleRemoveQuestion}
				/>
				<CreateBtnGroup
					disabled={this.validate()}
					onAddQuestion={this.handleAddQuestion}
					onCreateQuiz={this.handleCreate}
					questionsLength={questions.length}
				/>
			</React.Fragment>
		);
	}
}

export default Create;