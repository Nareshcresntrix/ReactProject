import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
export default function BreadCrumbs() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" separator="›" >
                <Link underline="hover" color="inherit"  href="/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                  DashBoard
                </Link>
            </Breadcrumbs>
        </div>
    )
}
