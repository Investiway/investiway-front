import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../../logo.svg'
import { Navigation } from "../../../utils/enums";
import type { Navigate } from "../../../utils/types";
import { setCurrentRoute } from "../../../stores/common";
import { useDispatch } from "react-redux";


const AsideMenu = () => {

    const dispatch = useDispatch()
    const [currentNav, setCurrentNav] = useState(0);
    const onNavigating = (navigate: Navigate) => {
        dispatch(setCurrentRoute(navigate.id))
        setCurrentNav(navigate.id)
    }
    const getClassBorderBottom = (id: number) => {
        if (currentNav === id)
            return 'tw-mt-auto tw-w-full tw-h-[1px] tw-bg-secondary'
        return 'tw-mt-auto tw-w-0 tw-h-[1px] tw-bg-secondary tw-duration-300 group-hover:tw-w-full group-hover:tw-bg-secondary'
    }
    const getClassTitle = (id: number) => {
        if (currentNav === id)
            return 'tw-pb-2 tw-text-white'
        return 'tw-pb-2 tw-text-white'
    }
    const navigateItems = Navigation.map(navigate => (
            <div
                className="tw-font-sans tw-group tw-cursor-pointer tw-p-2"
                onClick={() => onNavigating(navigate)}
            >
                <div
                    className={getClassTitle(navigate.id)}
                >
                    {navigate.title}
                </div>
                <div
                    className={getClassBorderBottom(navigate.id)}
                />
            </div>
        )
    )
    return (
        <div className="tw-h-[100vh] tw-p-4 tw-space-y-4 tw-bg-primary tw-font-mono">
            <div className="tw-flex tw-flex-1 tw-items-center tw-space-x-2">
                <Logo className="tw-w-14 tw-h-auto"/>
                <h1 className="tw-font-sans tw-text-2xl tw-text-secondary">Investiway</h1>
            </div>
            <div className="">
                {navigateItems}
            </div>
        </div>
    )
}
export default AsideMenu