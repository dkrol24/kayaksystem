"use client";

import { usePathname,useRouter } from "next/navigation";

interface SidebarItemProps{
    label: string;
    href: string;
}
export const SidebarItem=({label,href}:SidebarItemProps)=>{
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname==="/"&& href === "/") || pathname === href || pathname?.startsWith(`${href}/`);
    const onClick = () =>{
        router.push(href)
    }
    return(
       <button onClick={onClick}
       type="button"
       className='flex items-center gap-x-3 text-slate-500 text-sm font-[500] pl-3 transition-all hover:text-slate-600 hover:bg-slate-300/20'>
       <div className="flex items-center gap-x-2 py-4">

        {label}
        </div>
        <div className="ml-auto opacity-0 border-2 border-sky-700 h-full transition-all">
        </div>
       </button>
    )
}