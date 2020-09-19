import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import CustomUrlField from './customUrlField';

const UserList = props => {
  console.log({ props });

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <CustomUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};

export { UserList };
