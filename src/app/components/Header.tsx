'use client';

import Image from "next/image";
import Container from "./utils/Container";
import Button from "./utils/Button";
import { useRef, useState } from "react";
import Menu from "./Menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header(){

    const menuRef = useRef<HTMLDivElement | null>(null);
    const tl = useRef<GSAPTimeline | null>(null);

    const { contextSafe } = useGSAP(() => {
        if(tl){
            tl.current = gsap.timeline();
        }
    })

    const [isOpen,setIsOpen] = useState(false);

    const handleClick = contextSafe(() => {
        if(tl.current){
            if(isOpen === true){
                tl.current.to(menuRef.current,{
                    duration:1.2,
                    y:'-100%',
                    ease:"power4.out"
                });
                setIsOpen(!isOpen);
            } else {
                tl.current.to(menuRef.current,{
                    duration:1.2,
                    y:'0',
                    ease:"power4.out"
                });
                setIsOpen(!isOpen);
            }
            
        }
    })

    return(
        <section className="fixed top-0 left-0 z-10 w-full bg-transparent">
            <Container className="">
                <header className="flex justify-between items-center py-4">
                    <div>
                        <Image src="static/UnimassMobLogo.svg" width={138} height={40} alt="" />
                    </div>
                    <Button onClick={handleClick} iconClassName="" className="" typeofbutton="menuOpen" />
                </header>
            </Container>
            <div ref={menuRef} className="absolute w-full top-0 left-0 -translate-y-[100%]">
                <Menu onClick={handleClick} />
            </div>
        </section>
    )
}