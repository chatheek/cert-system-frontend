import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function AdminLayout() {
 return (
 <div className="">
 <Sidebar items={[]} title="Admin" />
 <main className="">
 {/* Header */}
 <Outlet />
 </main>
 </div>
 )
}
