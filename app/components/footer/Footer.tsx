import React from 'react'
import Container from '../Container'
import Logo from '../navbar/Logo'

const Footer = () => {
  return (
    <Container>
            <footer>
            <div className="w-full mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <Logo />
                
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Our Team</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} <a href="https://esom-music.com" className="hover:underline">Esom™</a>. All Rights Reserved.</span>
        </div>
    </footer>

    </Container>


  )
}

export default Footer