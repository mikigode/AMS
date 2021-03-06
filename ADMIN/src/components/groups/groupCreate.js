import React from 'react'
import { Create, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput, ReferenceInput, SelectInput } from 'react-admin'

const groupCreate = (props) => {
    return (
        <Create title='Create a group' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <ReferenceInput source="instructor" reference="instructor">
                    <SelectInput optionText="firstName" />
                </ReferenceInput>
                <ReferenceArrayInput source="students" reference="students">
                    <SelectArrayInput optionText="firstName" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default groupCreate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     import React from 'react'
import { Create, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput, ReferenceInput, SelectInput } from 'react-admin'

const groupCreate = (props) => {
    return (
        <Create title='Create a group' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <ReferenceInput source="instructor" reference="instructor">
                    <SelectInput optionText="firstName" />
                </ReferenceInput>
                <ReferenceArrayInput source="students" reference="students">
                    <SelectArrayInput optionText="firstName" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default groupCreate
