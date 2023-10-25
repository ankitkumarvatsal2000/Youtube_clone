import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { categories } from '../utils/Constants';
import { Context } from '../context/contextApi';
import LeftNavMenuItem from './LeftNavMenuItem';


const Left_nav = () => {
    const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);
    const navigate = useNavigate();

    const clickHanderler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectCategories(name)
            case "home":
                return setSelectCategories(name)
            case "menu":
                return false;
            default:
                break;
        }
    }
    return (
        <div className={`  md:block w-[240px] md:w-[600px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-400px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-1" : ""}`}>
            <div className='flex flex-col px-5'>
                {categories.map((item) => {
                    return (
                        <>
                            <LeftNavMenuItem
                                key={item.name}
                                text={item.type == "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHanderler(item.name, item.type)
                                    navigate("/")
                                }}
                                className={`${selectCategories === item.name ? "bg-white/[0.15]" : ""}`}
                            />
                            {item.divider && (
                                <hr className='my-5 border-white/[0.2]' />
                            )}
                        </>

                    );
                })}
                <hr className='my-5 border-white/[0.2]' />
                <div className='text-white/[0.5] text-[12px]'>
                    Clone by: Ankit Rajput
                </div>
            </div>
        </div>
    )
}

export default Left_nav;