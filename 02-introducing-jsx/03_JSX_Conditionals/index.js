

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component{
	render() {
		const num = getNum();
		let msg;
		if(num === 7) {
			msg = <div>
				<h2>Congrats You Win!</h2>
				<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"/>
			</div>
		}else {
			msg = <h2>Sorry You Lose!</h2>
		}
		return (
			<div>
				<h1>Your Number is: {num}</h1>
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));

//way no 2............

// function getNum() {
// 	return Math.floor(Math.random() * 10) + 1;
// }

// class NumPicker extends React.Component{
// 	render() {
// 		const num = getNum();
// 		return (
// 			<div>
// 				<h1>Your Number is: {num}</h1>
// 				<p>{num === 7? 'Congrats' : 'Unlucky'}</p>
// 				{
// 					num === 7? <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"/> : null
// 				}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<NumPicker />, document.getElementById('root'));