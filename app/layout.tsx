import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/SearchModal';
import Footer from './components/footer/Footer';



export const metadata = {
  metadataBase: new URL('https://hire-esom-talent.vercel.app'),
  title: {
    default: 'Esom Talent Center',
    template: `%s | Esom Talent Center`,
  },
  description: 'Get the best music talents in Uganda',
  verification: {
    google: 'Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1',
  },
  category: 'Music Education',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal/>
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser = {currentUser} />
         
        </ClientOnly>
        <div className='pb-20 pt-28'>
        {children}
        </div>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  )
}
