import React from 'react';
import { Show, SimpleShowLayout, TextField, SingleFieldList, ChipField, ReferenceArrayField, ReferenceField } from 'react-admin';

const groupShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='id' />
                <TextField source='name' />
                <ReferenceField label="Instructor" reference="instructor" source="id">
                    <ChipField source="firstName" />
                </ReferenceField>
                <ReferenceArrayField label="Students" reference="students" source="students">
                    <SingleFieldList>
                        <ChipField source="firstName" />
                    </SingleFieldList>
                </ReferenceArrayField>import React from 'react';
import { Show, SimpleShowLayout, TextField, SingleFieldList, ChipField, ReferenceArrayField, ReferenceField } from 'react-admin';

const groupShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='id' />
                <TextField source='name' />
                <ReferenceField label="Instructor" reference="instructor" source="id">
                    <ChipField source="firstName" />
                </ReferenceField>
                <ReferenceArrayField label="Students" reference="students" source="students">
                    <SingleFieldList>
                        <ChipField source="firstName" />
                    </SingleFieldList>
                </ReferenceArrayField>
            </SimpleShowLayout>
        </Show>
    )
}

export default groupShow
