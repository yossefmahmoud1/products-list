import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    product: '',
    price: '',
    quantity: 1
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add({ 
      product: this.state.product, 
      price: parseFloat(this.state.price), 
      quantity: parseInt(this.state.quantity) 
    });
    this.setState({ product: '', price: '', quantity: 1 });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={this.state.product}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItem;
