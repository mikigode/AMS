import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField, ChipField } from 'react-admin';

const studentsList = (props) => {
    return <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id' />
            <TextField source='name' />
            <ReferenceField label="Instructor" reference="instructor" source="id">
                <ChipField source="firstName" />
            </ReferenceField>
            <TextField source='students' />
            <EditButton basePath='/groups' />
            <DeleteButton basePath='/groups' />
        </Datagrid>
    </List>
}

export default studentsList
                                                                                                                                                                                                   import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField, ChipField } from 'react-admin';

const studentsList = (props) => {
    return <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id' />
            <TextField source='name' />
            <ReferenceField label="Instructor" reference="instructor" source="id">
                <ChipField source="firstName" />
            </ReferenceField>
            <TextField source='students' />
            <EditButton basePath='/groups' />
            <DeleteButton basePath='/groups' />
        </Datagrid>
    </List>
}

export default studentsList
