import React from "react";

const products = [
  { name: "product1", price: 100.0 },
  { name: "product2", price: 200.0 },
];
function App() {
  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
