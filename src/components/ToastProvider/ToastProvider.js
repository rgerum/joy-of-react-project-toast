import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([])

  const value = React.useMemo(() => {return {
    addToast: (message, variant) => {
      const newToastList = [
        ...toastList,
        {id: crypto.randomUUID(), variant, message}
      ]
      setToastList(newToastList);
    },
    removeToast: (id) => {
      const newToastList = toastList.filter(value => value.id !== id);
      setToastList(newToastList)
    },
    removeAllToasts: () => {
      setToastList([])
    },
    toastList
  }
  },[toastList]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
