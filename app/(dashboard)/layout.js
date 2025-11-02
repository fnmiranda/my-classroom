
import Input from '../../components/Input/input';
import Sidebar from '../../components/Sidebar/Sidebar';
import { SidebarProvider } from "../../components/Sidebar/SidebarContext";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />

        <div className='flex flex-1 flex-row'>
          <div>
            Search
            <Input />
          </div>
          <main className="flex flex-1 justify-center items-center">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
