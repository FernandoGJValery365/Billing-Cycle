import React from 'react';
import '../common/template/dependencies';
import SideBar from '../common/template/sideBar';
import Header from '../common/template/header';
import Footer from '../common/template/footer';
import Routes from './routes';

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer/>
    </div>
);