import React from 'react';

const Items = ({ items, del, updateQuantity }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.product}</td>
            <td>${item.price}</td>
            <td>
              <button onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
            </td>
            <td>
              <button onClick={() => del(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Items;
