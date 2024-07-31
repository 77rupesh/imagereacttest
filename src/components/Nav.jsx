import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
<nav className="flex gap-4 p-4 bg-white"> 
            <NavLink to="/" className={(n) => (
                
n.isActive?"underline text-blue-500":""

            )}>
                Home
            </NavLink>
            <NavLink to="/About" className={(n) => (
                
                n.isActive?"underline text-blue-500":""
                
                            )}>
                                About
                            </NavLink>
            <NavLink to="/Gallery" className={((n) => 
                
               ( n.isActive ? "underline text-blue-500" : "") 
                
    )}>
                                Gallery
                            </NavLink>
                </nav>

)}

export default Nav