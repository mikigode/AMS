import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const studentCreate = (props) => {
    return (
        <Create title='Create a student' {...props}>
            <SimpleForm>
                <TextInput source='firstName'/>
                <TextInput source='lastName'/>
                <TextInput source='sId' label='Student Id'/>
                <TextInput source='group'/>
            </SimpleForm>
        </Create>
    )
}

export default studentCreate
                                                                                                                                                                                           import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const studentCreate = (props) => {
    return (
        <Create title='Create a student' {...props}>
            <SimpleForm>
                <TextInput source='firstName'/>
                <TextInput source='lastName'/>
                <TextInput source='sId' label='Student Id'/>
                <TextInput source='group'/>
            </SimpleForm>
        </Create>
    )
}

export default studentCreate
