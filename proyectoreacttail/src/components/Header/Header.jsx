import React, {useState} from 'react';
import Button from  "../Button/Button.jsx"

const Nav = () => {
    let Links =[
        {name: "HOME", link: "/home"},
        {name: "SERVICE", link: "/service"},
        {name: "ABOUT", link: "/about"},
        {name: "CONTACT", link: "/contact"},
    ]
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                <span className="text-3xl text-black-600 mr-1 pt-2">
                        <ion-icon name="logo-ionitron"></ion-icon>
                </span>
            </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? "close-outline":"menu-outline"}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link}
                                   className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                    <input type="text" placeholder="Buscar Producto" className="bg-gray-100 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
                    <Button>
                        SIGN IN
                    </Button>
                    <Button>
                        SIGN UP
                    </Button>
                </ul>
            </div>

        </div>
    )
}
export default Nav;