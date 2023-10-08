import { useEffect, RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
    const handlerClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handlerClick);
        return () => {
            document.removeEventListener('mousedown', handlerClick);
        };
    });

};

export default useClickOutside;