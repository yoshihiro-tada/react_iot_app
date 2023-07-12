import React from 'react';
import { FC, MouseEventHandler} from "react";
import styles from './HumButton.module.css';

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
};

export const HumButton: FC<Props> = ({ open, controls, label, onClick }) => {
  return (
    <React.Fragment>
      <button
        type = "button"
        aria-controls = { controls }
        aria-expanded = { open }
        aria-label = { label }
        onClick = { onClick }
        className={styles.humButton}
      >
        <span className={styles.line_1}></span>
        <span className={styles.line_2}></span>
      </button>
    </React.Fragment>
  );
};