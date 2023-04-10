import React from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {Navigation} from "../../../utils/enums";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser} from "../../../stores/user";
import {AppState} from "../../../stores/store";

const Header = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const currentRoute = Navigation.find(item => item.path === location.pathname)
    const navigate = useNavigate()
    const userStore = useSelector((state: AppState) => state.user)
    const title = ():string => {
        if (location.pathname === '/') {
            if (userStore.currentUser?.firstName) {
                return 'Hi, ' +  userStore.currentUser?.firstName + ' ' + userStore.currentUser?.lastName || ''
            }
        }
        return currentRoute?.title || ''
    }
    const logout = () => {
        dispatch(setToken(''))
        dispatch(setUser(''))
        navigate('/auth')
    }

    return (
        <header className="tw-flex tw-p-4 tw-border-b tw-border-gray-400 tw-items-center">
            <div className="tw-font-bold tw-text-2xl tw-flex-1">
                {title()}
            </div>
            <div>
                <Button size="small" variant="outlined" color="secondary" onClick={logout}>Logout</Button>
            </div>
        </header>
    )
}
export default Header