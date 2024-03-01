import React from "react";
import Link from "next/link";
import styles from "./LinkButton.module.scss";
export interface ILinkButton {
  id: string;
  label: string;
}
const LinkButton = (props: ILinkButton) => {
  const { id, label } = props;
  return (
    <Link className={styles.container} href={`/blog/${id}`}>
      {label}
    </Link>
  );
};
export default LinkButton;
