import React from "react";
import styles from "./section.module.scss";

export const Section = React.forwardRef(({ children, className }, ref) => (
  <section ref={ref} className={styles[className]}>
    {children}
  </section>
));
