
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { countdownTime } from '@/store/countdownTime'

const Cart = () => {
    const [timeLeft, setTimeLeft] = useState(countdownTime());
    const router = useRouter()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { cartState, updateCart, removeFromCart } = useCart();

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        // Tìm sản phẩm trong giỏ hàng
        const itemToUpdate = cartState.cartArray.find((item) => item.id === productId);

        // Kiểm tra xem sản phẩm có tồn tại không
        if (itemToUpdate) {
            // Truyền giá trị hiện tại của selectedSize và selectedColor
            updateCart(productId, newQuantity, itemToUpdate.selectedSize, itemToUpdate.selectedColor);
        }
    };

    let moneyForFreeship = 150;
    let [totalCart, setTotalCart] = useState<number>(0)
    let [discountCart, setDiscountCart] = useState<number>(0)
    let [shipCart, setShipCart] = useState<number>(30)
    let [applyCode, setApplyCode] = useState<number>(0)

    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    const handleApplyCode = (minValue: number, discount: number) => {
        if (totalCart > minValue) {
            setApplyCode(minValue)
            setDiscountCart(discount)
        } else {
            alert(`Minimum order must be ${minValue}$`)
        }
    }

    if (totalCart < applyCode) {
        applyCode = 0
        discountCart = 0
    }

    if (totalCart < moneyForFreeship) {
        shipCart = 30
    }

    if (cartState.cartArray.length === 0) {
        shipCart = 0
    }

    const redirectToCheckout = () => {
        router.push(`/checkout?discount=${discountCart}&ship=${shipCart}`)
    }

    return <div>Sepet sayfası geçici olarak devre dışı</div>;
}

export default Cart