
function getMood() {
	const moods =['Angry', 'Hungry', 'silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h2>My Previous Mood is: {getMood()}</h2>
				<h1>My Current Mood is: {getMood()}</h1>
				<h2>My Next Mood is: {getMood()}</h2>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
