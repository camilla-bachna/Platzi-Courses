import { Component } from "react";

class Button extends Component {
  state = { count: 0 };
  handleClickAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleClickRemove = () => {
    this.state.count !== 0 && this.setState({ count: this.state.count - 1 });
  };
  handleClickRemoveAll = () => {
    this.setState({ count: 0 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>
          🍎: {count}
          {count === 0 ? (
            <p>There are no apples</p>
          ) : count === 1 ? (
            <p>apple</p>
          ) : (
            <p>apples</p>
          )}
        </h1>
        <button type="button" onClick={this.handleClickAdd}>
          Add
        </button>
        <button type="button" onClick={this.handleClickRemove}>
          Remove
        </button>
        <button type="button" onClick={this.handleClickRemoveAll}>
          Remove all apples
        </button>
      </div>
    );
  }
}

export default Button;
