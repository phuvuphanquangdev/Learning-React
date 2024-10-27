class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

class Welcome extends React.Component {
	render() {
		return (
			<div>
				<h2>Welcome to the next journey</h2>
				<h3>Happy Learning</h3>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));

ReactDOM.render(<Welcome/>, document.getElementById('welcome'));
