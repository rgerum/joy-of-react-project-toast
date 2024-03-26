import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const {toastList, removeToast} = React.useContext(ToastContext);

    return (
    <ol className={styles.wrapper}>
        {toastList.map(toast => (
            <li key={toast.id} className={styles.toastWrapper}>
                <Toast message={toast.message} variant={toast.variant}
                       doHide={() => removeToast(toast.id)}/>
            </li>))}
    </ol>
  );
}

export default ToastShelf;
