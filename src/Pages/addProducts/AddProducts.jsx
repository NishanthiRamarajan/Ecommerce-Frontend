import React from "react";
import CardList from "./CardList";
import apro from "./AddProducts.module.css";
import { useRef } from "react";
const AddProducts = ({ items = [], click, removeItem, setAddedItem }) => {
    const total = items
    ? items.reduce((pre, cur) => {
        return pre + Number(cur.addNumber) * Number(cur.price);
      }, 0).toFixed(2)
    : 0;

  const showDivRef = useRef(null);

  return (
    <div ref={showDivRef} className={apro["addproducts__container"]}>
      <div className={apro["left-side"]}>
        <div className={apro["check-out-container"]}>
          <div className={apro["check-out-print"]}>
            <h1 className={apro["check-out-title"]}>Shopping</h1>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th className={apro["table-item-title"]}>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
              {items && items.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.addNumber}</td>
                </tr>
              ))}
              
              </tbody>
              <tfoot>
                <tr>
                  <td className={apro["total"]} colSpan={2}>
                    Total
                  </td>
                  <td className={apro["total"]} colSpan={2}>
                    ${total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className={apro["right-side"]}>
        <div className={apro["right-side-header"]}>
          <h1 style={{fontSize:'32px'}}>
          𝒀𝒐𝒖𝒓  {items.length <= 1 ? " 𝑰𝒕𝒆𝒎" : " 𝑰𝒕𝒆𝒎𝒔"} <span className="total-items">{items.length}</span>
           
          </h1>
          <button 
            className={apro["remove-item-btn"]}
            onClick={() => {
              showDivRef.current.classList.add("animate");
              setTimeout(() => click(false), 200);
            }}
          >
            Back
          </button>
        </div>
        <div className={apro["right-side-body"]}>
          {items.map((item, i, itemsArr) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
        </div>
        <div className={apro["right-side-footer"]}>
          <div className={apro["bar"]}></div>
          <div className={apro["footer-head"]}>
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className={apro["check-out"]}>
            <button
              className={apro["check-out-btn"]}
              onClick={() => {
                items.length >= 1 && window.print();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
