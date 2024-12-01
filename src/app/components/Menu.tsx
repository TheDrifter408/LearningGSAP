'use client';

import Image from "next/image";
import Button from "./utils/Button";
import Container from "./utils/Container";
import gsap from "gsap";
import { useState } from "react";

import Link from "next/link";
import { MenuProps } from "@/types";

type MenuItemProps = {
    id:number;
    title:string;
    items:string[];
}

const menuItems = [
    {
        id:1,
        title:"about us",
        items:[
            "who we are",
            "board of directors"
        ]
    },
    {
        id:2,
        title:"projects",
        items:[
            "rent",
            "buy",
            "residential",
            "commercial"
        ]
    },
    {
        id:3,
        title:"service",
        items:[
            "interior solutions",
            "re-sale of property",
            "renovations & modifications",
            "legal & logistics services",
            "design consultancy services",
            "rental services",
            "building management"
        ]
    },
    {
        id:4,
        title:"media center",
        items:[
            "events",
            "news",
            "blogs"
        ]
    },
    {
        id:5,
        title:"career",
        items:[]
    },
    {
        id:6,
        title:"contact us",
        items:[]
    },
    {
        id:7,
        title:"begin your journey",
        items:[]
    }
];

const addressItems = [
    {
        id:1,
        title:"address",
        text:"House 04, Road 28(Old)15(New),Dhanmondi,Dhaka 1209"
    },
    {
        id:2,
        title:"call",
        text:"+8802 41020276-8"
    },
    {
        id:3,
        title:"email",
        text:"info@unimassbd.com"
    },
]

function MenuItem({ id,title, items }:MenuItemProps){
    let tl = gsap.timeline();
    const [isExpand,setIsExpand] = useState(false);
    
    function handleClick(id:number){
        if(isExpand === true){
            tl.to(`.submenu[data-submenu="${id}"]`,{
                duration: 1.2,
                height:"0",
                ease:"power4.out"
            });
            setIsExpand(!isExpand);
        } else {
            tl.to(`.submenu[data-submenu="${id}"]`,{
                duration:1.2,
                height:"auto",
                ease:"power4.out"
            });
            setIsExpand(!isExpand);
        }
        
    }
    return(
        <div className="text-textWhite">
            <div className={`flex justify-between items-center py-2 border border-x-0 border-t-0  mx-2 border-textWhite ${!isExpand ? 'border-b-1' : 'border-b-0 '}`}>
            <h2 className="text-2xl capitalize py-2">{title}</h2>
            {
                items.length > 0 ?
                <Button iconClassName="" className="flex-grow-0" typeofbutton="custom" onClick={()  => handleClick(id)}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.25L8.5 8.75L16 1.25" transform="translate(12 10)" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button> :
                <></>
            }
            </div> 
            <div className="submenu overflow-hidden h-0 mx-auto" data-submenu={`${id}`}>
                <ul className={`grid grid-rows-[${items.length}] mx-2 pb-2 border border-t-0 border-x-0 ${isExpand ? 'border-b-1' : 'border-b-0'} `}>
                    {   
                        items.length > 0 ?
                        items.map((item:string,idx:number) => (
                            <li className="pb-2" key={idx}>
                                <Link className="capitalize text-xl" href={`/${item}`}>{item}</Link>
                            </li>
                        )) :
                        <></>
                    }
                </ul>                
            </div>
        </div>
    )
}

export default function Menu({ onClick }:MenuProps ){
    return(
        <>
        <Container className="bg-primary">
            <div className="flex justify-between items-center py-4 w-full">
                <div>
                    <Image src="static/UnimassMobLogo.svg" width={138} height={40} alt="" />
                </div>
                <Button onClick={onClick} iconClassName="" className="" typeofbutton="menuClose" />
            </div>
            <div>
                <nav>
                    <ul className="py-4">
                        {
                            menuItems.map((menuItem) => (
                                <MenuItem key={menuItem.id} {...menuItem} />
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className="mt-2 grid grid-cols-[1.2fr_1fr]">
                <div className="mx-2">
                    {
                        addressItems.map((address) => (
                            <div className="text-textWhite" key={address.id}>
                                <h2 className="font-bold my-4 capitalize">{address.title}</h2>
                                <p>{address.text}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                   <div>

                   </div> 
                </div>
            </div>
            <div className="flex justify-between items-center text-textWhite mt-4 border border-textWhite border-t-1 border-x-0 border-b-0 py-2">
                <p>&copy; All rights Reserved</p>
                <p>Developed by <a href="www.dcastalia.com">Dcastalia</a></p>
            </div>
        </Container>

        </>
    )
}