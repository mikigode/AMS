import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'

const studentCreate = (props) => {
    return (
        <Edit title='Edit a student' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='firstName'/>
                <TextInput source='lastName'/>
                <TextInput source='sId' label='Student Id'/>
                <TextInput source='group'/>
            </SimpleForm>
        </Edit>import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'

const studentCreate = (props) => {
    return (
        <Edit title='Edit a student' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='firstName'/>
                <TextInput source='lastName'/>
                <TextInput source='sId' label='Student Id'/>
                <TextInput source='group'/>
            </SimpleForm>
        </Edit>
    )
}

export default studentCreate
