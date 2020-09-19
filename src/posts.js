import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
  SimpleList
} from 'react-admin';


const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

const PostList = (props) => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={<PostFilter />} {...props}>
      { isSmallScreen ? (
        <SimpleList
          primaryText={(record) => {
            console.log("SimpleListRecord", record);
            return record.title
          }}
        />
      ) : (
        <Datagrid>
          <ReferenceField source="userId" reference="users">
            <TextField source="name"></TextField>
          </ReferenceField>
          {/* <TextField source="id"></TextField> */}
          <TextField source="title" />
          {/* <TextField source="body"></TextField> */}
          <EditButton />
        </Datagrid>
      )}
      
    </List>
  );
}

const PostTitle = ({ record }) => <span>Post {record ? `"${record.title}"` : ''}</span>;

const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/* <TextInput source="id" /> */}
      <TextInput source="title" />
      <TextInput multiline source="body" />
      {/* <TextInput source="body" /> */}
    </SimpleForm>
  </Edit>
);

const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export { PostList, PostEdit, PostCreate };
