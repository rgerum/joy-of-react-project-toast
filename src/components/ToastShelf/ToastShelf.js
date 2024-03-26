import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";
import {useEscapeKeyHook} from "../../hooks/useEscapeKey.hook";

function ToastShelf() {
    const {toastList, removeToast, removeAllToasts} = React.useContext(ToastContext);

    function DismissAll() {
        removeAllToasts();
    }
    useEscapeKeyHook(DismissAll)

    return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
    >
        {toastList.map((toast, i) => (
            <li key={toast.id} className={styles.toastWrapper} style={{"--pos": toastList.length - i - 1}}>
                <div className={styles.toastWrapperInner}>
                <Toast message={toast.message} variant={toast.variant}
                       doHide={() => removeToast(toast.id)}/>
                </div>
            </li>))}
    </ol>
  );
}

export default ToastShelf;
