import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, SingleFieldList, ChipField, ReferenceArrayField } from 'react-admin';

const instructorList = (props) => {
    // console.log(props)
    return <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id' />
            <TextField source='firstName' />
            <TextField source='lastName' />

            <ReferenceArrayField label="Groups" reference="groups" source="groups">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
 import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, SingleFieldList, ChipField, ReferenceArrayField } from 'react-admin';

const instructorList = (props) => {
    // console.log(props)
    return <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id' />
            <TextField source='firstName' />
            <TextField source='lastName' />

            <ReferenceArrayField label="Groups" reference="groups" source="groups">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton basePath='/instructor' />
            <DeleteButton basePath='/instructor' />
        </Datagrid>
    </List>
}

export default instructorList
