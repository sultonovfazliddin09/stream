import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChildrenProps } from "@/types";
import React from "react";
import { AppSidebar } from "./_components/app-sidebar";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
