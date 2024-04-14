import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../redux/appState'

function NavBar() {
    const dispatch = useDispatch()

    const toggleDisplayMode = () => {
        dispatch(toggleDarkMode())
    }
    return <div>
        <nav className='flex justify-between'>
            <button onClick={ toggleDisplayMode } className="bg-hero bg-center bg-no-repeat bg-contain w-[50px] h-[50px] dark:bg-light" ></button>
            <ul className="  flex justify-end gap-[100px] pt-[20px] pr-[20px] text-blue-800">
                <li >
                    <a href='#about' >
                        About</a>

                </li>
                <li>
                    <a href="#work" >
                        Experience
                    </a>

                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    </div>
}
export default NavBar