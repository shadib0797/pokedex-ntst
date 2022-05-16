import { RefObject, useEffect } from "react";


export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref:RefObject<T>, callback:() => void):void {
    const handleClick = (e:(MouseEvent|TouchEvent)) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};