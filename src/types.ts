import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className:string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className:string;
    iconClassName:string;
    typeofbutton:"menuOpen" | "menuClose" | "dropDown" | "arrow-left" | "arrow-right" | "custom";
    imageSrc?: string;
    text?:string;
} 
