import React from 'react'
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostEdit, PostCreate, PostList } from './posts';
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);

export default App;