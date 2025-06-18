"use client";
import { blogs } from '@/app/blogs/[slug]/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function Blogs() {

    const router = useRouter()
    return (
        <section className="w-full py-12 lg:max-w-screen-xl">
            <div className="mx-auto bg-[#F6F6F6] px-6 rounded-3xl py-12 ">
                <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-4">

                    <div className="w-full flex  flex-col lg:w-2/5">
                        <div className="block lg:text-left text-center">
                            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span className=" text-[#A38457]">blogs</span></h2>
                            <p className="text-gray-900 mb-4  max-lg:max-w-xl max-lg:mx-auto">Stay informed with expert tips, insights, and updates on heart health and cardiovascular disease prevention, helping you stay prepared and proactive in protecting your heart.</p>
                            <p className="text-gray-900 mb-10 text-xs max-lg:max-w-xl max-lg:mx-auto">Disclaimer* This content is for informational purposes only and <br /> not a substitute for professional medical advice. <br /> Always consult your healthcare provider for any concerns.</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                            <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-[#A38457] w-11 h-11 transition-all duration-500 rounded-full hover:bg-[#A38457]" data-carousel-prev>
                                <svg className="h-6 w-6 text-[#A38457] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-[#A38457] w-11 h-11 transition-all duration-500 rounded-full hover:bg-[#A38457]" data-carousel-next>
                                <svg className="h-6 w-6 text-[#A38457] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>




                    <div className="w-full lg:w-3/5">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <Swiper
                                    breakpoints={
                                        {
                                            0: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                                centeredSlides: false,
                                            },
                                            568: {
                                                slidesPerView: 2,
                                                spaceBetween: 28,
                                                centeredSlides: false,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 28,
                                                centeredSlides: false,
                                            },
                                            1024: {
                                                slidesPerView: 2,
                                                spaceBetween: 32,
                                            },
                                        }
                                    }
                                    modules={[Navigation, Pagination, Autoplay]}
                                    className="w-full"
                                    direction="horizontal"
                                    slidesPerView={2}
                                    initialSlide={2}
                                    spaceBetween={28}
                                    centeredSlides={false}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: ".swiper-pagination",
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    speed={2800}
                                >
                                    {
                                        blogs.map(blog => (
                                            <SwiperSlide key={blog.id} >
                                                <div
                                                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                                                    className="swiper-slide w-full max-lg:max-w-xl  group hover:cursor-pointer">
                                                    <h3 className="text-xl line-clamp-2 text-black font-semibold leading-8 mb-2 group-hover:text-[#A38457]">{blog.title}</h3>
                                                    <p className="text-[#132023] leading-6 transition-all duration-500 mb-8 line-clamp-3 ">
                                                        {blog.shortDescription}
                                                    </p>
                                                    <Link
                                                        href={`/blogs/${blog.slug}`}
                                                        className="cursor-pointer flex items-center gap-2 text-lg text-[#A38457] font-semibold">
                                                        Read more
                                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#A38457" stroke-width="1.8" stroke-linecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Blogs