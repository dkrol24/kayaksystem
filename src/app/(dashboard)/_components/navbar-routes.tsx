"use client";
import { usePathname } from "next/navigation";
import Link from "next/link"
export const NavbarRoutes = () => {
    const pathName = usePathname();
 

    const isTeacherPage = pathName?.startsWith("/test");
    const isPlayerPage = pathName?.includes("/chapter")

    return (
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
               EXIT</Link>
            ):(
                <Link href="/teacher/courses">
                TEACHER
                </Link>
            )}
            COSTAM
        </div>
    )
}