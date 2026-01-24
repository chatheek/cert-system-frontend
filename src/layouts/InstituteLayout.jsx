import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function InstituteLayout() {
 return (
 <div className="">
 <Sidebar items={[]} title="Institute" />
 <main className="">
 {/* Header */}
 <Outlet />
 </main>
 </div>
 )
}
