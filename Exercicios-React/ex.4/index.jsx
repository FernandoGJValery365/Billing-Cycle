import React from 'react';
import ReactDom from 'react-dom';
import {First, Second} from './component';

ReactDom.render(
    <div>
        <First/>
        <Second/>
    </div>, 
    document.getElementById('app')
);