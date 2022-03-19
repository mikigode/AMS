import React from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    ReferenceInput, 
    SelectInput, 
    ReferenceArrayInput, 
    SelectArrayInput} from 'react-admin';

const groupEdit = (props) => {
    return (
        <Edit title='Edit a group' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <ReferenceInput source="instructors" reference="instructor">
                    <SelectInput optionText="firstName" />
                </ReferenceInput>
                <ReferenceArrayInput source="students" reference="students">
                    <SelectArrayInput optionText="firstName" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    )
import React from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    ReferenceInput, 
    SelectInput, 
    ReferenceArrayInput, 
    SelectArrayInput} from 'react-admin';

const groupEdit = (props) => {
    return (
        <Edit title='Edit a group' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <ReferenceInput source="instructors" reference="instructor">
                    <SelectInput optionText="firstName" />
                </ReferenceInput>
                <ReferenceArrayInput source="students" reference="students">
                    <SelectArrayInput optionText="firstName" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    )
}

export default groupEdit
