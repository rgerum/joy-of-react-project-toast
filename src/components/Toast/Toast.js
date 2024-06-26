import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, message, remove, doHide}) {
    const Icon = ICONS_BY_VARIANT[variant];
    const className = `${styles.toast} ${styles[variant]}`
  return (
    <div className={className}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
          <VisuallyHidden>
              {variant} -
          </VisuallyHidden>
          {message} {remove}
      </p>
      <button className={styles.closeButton}
              aria-label="Dismiss message"
              aria-live="off"
              onClick={doHide}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
