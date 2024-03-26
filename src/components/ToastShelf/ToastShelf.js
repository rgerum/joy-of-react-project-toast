import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList, removeToast}) {


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
