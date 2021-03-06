
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import '../common/template/dependencies'
import Routes from './routes'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'


export default props => (
    <BrowserRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
                <div className="content-wrapper">
                    <Routes />
                </div>
            <Footer />
            <Messages />
        </div>
    </BrowserRouter>
)

