class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  icrement =() => {
    this.setState({counter: this.state.counter + 1})
  }
  decrement=()=> {
    this.setState({counter: this.state.counter > 0 ? this.state.counter - 1 : this.state.counter})
  }
  
  render() {
    const { counter } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h1", null, counter),
      React.createElement("button", {onClick: this.icrement}, "+"),
      React.createElement("button", {onClick: this.decrement}, "-")
    );
  }
}

const reactElement = React.createElement(Counter);
ReactDOM.render(reactElement, document.getElementById("root"));












// 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