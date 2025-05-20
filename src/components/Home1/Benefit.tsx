import React from 'react'

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-phone-call lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">7/24 Müşteri Hizmetleri</div>
                            <div className="caption1 text-secondary text-center mt-3">Sorularınız veya endişeleriniz için 7/24 size yardımcı olmak için buradayız.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-return lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">14 Gün İçinde İade</div>
                            <div className="caption1 text-secondary text-center mt-3">Satın aldığınız üründen memnun kalmazsanız, para iadesi için 14 gün içinde iade etmeniz yeterlidir.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-guarantee lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Garanti Belgesi</div>
                            <div className="caption1 text-secondary text-center mt-3"> Ürün ve hizmetlerimizin arkasındayız ve memnuniyetinizi garanti ediyoruz.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-delivery-truck lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Ülke Çapında Nakliye</div>
                            <div className="caption1 text-secondary text-center mt-3">Ürünlerimizi ülke çapında göndererek her yerdeki müşterilerimiz için erişilebilir hale getiriyoruz.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit