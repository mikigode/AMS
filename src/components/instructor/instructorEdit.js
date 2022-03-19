import React from 'react'
import { Edit, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin'

const instructorEdit = (props) => {
    return (
        <Edit title='Edit instructor' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='firstName' />
                <TextInput source='lastName' />
                <ReferenceArrayInput source="groups" reference="groups">
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Ediimport React from 'react'
import { Edit, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin'

const instructorEdit = (props) => {
    return (
        <Edit title='Edit instructor' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='firstName' />
                <TextInput source='lastName' />
                <ReferenceArrayInput source="groups" reference="groups">
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    )
}

export default instructorEdit
