import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuWatch from '@/components/Header/Menu/MenuWatch'
import SliderWatch from '@/components/Slider/SliderWatch'
import Benefit from '@/components/Home1/Benefit'
import productData from '@/data/Product.json'
import Brand from '@/components/Home6/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeWatch() {
    return (
        <>
            <div className="bg-black style-watch">
                <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
                <div id="header" className='relative w-full'>
                    <MenuWatch props="bg-green" />
                    <SliderWatch />
                </div>
                <Brand />
                <div className="style-watch">
                    <Footer />
                </div>
            </div>
           {/* <ModalNewsletter />*/}
        </>
    )
}
