
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

  return (
    <div className='main-container'>
      <Login/>
      <Desktop
        windows={windows}
        setWindows={setWindows}
        topZ={topZ}
        setTopZ={setTopZ}
      />
      <Taskbar windows={windows}/>
    </div>
  )
}

export default App
