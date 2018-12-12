import React from 'react';
import '../common/template/dependencies';
import SideBar from '../common/template/sideBar';
import Header from '../common/template/header';
import Footer from '../common/template/footer';

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <h1>O conteúdo vai aqui </h1>
        </div>
        <Footer/>
    </div>
);