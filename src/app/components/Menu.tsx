'use client';

import Image from "next/image";
import Button from "./utils/Button";
import Container from "./utils/Container";
import { useState } from "react";
import Link from "next/link";

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

function MenuItem({ title, items }:MenuItemProps){
    const [isExpand,setIsExpand] = useState(false);
    return(
        <div className="text-white">
            <div className="flex justify-between items-center">
            <h2 className="text-xl capitalize">{title}</h2>
            {
                items.length > 0 ?
                <Button iconClassName="" className="flex-grow-0" typeofbutton="custom">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.25L8.5 8.75L16 1.25" transform="translate(12 10)" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button> :
                <></>
            }
            </div>
            
            <div>
                <ul className={`grid grid-rows-${items.length}`}>
                    {   
                        items.length > 0 ?
                        items.map((item:string,idx:number) => (
                            <li key={idx}>
                                <Link className="capitalize text-xs" href={`/${item}`}>{item}</Link>
                            </li>
                        )) :
                        <></>
                    }
                </ul>                
            </div>
        </div>
    )
}

export default function Menu(){
    return(
        <>
        <Container className="bg-primary">
            <div className="flex justify-between items-center py-4 w-full">
                <div>
                    <Image src="static/UnimassMobLogo.svg" width={138} height={40} alt="" />
                </div>
                <Button iconClassName="" className="" typeofbutton="menuClose" />
            </div>
            <div>
                <nav>
                    <ul>
                        {
                            menuItems.map((menuItem) => (
                                <MenuItem key={menuItem.id} {...menuItem} />
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </Container>

        </>
    )
}