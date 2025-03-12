import React, { useCallback } from "react";
import logo from '../../assets//logoDACSrm.png'
import { Button }  from '../../components'
import icons from "../../ultils/icons";
import {useNavigate} from 'react-router-dom'
import {path} from '../../ultils/constant'

const { AiFillPlusCircle} = icons;

const Header = () => {
   const navigate = useNavigate()
   const goLogin = useCallback(() => {
      navigate(path.LOGIN)
   }, [])

   return (
      <div className='w-1100 flex items-center justify-between bg-red-500'>
         <img
         src={logo}
         alt='logo'
         className='w-[240px] h-[120px] object-contain '
         />
         <div className="flex items-center space-x-2">
            <span>Online Hotel Booking xin chào !</span>
            <Button 
               text={'Đăng ký'} 
               textColor='text-white' 
               bgColor='bg-[#3961fb]' 
               />
            <Button 
               text={'Đăng nhập'} 
               textColor='text-white' 
               bgColor='bg-[#3961fb]' 
               onClick={goLogin}/>
            <Button 
               text={'Đăng tin'} 
               textColor='text-white' 
               bgColor='bg-[#f0ff]' 
               IcAfter={AiFillPlusCircle} />
   
          
         </div>

      </div>
   )
}
export default Header;