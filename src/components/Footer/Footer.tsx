import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
    return (
        <>
            <div id="footer" className='footer'>
                <div className="footer-main bg-surface">
                    <div className="container">
                        <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
                            <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                                <Link href={'/'} className="logo">
                                    <div className="heading4">PAMUKİZİ</div>
                                </Link>
                                <div className='flex gap-3 mt-3'>
                                    <div className="flex flex-col ">
                                        <span className="text-button">Mail:</span>
                                        <span className="text-button mt-3">İletişim:</span>
                                        <span className="text-button mt-3">Adres:</span>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className=''>piarts@gmail.com</span>
                                        <span className='mt-3'>+901234567890</span>
                                        <span className='mt-3 pt-px'>İstiklal, 1173. Sk. No:14/C, 20150 Pamukkale/Denizli</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                                <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">Kurumsal</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/about'}>Hakkımızda</Link>
                                    </div>
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">BLOG</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/'}>Blog</Link>
                                    </div>
                                    <div className="item flex flex-col basis-1/3 sm:flex-row gap5">
                                        {/* Sol sütun */}
                                        <div className="flex flex-col basis-1/2">
                                            <div className="text-button-uppercase pb-3">ÜRÜNLERİMİZ</div>
                                            <Link className='caption1 has-line-before duration-300 w-fit' href={'/shop/breadcrumb1?type=havlu'}>Havlu</Link>
                                            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1?type=bornoz'}>Bornoz</Link>
                                            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1?type=nevresim_takimi'}>Nevresim Takımı</Link>
                                        </div>

                                        {/* Sağ sütun */}
                                        <div className="flex flex-col basis-1/2  sm:pt-[30px]">
                                            <Link className='caption1 has-line-before duration-300 w-fit' href={'/shop/breadcrumb1?type=yorgan'}>Yorgan</Link>
                                            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1?type=pestemal'}>Peştemal</Link>
                                            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1?type=paspas'}>Paspas</Link>
                                            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1?type=alez'}>Alez</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                   {/* <div className="text-button-uppercase">Newletter</div>
                                    <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first purchase</div>*/}
                                    <div className="input-block w-full h-[52px] mt-4">
                                        <form className='w-full h-full relative' action="post">
                                            <input type="email" placeholder='E-postanızı Girin' className='caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line' required />
                                            <button className='w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1'>
                                                <Icon.ArrowRight size={24} color='#fff' />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="list-social flex items-center gap-6 mt-4">
                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                            <div className="icon-facebook text-2xl text-black"></div>
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <div className="icon-instagram text-2xl text-black"></div>
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <div className="icon-twitter text-2xl text-black"></div>
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                            <div className="icon-youtube text-2xl text-black"></div>
                                        </Link>
                                        <Link href={'https://www.pinterest.com/'} target='_blank'>
                                            <div className="icon-pinterest text-2xl text-black"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
                            <div className="left flex items-center gap-8">
                                <div className="copyright caption1 text-secondary">©2025 PiArts. Tüm hakları saklıdır.</div>
                                {/*<div className="select-block flex items-center gap-5 max-md:hidden">
                                    <div className="choose-language flex items-center gap-1.5">
                                        <select name="language" id="chooseLanguageFooter" className='caption2 bg-transparent'>
                                            <option value="English">English</option>
                                            <option value="Espana">Espana</option>
                                            <option value="France">France</option>
                                        </select>
                                        <Icon.CaretDown size={12} color='#1F1F1F' />
                                    </div>
                                    <div className="choose-currency flex items-center gap-1.5">
                                        <select name="currency" id="chooseCurrencyFooter" className='caption2 bg-transparent'>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                        </select>
                                        <Icon.CaretDown size={12} color='#1F1F1F' />
                                    </div>
                                </div>
                            </div>
                            <div className="right flex items-center gap-2">
                                <div className="caption1 text-secondary">Payment:</div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-0.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-1.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-2.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-3.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-4.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-5.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer