// import React from "react";
// import "./List.css";
// function List({ products }) {
//   return (
//     <ol>
//       {products.map((product) => (
//         <li key={product.id}>{product.title}</li>
//       ))}
//     </ol>
//   );
// }
// export default List;










// import React, { useState } from "react";
// import "./List.css";

// function List({ products, onItemClick }) {
//   const [ratings, setRatings] = useState({});

//   const handleRatingChange = (productId, rating) => {
//     setRatings({ ...ratings, [productId]: rating });
//   };

//   return (
//     <ol>
//       {products.map((product) => (
//         <li key={product.id} onClick={() => onItemClick(product)}>
//           <span>{product.title}</span>
//           <Rating
//             productId={product.id}
//             initialValue={ratings[product.id]}
//             onChange={handleRatingChange}
//           />
//         </li>
//       ))}
//     </ol>
//   );
// }

// function Rating({ productId, initialValue, onChange }) {
//   const [rating, setRating] = useState(initialValue || 0);

//   const handleRatingClick = (value) => {
//     setRating(value);
//     onChange(productId, value);
//   };

//   return (
//     <div className="rating">
//       {[1, 2, 3, 4, 5].map((value) => (
//         <span
//           key={value}
//           className={value <= rating ? "active" : ""}
//           onClick={() => handleRatingClick(value)}
//         >
//           ★
//         </span>
//       ))}
//     </div>
//   );
// }

// export default List;
