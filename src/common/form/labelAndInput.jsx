import React from 'react';
import Grid from '../layout/grid';

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input}
                type={props.type}
                placeholder={props.placeholder}
                className='form-control'
                readOnly={props.readOnly} />
        </div>
    </Grid>
);