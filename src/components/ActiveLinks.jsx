import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLinks = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive
                        ? "active mr-5 font-medium text-lg"
                        : "mr-5 font-medium text-lg"
                }
            >
                {children}
            </NavLink>
        </div>
    )
}

export default ActiveLinks