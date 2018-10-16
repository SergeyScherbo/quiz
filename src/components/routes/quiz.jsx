import React, { Component } from 'react';
import PageStart from '../common/pageStart';
import Question from '../common/question';
import Progress from '../common/progress';
import Result from '../result';

class Quiz extends Component {
	state = {
		currentQuestion: 0,
		quiz: null,
		progress: []
	};

	componentDidMount() {
		this.setState({
			quiz: this.props.location.state.quiz
		});
	}

	handlePickOption = (id, option) => event => {
		const curQuestion = { ...this.state.quiz.questions.find(q => q.id === id) };
		const curOptions = curQuestion.options.map(o => {
			o.isChosen = o.id === option.id ? true : false;
			return o;
		});

		curQuestion.options = curOptions;

		this.setState(currentState => {
			const quiz = currentState.quiz;
			const quizQuestions = currentState.quiz.questions.map(q => q.id === curQuestion.id ? curQuestion : q);
			quiz.questions = quizQuestions;
			return {
				quiz
			};
		});
	};

	handleAnswer = (disabled, question) => event => {
		if (disabled) return;

		const chosen = question.options.find(o => o.isChosen);
		const answer = chosen.isChosen && chosen.isCorrect ? 1 : 0;

		this.setState(currentState => {
			return {
				currentQuestion: currentState.currentQuestion + 1,
				progress: currentState.progress.concat([answer])
			}
		});
	};

	render() {
		const { quiz } = this.props.location.state;
		const { currentQuestion } = this.state;
		const quizLength = quiz.questions.length;
		return (
			<React.Fragment>
				<PageStart
					heading={`Quiz: ${quiz.quizName}`}
					text={`Theme: ${quiz.quizTheme}`}
				/>
				<Progress
					current={currentQuestion}
					quizLength={quizLength}
				/>
				{
					quizLength === this.state.progress.length
						? <Result progress={this.state.progress} />
						: <Question
							question={quiz.questions[currentQuestion]}
							currentQuestion={currentQuestion}
							quizLength={quizLength}
							onPickOption={this.handlePickOption}
							onAnswer={this.handleAnswer}
							onFinish={this.handleFinish}
						/>
				}
			</React.Fragment>
		);
	}
}

export default Quiz;