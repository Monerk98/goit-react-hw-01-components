import React from "react";
import s from "./Transact.module.css";
import PropTypes from "prop-types";

const History = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.transaction}>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.tr} key={id}>
              <td className={s.td}>{type}</td>
              <td className={s.td}>{amount}</td>
              <td className={s.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

History.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  items: PropTypes.array,
};

export default History;
