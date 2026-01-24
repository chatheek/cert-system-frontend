import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function StudentLayout() {
 return (
 <div className="">
 <Sidebar items={[]} title="Student" />
 <main className="">
 {/* Header */}
 <Outlet />
 </main>
 </div>
 )
}
