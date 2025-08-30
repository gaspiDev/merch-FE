import { NavLink } from "react-router"

const NavItem = ({ path, label }) => {
    return (
        <li>
            <NavLink to={path} className={({ isActive }) =>
                [
                    "font-inter text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#ff5a5f] font-semibold lg:hover:bg-[#f7f9ea] tracking-tight cursor-pointer py-2 px-3 transition-all duration-150",
                    isActive
                        ? "underline underline-offset-5"
                        : ""
                ].join(' ')
            }>{label}</NavLink>
        </li>
    )
}

export default NavItem
