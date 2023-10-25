import React, { useContext, useState } from 'react'
import { Context } from '../context/contextApi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../shared/Loader';
import { CgClose } from "react-icons/cg";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { IoIosSearch } from "react-icons/io";
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  const mobMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0]
  return (
    <div className='bg-black md:bg-black flex pt-3 px-3 h-12 md:h-12 items-center text-center rounded-2xl'>
      {/* {loading && <Loader className='h-14' />} */}
      {pageName !=='video' &&(
      <div className=' text-white md:hidden  ' onClick={mobMenuToggle}>
        {mobileMenu?
        < CgClose />:
        <MenuIcon />
        }
      </div>
      )}
      <Link to={"/"}>
        <div className=' hidden md:block '>
          <img className='w-28' src={ytLogo} alt='youtube'></img>
        </div>
        <div className=' w-10 md:hidden'>
          <img className=' ' src={ytLogoMobile} alt='youtube'></img>
        </div>
      </Link>
      <div className=' '>
        <input className=' ml-10 md:ml-96 w-60 md:w-96 h-8 rounded-lg mb-2'
          type='text'
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
        >

        </input>

      </div>
      <div className='hidden md:block '>
        <IoIosSearch className='text-white text-lg' />
      </div>








    </div>
  );
};

export default Header;