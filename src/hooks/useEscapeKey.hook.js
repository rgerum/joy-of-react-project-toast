import React from "react";

export function useEscapeKeyHook(callback) {
    React.useEffect(() => {
        function Listener(event) {
            if(event.code === "Escape") {
                callback();
            }
        }
        window.addEventListener('keydown', Listener);
        return () => window.removeEventListener('keydown', Listener);
    }, [callback])
}