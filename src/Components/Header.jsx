import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Header = ({ wishlistCount = 0, cartCount = 0 }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-black z-50  top-0 fixed w-full py-2 flex items-center justify-around px-4">
      
      <div className="flex justify-center items-center gap-2">
        {/* SALE INFO */}
      <p className="text-center text-white sm:flex hidden text-[14px] mx-auto">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
      </p>
        <NavLink to={"/products"} className="font-semibold underline cursor-pointer">ShopNow</NavLink>

      </div>
      {/* LANGUAGE DROPDOWN */}
      <div className="dropdown dropdown-end mr-4">
        <div tabIndex={0} role="button" className="btn btn-sm">
          {i18n.language.toUpperCase()}
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-black rounded-box w-40 p-2 shadow gap-1"
        >
          <li>
            <button
              onClick={() => changeLanguage("uz")}
              className="text-white hover:bg-gray-700 rounded-md"
            >
              UZ
            </button>
          </li>
          <li>
            <button
              onClick={() => changeLanguage("ru")}
              className="text-white hover:bg-gray-700 rounded-md"
            >
              RU
            </button>
          </li>
          <li>
            <button
              onClick={() => changeLanguage("en")}
              className="text-white hover:bg-gray-700 rounded-md"
            >
              EN
            </button>
          </li>
        </ul>
      </div>

      {/* WISHLIST & CART ICONS */}
      <div className="flex items-center gap-4  right-4 top-2">
        <Link to="/wishlist" className="relative text-white text-2xl hover:text-red-500">
          ❤️
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Link>
<Link to="/cart" className="relative text-white text-2xl hover:text-green-500">
  🛒
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  )}
</Link>

      </div>

    </div>
  );
};

export default Header;
