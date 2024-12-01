'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';
import { useSmoothScrollProps } from '@/types';

gsap.registerPlugin(ScrollSmoother,ScrollTrigger,ScrollToPlugin);


export default function useSmoothScroll({ isMobile }:useSmoothScrollProps){
    const el = useRef(null);
    const pathname = usePathname();

    useGSAP(() => {
        let smoother = null;
        if(!ScrollTrigger.isTouch && smoother !== null){
            smoother = ScrollSmoother.create({
                smooth: !isMobile ? 2 : 0,
                effects: !isMobile,
                smoothTouch: 0.1,
                ignoreMobileResize: true
            })
        } 

        ScrollTrigger.refresh();
        // Scroll to the top when the page changes
        if(window){
            window.scrollTo(0,0);
        }
        return () => {
            if(!smoother){
                ScrollTrigger.refresh();
            }
        }
    },[isMobile,pathname])
    return el;
}