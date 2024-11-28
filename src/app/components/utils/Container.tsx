import { ContainerProps } from "@/types";

export default function Container({ className, ...props }: ContainerProps){
    return(
        <div className={`mx-auto px-4 sm:w-full md:w-[750px] lg:w-[1170px] ${className}`}>
            {props.children}
        </div>
    )
}