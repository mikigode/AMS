import React from 'react'
import { Create, SimpleForm, TextInput, SelectArrayInput, ReferenceArrayInput} from 'react-admin'

const instructorCreate = (props) => {
    return (
        <Create title='Create a instructor' {...props}>
            <SimpleForm>
            <TextInput source='firstName'/>
            <TextInput source='lastName'/>
            
            <ReferenceArrayInput source="groups" reference="groups">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default instructorCreate
                                                                            import React from 'react'
import { Create, SimpleForm, TextInput, SelectArrayInput, ReferenceArrayInput} from 'react-admin'

const instructorCreate = (props) => {
    return (
        <Create title='Create a instructor' {...props}>
            <SimpleForm>
            <TextInput source='firstName'/>
            <TextInput source='lastName'/>
            
            <ReferenceArrayInput source="groups" reference="groups">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default instructorCreate
