'use client';

import Image from "next/image";
import Container from "./utils/Container";
import Button from "./utils/Button";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import gsap from "gsap";

export default function Header(){

    const tl = gsap.timeline();    
    const menuRef = useRef(null);

    const [isOpen,setIsOpen] = useState(false);

    function handleClick(){
        if(isOpen === true){
            tl.to(menuRef.current,{
                duration:1.2,
                y:'-100%',
                ease:"power4.out"
            });
            setIsOpen(!isOpen);
        } else {
            tl.to(menuRef.current,{
                duration:1.2,
                y:'0',
                ease:"power4.out"
            });
            setIsOpen(!isOpen);
        }
    }
    

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