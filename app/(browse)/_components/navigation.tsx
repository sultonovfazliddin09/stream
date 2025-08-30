import { navigation_links } from "@/app/constants";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <SidebarGroup />
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {navigation_links.map((item) => (
            <SidebarMenuItem key={item.route}>
              <SidebarMenuButton asChild>
                <Link href={item.route}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
};

export default Navigation;
