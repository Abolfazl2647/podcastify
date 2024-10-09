'use client';

import ReduxProvider from '@/store/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// create client
const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            <ToastContainer
                closeOnClick
                draggable
                pauseOnFocusLoss
                pauseOnHover
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                position="bottom-right"
                rtl={false}
                theme="light"
            />
        </ReduxProvider>
    );
}
