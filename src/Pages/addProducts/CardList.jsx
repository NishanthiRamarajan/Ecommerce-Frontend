// import React, { useReducer, useEffect } from "react";
// import clist from "./CardList.module.css";
// function reducer(state, action) {
//   // console.log(state);
//   if (action.type === "INCREASE") {
//     return {
//       ...state,
//       addNumber: state.addNumber + 1,
//     };
//   } else if (action.type === "DECREASE") {
//     if (state.addNumber == 1) {
//       return state;
//     }
//     return {
//       ...state,
//       addNumber: state.addNumber - 1,
//     };
//   }
// }
// const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
//   const [state, dispatch] = useReducer(reducer, item);

//   useEffect(() => {
//     const newArr = itemsArr.map((itemArr) => {
//       itemArr.id === item.id && (item.addNumber = state.addNumber);
//       return itemArr;
//     });
//     setAddedItem(newArr);
//   }, [state]);

//   return (
//     <div className={clist["card-list-body"]}>
//       <img src={item.image} className={clist["card-list-img"]} alt="" />
//       <button 
//         className={clist["delete-btn"]}
//         onClick={() => {
//           document.querySelector(".card-list-body").classList.add("animate");
//           setTimeout(() => removeItem(item), 190);
//         }}
//       >
//         ✘
//       </button>
//       <h4>{item.title}</h4>
//       <hr />
//       <div className={clist["card-list-add-minu-body"]}>
//         <p>Price : ${item.price}</p>
//         <div className={clist["plus-items-minu"]}>
//           <button
//             className={clist["plus-btn"]}
//             onClick={() => {
//               dispatch({ type: "INCREASE" });
//             }}
//           >
//             +
//           </button>
//           <span className={clist["num-of-items"]}>{item.addNumber}</span>
//           <button
//             className={clist["minu-btn"]}
//             onClick={() => {
//               dispatch({ type: "DECREASE" });
//             }}
//           >
//             -
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardList;


// // import React, { useReducer, useEffect } from "react";
// // function reducer(state, action) {
// //   // console.log(state);
// //   if (action.type === "INCREASE") {
// //     return {
// //       ...state,
// //       addNumber: state.addNumber + 1,
// //     };
// //   } else if (action.type === "DECREASE") {
// //     if (state.addNumber == 1) {
// //       return state;
// //     }
// //     return {
// //       ...state,
// //       addNumber: state.addNumber - 1,
// //     };
// //   }
// // }
// // const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
// //   const [state, dispatch] = useReducer(reducer, item);

// //   useEffect(() => {
// //     const newArr = itemsArr.map((itemArr) => {
// //       itemArr.id == item.id && (item.addNumber = state.addNumber);
// //       return itemArr;
// //     });
// //     setAddedItem(newArr);
// //   }, [state]);

// //   return (
// //     <div className="card-list-body">
// //       <img src={item.image} className="card-list-img" alt="" />
// //       <button
// //         className="delete-btn"
// //         onClick={() => {
// //           document.querySelector(".card-list-body").classList.add("animate");
// //           setTimeout(() => removeItem(item), 190);
// //         }}
// //       >
// //         ✘
// //       </button>
// //       <h4>{item.title}</h4>
// //       <hr />
// //       <div className="card-list-add-minu-body">
// //         <p>Price : ${item.price}</p>
// //         <div className="plus-items-minu">
// //           <button
// //             className="plus-btn"
// //             onClick={() => {
// //               dispatch({ type: "INCREASE" });
// //             }}
// //           >
// //             +
// //           </button>
// //           <span className="num-of-items">{item.addNumber}</span>
// //           <button
// //             className="minu-btn"
// //             onClick={() => {
// //               dispatch({ type: "DECREASE" });
// //             }}
// //           >
// //             -
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardList;



import React, { useReducer, useEffect, useState } from "react";
import clist from "./CardList.module.css";

function reducer(state, action) {
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber === 1) {
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  } else if (action.type === "SET_RATING") {
    return {
      ...state,
      rating: action.payload,
    };
  }
}

const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
  const [state, dispatch] = useReducer(reducer, item);
  const [rating, setRating] = useState(item.rating);

  useEffect(() => {
    const newArr = itemsArr.map((itemArr) => {
      if (itemArr.id === item.id) {
        itemArr.addNumber = state.addNumber;
        itemArr.rating = rating;
      }
      return itemArr;
    });
    setAddedItem(newArr);
  }, [state, rating]);

  const handleSetRating = (newRating) => {
    dispatch({ type: "SET_RATING", payload: newRating });
    setRating(newRating);
  };

  return (
    <div className={clist["card-list-body"]}>
      <img src={item.image} className={clist["card-list-img"]} alt="" />
      <button
        className={clist["delete-btn"]}
        onClick={() => {
          document
            .querySelector("." + clist["card-list-body"])
            .classList.add("animate");
          setTimeout(() => removeItem(item), 190);
        }}
      >
        ✘
      </button>
      <h4>{item.title}</h4>
      <hr />
      <div className={clist["card-list-add-minu-body"]}>
        <p>Price : ${item.price}</p>
        <div className={clist["plus-items-minu"]}>
          <button
            className={clist["plus-btn"]}
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          >
            +
          </button>
          <span className={clist["num-of-items"]}>{item.addNumber}</span>
          <button
            className={clist["minu-btn"]}
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            -
          </button>
        </div>
        <div className={clist["rating"]}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleSetRating(star)}
              style={{ cursor: "pointer" }}
            >
              {star <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
