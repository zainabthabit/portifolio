import './App.css';
import { useState, useEffect } from 'react';
import Content from './component/Content';
import { useSelector, useDispatch } from 'react-redux'
function App() {
    const { darkMode } = useSelector((state) => state.appState)
    // const [darkMode, setDarkMode] = useState(false)
    // useEffect(() => {
    //     let savedMode = localStorage.getItem("displayMode")
    //     if (!savedMode) {
    //         const newMode = 'light'
    //         setDarkMode(false)
    //         localStorage.getItem("displayMode", newMode)
    //     }
    //     setDarkMode(savedMode === 'dark' ? true : false)
    // }, [])


    return (
        <div className={ `${darkMode ? 'dark' : ""}` }>
            <div className='bg-slate-300 dark:bg-slate-800'>

                <Content></Content>
            </div>
        </div>
    );

}

export default App;
