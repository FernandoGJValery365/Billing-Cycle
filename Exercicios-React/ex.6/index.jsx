import React from 'react';
import ReactDom from 'react-dom';
import Family from './family';
import Member from './member';


ReactDom.render(
    <Family lastName='Valery'>
        <Member name='Fernando'/>
        <Member name='Rafael'/>
        <Member name='Vitória'/>
    </Family>, 
    document.getElementById('app')
);