class Hello extends React.Component {
  render() {
    console.log(this.props);
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h3> Hello {this.props.to} from {this.props.from}{bangs}</h3>
        <img src={this.props.img}/>
      </div>
    )
  }
}