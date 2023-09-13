import React from "react";

import styles from "./optionsToNavigate.module.scss";
const OptionsToNavigate = ({ navigate, items }) => {
  return (
    <div className={styles.linksRow}>
      <ul>
        {items.map((item) => (
          <li
            className={styles.listItem}
            onClick={() => navigate(item.path)}
            key={item.name}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsToNavigate;
