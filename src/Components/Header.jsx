import React from 'react'
import { useTranslation } from "react-i18next";
import LOgo from "../assets/Exclusive.png"
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div className='container'>
            <div className='bg-black w-full py-[4px]'>

                <p className='text-center text-white content-center text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-semibold underline'>ShopNow</span></p>

                <div className="dropdown dropdown-end  ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-white">Click  ⬇️</div>
                    <ul tabIndex="-1" className="bg-transparent text-white dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a className='text-white'> english</a></li>
                        <li><a className='text-white'> rus</a></li>
                    </ul>
                </div>

            </div>
            <div className='flex items-center justify-between'>
                <img src={LOgo} alt="" />
                <ul className='flex gap-6'>
                    <li className='hover:text-red-500'>Home</li>
                    <li className='hover:text-red-500'>Contact</li>
                    <li className='hover:text-red-500'>About</li>
                    <li className='hover:text-red-500'>Sign up</li>
                </ul>
                <div className='flex p-10 items-center gap-10'>
                    <div>
                    <input type="search" placeholder='What are you looking for?' className='input bg base-200' />
                    <CiSearch   className='flex text-2xl relative -top-8 left-38'/>
                    </div>
                    <CiHeart className='text-2xl' />
                    <SlBasket className='text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Header