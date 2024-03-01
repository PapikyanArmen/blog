"use client";
import React from "react";
import styles from "./Chip.module.scss";
const Chip = (props: { label: string }) => {
  const { label } = props;
  return (
    <div className={styles.container}>
      <span>{label}</span>
    </div>
  );
};
export default Chip;
