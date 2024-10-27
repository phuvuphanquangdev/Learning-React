class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = (s1 === s2) && (s2 === s3);

    return (
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>{winner ? 'Winner!' : 'Loser!'}</p>
      </div>
    )
  }
}       

// class Machine extends React.Component {
//   render() {
//     return (
//       <h1>Hello</h1>
//     )
//   }
// }