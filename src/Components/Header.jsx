// import React from "react";
// import { useTranslation } from "react-i18next";
// import LOgo from "../assets/Exclusive.png"
// import { CiHeart } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
// import { Link, NavLink } from "react-router-dom";

// import { SlBasket } from "react-icons/sl";
// const Header = () => {
//     const { t, i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//     return (
//         <div className='container'>
//             <div className='bg-black w-full py-[4px]'>

//                 <p className='text-center text-white content-center text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-semibold underline'>ShopNow</span></p>

//                 <div className="dropdown dropdown-end  ">
//                     <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-white">Click  ⬇️</div>
//                     <ul tabIndex="-1" className="bg-transparent text-white dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm">
//                         <li><a className='text-white'> english</a></li>
//                         <li><a className='text-white'> rus</a></li>
//                     </ul>
//                 </div>

//             </div>
//             <div className='flex items-center justify-between'>
//                 <img src={LOgo} alt="" />
//                 <ul className='flex gap-6'>
//                     <li className='hover:text-red-500'>Home</li>
//                     <li className='hover:text-red-500'>Contact</li>
//                     <li className='hover:text-red-500'>About</li>
//                     <li className='hover:text-red-500'>Sign up</li>
//                 </ul>
//                 <div className='flex p-10 items-center gap-10'>
//                     <div>
//                     <input type="search" placeholder='What are you looking for?' className='input bg base-200' />
//                     <CiSearch   className='flex text-2xl relative -top-8 left-38'/>
//                     </div>
//                     <CiHeart className='text-2xl' />
//                     <SlBasket className='text-2xl' />
//                 </div>
//             </div>
//         </div>

//         <ul
//           tabIndex={0}
//           className="dropdown-content menu bg-black rounded-box w-40 p-2 shadow gap-1"
//         >
//           <li>
//             <button
//               onClick={() => changeLanguage("uz")}
//               className="text-white hover:bg-gray-700 rounded-md"
//             >
//               UZ
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => changeLanguage("ru")}
//               className="text-white hover:bg-gray-700 rounded-md"
//             >
//               RU
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => changeLanguage("en")}
//               className="text-white hover:bg-gray-700 rounded-md"
//             >
//               EN
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* WISHLIST & CART ICONS */}
//       <div className="flex items-center gap-4  right-4 top-2">
//         <Link to="/wishlist" className="relative text-white text-2xl hover:text-red-500">
//           ❤️
//           {wishlistCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {wishlistCount}
//             </span>
//           )}
//         </Link>
// <Link to="/cart" className="relative text-white text-2xl hover:text-green-500">
//   🛒
//   {cartCount > 0 && (
//     <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//       {cartCount}
//     </span>
//   )}
// </Link>

//       </div>

//     </div>
//   );
// };

// export default Header;
import React from "react";
import { useTranslation } from "react-i18next";
import LOgo from "../assets/Exclusive.png";
import { CiHeart, CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom"; // 🔥 MUHIM

const Header = ({ wishlistCount = 0, cartCount = 0 }) => {
  const { t, i18n } = useTranslation();
 const user = JSON.parse(localStorage.getItem("user"));
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="">

      {/* TOP BANNER */}
      <div className="bg-black w-full py-[4px] flex justify-between px-4">
        <p className="text-center text-white text-[14px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold underline">ShopNow</span>
        </p>

        {/* LANGUAGE DROPDOWN */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-white">
            Click ⬇️
          </div>
          <ul tabIndex="-1" className="bg-black text-white dropdown-content menu rounded-box w-40 p-2 shadow gap-1">
            <li><button onClick={() => changeLanguage("uz")}>UZ</button></li>
            <li><button onClick={() => changeLanguage("ru")}>RU</button></li>
            <li><button onClick={() => changeLanguage("en")}>EN</button></li>
          </ul>
        </div>
      </div>

      {/* MAIN HEADER */}
   <div className="container">
       <div className="flex items-center justify-between mt-3">

        {/* LOGO */}
        <img src={LOgo} alt="logo" />

        {/* MENU */}
        <ul className="flex gap-6">
          <li className="hover:text-red-500"><Link to="/">Home</Link></li>
          <li className="hover:text-red-500"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-red-500"><Link to="/about">About</Link></li>
          <li className="hover:text-red-500"><Link to="/register">Sign up</Link></li>
        </ul>

        {/* SEARCH + ICONS */}
        <div className="flex items-center gap-10">

          <div className="relative">
            <input type="search" placeholder="What are you looking for?" className="input bg-base-200" />
            <CiSearch className="absolute right-3 top-3 text-xl" />
          </div>

          {/* HEART */}
          <Link to="/wishlist" className="relative text-2xl hover:text-red-500">
            ❤️
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link to="/cart" className="relative text-2xl hover:text-green-500">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
   </div>

    </div>
  );
};

export default Header;