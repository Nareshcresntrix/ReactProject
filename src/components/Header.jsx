import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import CustomDatePicker from './DatePicker'
export default function Header() {
    return (
        <div className='flex justify-between '>
            <div>
                <BreadCrumbs />
            </div>
            <div className='flex'>
                <CustomDatePicker />
                <h1>Header</h1>
            </div>
        </div>
    )
}
