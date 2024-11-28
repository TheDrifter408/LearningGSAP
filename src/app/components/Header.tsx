'use client';

import Image from "next/image";
import Container from "./utils/Container";
import Button from "./utils/Button";
import { useRef } from "react";
import Menu from "./Menu";

export default function Header(){
    
    const menuRef = useRef(null);

    return(
        <section className="fixed top-0 left-0 z-10 w-full bg-transparent">
            <Container className="">
                <header className="flex justify-between items-center py-4">
                    <div>
                        <Image src="static/UnimassMobLogo.svg" width={138} height={40} alt="" />
                    </div>
                    <Button iconClassName="" className="" typeofbutton="menuOpen" />
                </header>
            </Container>
            <div ref={menuRef} className="absolute w-full top-0 left-0">
                <Menu />
            </div>
        </section>
    )
}