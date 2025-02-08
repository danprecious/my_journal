import React from "react";
import {cookies} from 'next/headers';

const AuthLayout = async  ({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>)=> {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  console.log(token);



    
  return <div>{children}</div>;
};

export default AuthLayout;
