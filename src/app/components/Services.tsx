import { ServiceItemProps, ServicesProps } from "@/types";
import Image from "next/image";
import Button from "./utils/Button";



function Service({ id, imgSrc, title }:ServiceItemProps){
    return (
        <article className="border border-white p-4">
            <div className="flex items-center justify-between">
                <Image src={imgSrc} width={40} height={40} alt={title} />
                <Button className="" iconClassName="dark:invert" typeofbutton="arrow-right" />
            </div>
            <h2 className="mt-14 text-textWhite capitalize text-xl">{title}</h2>
        </article>
    )
}


export default function Services({ serviceItems }:ServicesProps){
    
    return(
    <>
      {
        serviceItems.map((service) => (
            <Service key={service.id} {...service} />
        ))
      }  
    </>
    )
    
}