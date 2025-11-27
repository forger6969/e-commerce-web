import React from 'react'
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div>
            <div className='bg-black w-full py-[4px]'>

                <p className='text-center text-white text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-semibold underline'>ShopNow</span></p>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a className='text-white'>Item 1</a></li>
                        <li><a className='text-white'>Item 2</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header