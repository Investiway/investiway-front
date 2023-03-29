import React from 'react'
import { useLocation } from "react-router-dom";
import {Navigation} from "../../../utils/enums";

const Header = () => {
    const location = useLocation()
    const currentRoute = Navigation.find(item => item.path === location.pathname)

    return (
        <header className="tw-p-4 tw-border-b tw-border-gray-400">
            <div className="tw-font-bold">
                {currentRoute?.title}
            </div>
        </header>
    )
}
export default Header