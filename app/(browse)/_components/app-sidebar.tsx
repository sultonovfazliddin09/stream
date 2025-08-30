import {
  Sidebar,
  SidebarContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Navigation from "./navigation";
import Following from "./following";
import Recommended from "./recommended";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <Navigation />
        <SidebarSeparator />
        <Following />
        <SidebarSeparator />
        <Recommended />
      </SidebarContent>
    </Sidebar>
  );
}
