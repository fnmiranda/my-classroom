
import Input from '../../components/Input/input';
import Sidebar from '../../components/Sidebar/Sidebar';
import { SidebarProvider } from "../../components/Sidebar/SidebarContext";
import styles from './styles.css'

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'gray' }}>
        <Sidebar />

        <div className='flex flex-1 flex-row'>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: 10 }}>
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
