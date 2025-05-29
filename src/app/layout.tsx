
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'  // Inter fontu ile değiştirildi
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalCart from '@/components/Modal/ModalCart'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import ModalCompare from '@/components/Modal/ModalCompare'
import CountdownTimeType from '@/type/CountdownType'
import { countdownTime } from '@/store/countdownTime'

const serverTimeLeft: CountdownTimeType = countdownTime();

const inter = Inter({ subsets: ['latin'] })  // Inter fontu burada

export const metadata: Metadata = {
  title: 'pamukizi',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <GlobalProvider>
        <html lang="en">
        <body className={inter.className}> {/* inter kullanılıyor */}
        {children}
        <ModalCart serverTimeLeft={serverTimeLeft} />
        <ModalWishlist />
        <ModalSearch />
        <ModalQuickview />
        <ModalCompare />
        </body>
        </html>
      </GlobalProvider>
  )
}
