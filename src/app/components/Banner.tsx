'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const images = [
    {
        id:1,
        imgSrc : "/slider/1.jpg"
    },
    {
        id:2,
        imgSrc : "/slider/2.jpg"
    },
    {
        id:3,
        imgSrc : "/slider/3.jpg"
    },
    {
        id:4,
        imgSrc : "/slider/4.jpg"
    },
    {
        id:5,
        imgSrc : "/slider/5.jpg"
    },
    {
        id:6,
        imgSrc : "/slider/6.jpg"
    },
]

export default function Banner(){
    return (
        <section className="h-[100vh] top-0 -z-10">
            <Swiper className="h-100"
            spaceBetween={0} slidesPerView={1} >
                {
                    images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="h-[100vh] overflow-hidden">
                                <Image layout="fill" className="object-cover" src={image.imgSrc} alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
        
    )
}