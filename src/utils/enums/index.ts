import type { Navigate } from "../types";

export const Navigation: Navigate[] = [
    {
        id: 0,
        title: 'Dashboard',
        path: '/',
        isAuth: true
    },
    {
        id: 1,
        title: 'Statistics',
        path: '/statistics',
        isAuth: true
    },
    {
        id: 2,
        title: 'Goal',
        path: '/goal',
        isAuth: true
    },
    {
        id: 3,
        title: 'Plans',
        path: '/plans',
        isAuth: true
    },
    {
        id: 4,
        title: 'Note',
        path: '/note',
        isAuth: true
    },
    {
        id: 5,
        title: 'Login',
        path: '/auth',
        isAuth: false
    },
]