import React from 'react';
import {Show, SimpleShowLayout, TextField, SingleFieldList, ChipField, ReferenceArrayField} from 'react-admin';

const instructorShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <ReferenceArrayField label="Groups" reference="groups" source="groups">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
    )
}

export default instructorShow
                                                                                                                                              import React from 'react';
import {Show, SimpleShowLayout, TextField, SingleFieldList, ChipField, ReferenceArrayField} from 'react-admin';

const instructorShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id'/>
            <TextField source='firstName'/>
            <TextField source='lastName'/>
            <ReferenceArrayField label="Groups" reference="groups" source="groups">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
    )
}

export default instructorShow
