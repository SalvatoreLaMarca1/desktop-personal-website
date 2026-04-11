
import './App.css'
import './Taskbar.tsx'
import Taskbar from './Taskbar.tsx'
import Desktop from './Desktop.tsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Login from './Login.tsx';

export type WindowType = {
  id: string;
  zIndex: number;
}

function App() {
  const [windows, setWindows] = useState<WindowType[]>([])
  const [topZ, setTopZ] = useState(0)

  const [showLoginPage, setShowLoginPage] = useState(true)

  return (
    <div className='main-container'>



      <Login show={showLoginPage} setShowLoginPage={setShowLoginPage}/> 

      <Desktop
        windows={windows}
        setWindows={setWindows}
        topZ={topZ}
        setTopZ={setTopZ}
      />
      <Taskbar setShowLoginPage={setShowLoginPage} windows={windows}/>
      
    </div>
  )
}

export default App
