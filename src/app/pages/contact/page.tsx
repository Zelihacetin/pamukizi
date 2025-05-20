'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

const ContactUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='İletişim' subHeading='İletişim' />
            </div>
            <div className='contact-us md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between max-lg:flex-col gap-y-10">
                        <div className="left lg:w-2/3 lg:pr-4">
                            <div className="heading3">Bize Mesaj Atın</div>
                            <div className="body1 text-secondary2 mt-3">Satış ekibimizle iletişime geçmek için bu formu doldurun</div>
                            <form className="md:mt-6 mt-4">
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5'>
                                    <div className="name ">
                                        <input className="border-line px-4 py-3 w-full rounded-lg" id="username" type="text" placeholder="Adınız *" required />
                                    </div>
                                    <div className="email">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Mail Adresiniz *" required />
                                    </div>
                                    <div className="message sm:col-span-2">
                                        <textarea className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="message" rows={3} placeholder="Mesajınız *" required />
                                    </div>
                                </div>
                                <div className="block-button md:mt-6 mt-4">
                                    <button className="button-main">Gönder</button>
                                </div>
                            </form>
                        </div>
                        <div className="right lg:w-1/4 lg:pl-4">
                            <div className="item">
                                <div className="heading4">Mağazamız</div>
                                <p className="mt-3">İstiklal, 1173. Sk. No:14/C, 20150 Pamukkale/Denizli</p>
                                <p className="mt-3">İletişim: <span className='whitespace-nowrap'>+901234567890</span></p>
                                <p className="mt-1">Email: <span className='whitespace-nowrap'>piarts@gmail.com</span></p>
                            </div>
                            <div className="item mt-10">
                                <div className="heading4">Açılış Saatleri</div>
                                <p className="mt-3">PAZARTESİ - CUMA: <span className='whitespace-nowrap'>7:30 - 8:00 Arası</span></p>
                                <p className="mt-3">CUMARTESİ: <span className='whitespace-nowrap'>8:00 - 6:00 Arası</span></p>
                                <p className="mt-3">PAZAR: <span className='whitespace-nowrap'>9:00 - 5:00 Arası</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs