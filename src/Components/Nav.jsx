import hamBurger from '../../assets/icons/hamburger.svg';
import headerLogo from '../../assets/images/header-logo.svg';
import { navLinks } from '../constants';
function Nav(props) {

    console.log(navLinks);
    
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={28}
                    />
                </a>
                <ul className='flex-1 flex justify-center
                items-center gap-16 max-lg:hidden
                '>
                    {
                        navLinks.map((item)=>(
                            <li key={item.label}>
                                <a 
                                    href={item.href} 
                                    className='font-montserrat leading-normal text-lg text-slate-gray'
                                >{item.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden max-lg:block cursor-pointer'>
                    <img src={hamBurger} 
                    width={25}
                    height={25}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Nav;