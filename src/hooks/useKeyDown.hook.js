import React from "react";

export function useKeyDownHook(callback, key) {
    React.useEffect(() => {
        function Listener(event) {
            if(event.code === key) {
                callback();
            }
        }
        window.addEventListener('keydown', Listener);
        return () => window.removeEventListener('keydown', Listener);
    }, [callback])
}