import { useState } from 'react/cjs/react.production.min'
import { headerMenu } from './menu.module.css'
import { Search, Heart, ShoppingCart, UserRound } from 'lucide-react'

function Menu() {
    const [language, setLanguage] = useState('English')

    return (
        <div className={headerMenu}>
            <button><Search /></button>
            <button><Heart /></button>
            <button><ShoppingCart /></button>
            <button><UserRound /></button>
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value='English'>Eng</option>
                <option value='Telugu'>Tel</option>
                <option value='Hindi'>Hnd</option>
            </select>
        </div>
    )
}

export default Menu
