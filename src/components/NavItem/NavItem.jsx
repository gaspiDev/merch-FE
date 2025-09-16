import { NavLink } from "react-router"

const NavItem = ({ path, label, onClick }) => {
    return (
        <li className="text-center">
            <NavLink onClick={onClick} to={path} className={({ isActive }) =>
                [
                    "block py-2 px-3 text-airbnb font-inter font-medium hover:bg-airbnb hover:text-beige rounded-md transition-colors duration-200 text-sm sm:text-base",
                    isActive
                        ? "underline underline-offset-5"
                        : ""
                ].join(' ')
            }>{label}</NavLink>
        </li>
    )
}

export default NavItem
