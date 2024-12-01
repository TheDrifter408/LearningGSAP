'use effect';

import { useState,useEffect } from 'react';

export default function useDeviceType(){
    const [isMobile,setIsMobile] = useState(false);
    function handleResize(){
        setIsMobile(window.innerWidth <= 1170);
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[]);
    return isMobile;
}