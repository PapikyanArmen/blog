"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Back.module.scss";
const Back = () => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => {
        router.back();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#fff"
        version="1.1"
        id="Capa_1"
        width="30px"
        height="20px"
        viewBox="0 0 299.021 299.021"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977    c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516    c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776    c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993    C293.802,254.384,293.34,254.432,292.866,254.432z" />
          </g>
        </g>
      </svg>
      <span> Back</span>
    </div>
  );
};
export default Back;
