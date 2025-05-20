'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';
// import Fade from 'react-reveal'

const Collection = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Koleksiyonları Keşfedin</div>
                </div>
                <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className='h-full'
                    >
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('alez')}>
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/alez.jpg'}
                                        width={1000}
                                        height={600}
                                        alt='swimwear'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">ALEZ</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('havlu')}>
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/havlu.jpg'}
                                        width={1000}
                                        height={600}
                                        alt='top'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">HAVLU</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('yorgan')}>
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/quilt.jpg'}
                                        width={1000}
                                        height={600}
                                        alt='sets'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">YORGAN</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('Nevresim Takımı')}>
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/single_duvet_cover_set.jpeg'}
                                        width={1000}
                                        height={600}
                                        alt='outerwear'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[300px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">NEVRESİM TAKIMI</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('pestemal')}>
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/loincloth.jpg'}
                                        width={1000}
                                        height={600}
                                        alt='underwear'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">PEŞTEMAL</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('bornoz')}>
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/bathrobe.jpg'}
                                        width={1000}
                                        height={600}
                                        alt='t-shirt'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">BORNOZ</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Collection