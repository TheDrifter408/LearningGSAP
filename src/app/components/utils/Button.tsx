import { ButtonProps } from "@/types";
import Image from "next/image";

export default function Button({ className,iconClassName,typeofbutton,imageSrc,...props }:ButtonProps){
    let imgSrc = "";
    switch (typeofbutton) {
        case "menuOpen":
            imgSrc = "static/MenuIcon.svg";
            break;
        case "menuClose":
            imgSrc = "static/MenuClose.svg";
            break;
        case "arrow-left":
            imgSrc = "static/ArrowLeft.svg";
            break;
        case "arrow-right":
            imgSrc = "static/ArrowRight.svg";
            break;
        case "dropDown":
            imgSrc = "static/dropDown.svg";
            break;
        default:
            imgSrc = "";
            break;
    }

    return(
        <button className={`relative flex items-center justify-center ` + className} {...props}>
            { 
            imgSrc.length === 0 || imgSrc === undefined ? 
            <></> :
            <Image className={iconClassName} src={imgSrc} width={40} height={40} alt="" />  
            }
            {props.children}
        </button>
    )
}