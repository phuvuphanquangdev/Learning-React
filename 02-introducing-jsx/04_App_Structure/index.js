class App extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
        <NumPicker/>
        <Bye/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
