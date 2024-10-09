import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
        <div className="h-full flex">
        {/* Sidebar */}
        <div className="hidden h-full md:flex w-56 flex-col z-50">
          <Sidebar />
        </div>
      
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <div className="h-[80px] w-full z-60">
            <Navbar />
          </div>
      
          {/* Main content */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </div>
      
    );
}
 
export default DashboardLayout;