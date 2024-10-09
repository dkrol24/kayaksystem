'use client';



import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

const guestRoutes=[
    {
 
        label:"Dashboard",
        href:"/",
    },{
 
        label:"Browse",
        href:"/search"
    },
]
const teacherRoutes=[
    {
    
        label:"Courses",
        href:"/teacher/courses",
    },{
     
        label:"Analytics",
        href:"/teacher/analytics"
    },
]
export const SidebarRoutes=()=>{
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher")
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route)=>(
                <SidebarItem 
                key={route.href}
        
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}