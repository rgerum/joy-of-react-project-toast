import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([])

  function addToast() {
    const newToastList = [
        ...toastList,
      {id: crypto.randomUUID(),variant:variant, message:message}
    ]
    setToastList(newToastList);
  }
  function removeToast(id) {
    const newToastList = toastList.filter(value => value.id !== id);
    setToastList(newToastList)
  }

  function onSubmit(event) {
    event.preventDefault();
    addToast();
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} removeToast={removeToast}/>

      <form onSubmit={onSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput}
            value={message} onChange={event => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(value => (
                <label key={value} htmlFor={`variant-${value}`}>
                  <input
                      id={`variant-${value}`}
                      type="radio"
                      name="variant"
                      checked={value === variant}
                      onChange={event => setVariant(value)}
                  />
                  {value}
                </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}/>
          <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
