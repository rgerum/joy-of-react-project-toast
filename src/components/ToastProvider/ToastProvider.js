import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([])

  React.useEffect(() => {
    function removeToasts() {
      const currentTime = new Date();
      let newToastList = toastList;
      for(let toast of toastList) {
        if(currentTime - toast.start > toast.duration) {
          newToastList = newToastList.filter(value => value.id !== toast.id);
        }
        else if(currentTime - toast.start > toast.duration - 1000 && !toast.remove) {
          newToastList = newToastList.map(value => value.id !== toast.id ? value : {...value, remove:true});
        }
      }
      if(newToastList !== toastList)
        setToastList(newToastList)
    }
    const timer = window.setInterval(removeToasts, 100);
    return () => window.clearInterval(timer);
  }, [toastList]);

  const value = React.useMemo(() => {return {
    addToast: (message, variant, duration= 10000) => {
      const newToastList = [
        ...toastList,
        {id: crypto.randomUUID(),
         variant,
         message,
         duration: duration,
         start: new Date(),
          remove: false,
        }
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
