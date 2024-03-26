import {useKeyDownHook} from "./useKeyDown.hook";


export function useEscapeKeyHook(callback) {
    useKeyDownHook(callback,"Escape");
}