import React, { useState } from "react";
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = () => {
    console.log("Đăng nhập với", username, password);
    navigate('/home'); 
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[600px] flex flex-col items-center justify-centerp-[30px] pb-[100px] rounded-md shadow-lg'>
        <h2 className='text-black text-2xl mb-4'>Đăng nhập</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='mb-2 p-2 w-[500px] border border-gray-300 rounded'
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-4 p-2 w-[500px] border border-gray-300 rounded'
        />
         
        <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={handleLogin} />
        
        <div className="flex items-center space-x-5 w-[500px] mt-4">
         <small className='text-[blue] hover:text-[red] cursor.pointer' > Bạn quên mật khẩu </small>
         <small className='text-[blue] hover:text-[orange] cursor.pointer' > Tạo tài khoản </small>
        </div>

      </div>
    </div>
  );
};

export default Login;