import React from 'react';
import {Show, SimpleShowLayout, TextField} from 'react-admin';

const studentShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <TextField source='sId' label='Student Id'/>
            <TextField source='group'/>
        </SimpleShowLayout>
    </Show>
    )
}

export default studentShow
                                                     import React from 'react';
import {Show, SimpleShowLayout, TextField} from 'react-admin';

const studentShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <TextField source='sId' label='Student Id'/>
            <TextField source='group'/>
        </SimpleShowLayout>
    </Show>
    )
}

export default studentShow
