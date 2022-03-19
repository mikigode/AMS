import React from 'react';
import {List, Datagrid, TextField, EditButton, DeleteButton, ShowButton} from 'react-admin';
import studentShow from './studentShow';

const studentsList = (props) => {
    return <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <TextField source='sId' label='Student Id'/>
            <TextField source='group'/>
        import React from 'react';
import {List, Datagrid, TextField, EditButton, DeleteButton, ShowButton} from 'react-admin';
import studentShow from './studentShow';

const studentsList = (props) => {
    return <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <TextField source='sId' label='Student Id'/>
            <TextField source='group'/>
            <EditButton basePath='/students'/>
            <DeleteButton basePath='/students'/>
        </Datagrid>
    </List>
}

export default studentsList
