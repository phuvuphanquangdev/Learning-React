class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          from="Arya Stark" 
          to="Night Walker" 
          num={4} 
          data={[1,2,3,4]}
          img="https://unsplash.com/photos/WHWYBmtn3_0"
          bangs={4}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))