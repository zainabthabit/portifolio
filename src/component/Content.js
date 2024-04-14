import HeroSection from './HeroSection'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Work from './Experence'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { BrowserRouter } from 'react-router-dom'
import Project from './Projects';
function Content() {
    return (
        <BrowserRouter>
            <div className="relative   " >


                <NavBar  >
                </NavBar>
                <div className="flex relative  " >
                    <div className=' fixed top-1/2 flex flex-col items-center gap-[15px] justify-end w-[150px]'>
                        <GithubIcon color="blue" size={ 25 } />
                        <LinkedinIcon color="blue" size={ 25 } />
                        <InstagramIcon color="blue " size={ 25 } />
                        <TwitterIcon color="blue" size={ 25 } />
                        <FacebookIcon color="blue" size={ 25 } />
                        <hr className='h-[250px] my-8 w-[2px] bg-blue-800'></hr>
                    </div>
                    <div>
                        <HeroSection></HeroSection>
                        <AboutMe></AboutMe>
                        <Work></Work>
                        <Project></Project>
                    </div>
                    <div className=' fixed  left-[90%] top-[190px] flex flex-col items-center gap-[15px] justify-center h-[100%] w-[150px]'>
                        <h1 className='font-serif text-sm text-white  w-[300px] rotate-90'>zainabthabit886@gmail.com</h1>
                        {/* <hr className='h-[200px] my-8 border-[0.2px] bg-white'></hr> */ }

                    </div>


                </div>
            </div>
        </BrowserRouter>
    );
}
export default Content