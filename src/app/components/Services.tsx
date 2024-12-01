import { ServiceItemProps, ServicesProps } from "@/types";
import Image from "next/image";
import Button from "./utils/Button";



function Service({ id, imgSrc, title }:ServiceItemProps){
    return (
        <article className="group border border-white p-5 bg-secondary-bg bg-bottom bg-no-repeat bg-[length:100%_0%] transition-background-size duration-200 hover:bg-[length:100%_100%]">
            <div className="flex items-center justify-between">
                <Image src={imgSrc} width={40} height={40} alt={title} />
                <Button className="" iconClassName="dark:invert -rotate-45 transtion-transform duration-200 group-hover:rotate-0" typeofbutton="arrow-right" />
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