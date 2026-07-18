import { Outlet } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <>
      <DashboardLayout />
      <Toaster />
    </>
  )
}

export default App
