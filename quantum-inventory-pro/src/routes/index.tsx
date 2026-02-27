import {createBrowserRouter, Navigate} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import InventoryPage from '../features/inventory/pages/InventoryPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <div> Welcome! this is Dashboard.</div>
            },
            {
                path: 'inventory',
                element: <InventoryPage/>
            },
            {
                path: 'profile',
                element: <div>User's Profile Setting!</div>,
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    }
])