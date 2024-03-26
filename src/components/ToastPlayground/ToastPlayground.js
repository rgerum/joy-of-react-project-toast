import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [show, setShow] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {show &&
      <Toast message={message} variant={variant} doHide={() => setShow(false)}/>}

      <div className={styles.controlsWrapper}>
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
            <Button onClick={() => setShow(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
