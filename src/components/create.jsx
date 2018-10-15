import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import generateId from '../utils/generateId';
import PageStart from './pageStart';

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
				{ id: id + '-a1', value: '', isCorrect: true },
				{ id: id + '-a2', value: '' }
			]
		};

		this.setState(currentState => {
			return {
				questions: currentState.questions.concat(question)
			}
		})
	}

	handleChangeQuestion = (question, event) => {
		const value = event.target.value;
		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => {
					if (q.id === question.id) {
						q.title = value
					}
					return q;
				})
			}
		});
	}

	handleChangeOption = (id, option, event) => {
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

	handlePickAnswer = (id, option) => {
		const curQuestion = { ...this.state.questions.find(q => q.id === id) };
		const curOptions = curQuestion.options.map(o => {
			if (o.id === option.id) {
				o.isCorrect = true
			} else {
				o.isCorrect = false
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

	handleAddOption = (id) => {
		const curQuestion = { ...this.state.questions.find(question => question.id === id) };
		const curOptions = curQuestion.options.map(o => ({ ...o }));
		curOptions.push({ id: `${id}-a${curOptions.length + 1}`, value: '' });
		curQuestion.options = curOptions;

		this.setState(currentState => {
			return {
				questions: currentState.questions.map(q => q.id === id ? curQuestion : q)
			};
		});

		console.log(this.state.questions);
	}

	handleRemoveOption = (id) => {
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

	render() {
		const { questions } = this.state;
		return (
			<React.Fragment>
				<PageStart
					heading="Creating quiz"
					text="Just click the button to add a question."
				/>

				{
					questions.length === 0
						? null
						: (
							<ul className="questionList">
								{questions.map(question => (
									<li className="questionList__el" key={question.id}>
										<div className="questionList__block">
											<label className="label">Question</label>
											<textarea
												className="field field--big"
												onChange={this.handleChangeQuestion.bind(this, question)}
												value={question.title}
												placeholder="Your question">
											</textarea>
										</div>
										<div className="questionList__block">
											<label className="label label--small">Options</label>
											{question.options.map(option => (
												<div className="option" key={option.id}>
													<input
														className="field"
														onChange={this.handleChangeOption.bind(this, question.id, option)}
														value={option.value}
														type="text"
														placeholder="Answer option"
													/>
													<div
														className={`radio ${option.isCorrect ? 'radio--active' : ''}`}
														onClick={() => this.handlePickAnswer(question.id, option)}>
													</div>
												</div>
											))}
										</div>
										<div className="btn-group">
											<button className="btn btn--primary" onClick={() => this.handleAddOption(question.id)}>Add option</button>
											{
												question.options.length > 2
													? <button className="btn btn--danger" onClick={() => this.handleRemoveOption(question.id)}>Remove option</button>
													: null
											}
										</div>
									</li>
								))}
							</ul>
						)
				}

				<div className="btn-group">
					<button onClick={this.handleAddQuestion} className="btn btn--primary">Add question</button>
					{
						questions.length > 1
							? <button className="btn btn--success">Create quiz</button>
							: null
					}
				</div>
			</React.Fragment>
		);
	}
}

export default Create;