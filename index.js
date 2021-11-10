class Heading extends React.Component {
  render() {
    const {titleForHeading, children} = this.props
    return React.createElement(
      "h1",
      { title: titleForHeading, className: "heading" },
      ...children
    );
  }
}

const container = document.getElementById("root");
const reactElement = React.createElement(Heading, {titleForHeading: "title"}, 'John Snow', ' Winter is Coming');
ReactDOM.render(reactElement, container);
