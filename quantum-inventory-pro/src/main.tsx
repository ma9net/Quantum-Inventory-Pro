import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes';
import './index.css';
import {ConfigProvider} from 'antd';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {

            retry: false,

            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1677ff', // رنگ اصلی برند
                    borderRadius: 8, // گردی لبه‌های دکمه‌ها و کارت‌ها
                    fontFamily: 'Tahoma, Segoe UI, sans-serif', // فونت مناسب
                },
                components: {
                    Layout: {
                        headerBg: '#ffffff',
                    },
                },
            }}
        >
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </ConfigProvider>
    </React.StrictMode>
);