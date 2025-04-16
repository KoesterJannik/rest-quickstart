import React, { useEffect } from 'react'
import SiteHeader from '../navigation/public/siteHeader'
import { useUser } from '@/hooks/useUser'
import { useNavigate } from 'react-router';
import { useUserStore } from '@/stores/userUserStore';

type Props = {
    children: React.ReactNode
}

function PrivateLayout({ children }: Props) {
  const query = useUser();
  const navigate = useNavigate();
  const {setUser} = useUserStore();

  useEffect(() => {
    if(query?.isSuccess  && query?.data?.data?.user) {
      setUser(query?.data?.data?.user);
      
    }else if(query?.isError) {
      navigate("/login");
      setUser(null);
      localStorage.removeItem("access_token");
    }
  }, [query.data?.data?.user]);
  return (
    <div className='container mx-auto'>
       
        {children}
    </div>
  )
}

export default PrivateLayout