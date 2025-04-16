import React, { useEffect } from 'react'
import SiteHeader from '../navigation/public/siteHeader'
import { useUser } from '@/hooks/useUser'
import { useNavigate } from 'react-router';
import { useUserStore } from '@/stores/userUserStore';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from '../app-sidebar';
import { Separator } from '../ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';

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
  }, [query.data?.data?.user, query.isError, query.isSuccess]);
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {children}
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SidebarInset>
  </SidebarProvider>
  )
}

export default PrivateLayout