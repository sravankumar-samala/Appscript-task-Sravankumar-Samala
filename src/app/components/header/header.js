import React from 'react'
import Image from 'next/image'
import Menu from './headerMenu/menu'
import { headerWrapper, headerLogoTitle, logoImageContainer, headerMainContainer } from './header.module.css'

function Header() {
    return (
        <header className={headerMainContainer}>
            <h1 className={headerLogoTitle}>LOGO</h1>
            <div className={headerWrapper}>
                <div className={logoImageContainer}>
                    <Image src='/Logo.png' width={60} height={60} alt='site logo' layout='responsive' />
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header