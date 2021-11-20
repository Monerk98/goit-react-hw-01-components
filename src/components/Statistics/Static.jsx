import React from "react";
import s from "./Static.module.css";
import PropTypes from "prop-types";
import color from "./random";

const Static = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className="title">{title}</h2>

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: color() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Static.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  static: PropTypes.array,
};

export default Static;
