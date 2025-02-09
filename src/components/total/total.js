import React from 'react';

const Total = ({ items }) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  return (
    <div>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Total;
