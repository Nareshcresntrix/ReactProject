import React from 'react'
import Header from './Header'
import Silder from './silder'
import Box from '@mui/material/Box';
export default function Dashboard() {
    return (
        <>
            <div class="flex h-screen">
                <div class="w-1/6 p-4">
                    <Silder />
                </div>
                <div class="w-full p-4">
                    <Header />
                </div>
            </div>


        </>

    )
}
