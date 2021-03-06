import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import studentsList from './components/students/studentsList';
import studentCreate from './components/students/studentCreate';
import studentEdit from './components/students/studentEdit';
import groupsList from './components/groups/groupsLits';
import groupCreate from './components/groups/groupCreate';
import groupEdit from './components/groups/groupEdit';
import groupShow from './components/groups/groupShow';
import instructorCreate from './components/instructor/instructorCreate';
import instructorEdit from './components/instructor/instructorEdit';
import instructorList from './components/instructor/instructorList';
import instructorShow from './components/instructor/instructorShow';
import studentShow from './components/students/studentShow';
import UserIcon from '@material-ui/icons/Group';



function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:5000')}>
      <Resource
        name='students'
        list={studentsList}
        show={studentShow}
        create={studentCreate}
        edit={studentEdit}
        icon={UserIcon}
      />
      <Resource
        name='groups'
        list={groupsList}
        create={groupCreate}
        edit={groupEdit}
        show={groupShow}
        icon={UserIcon}
      />
      <Resource
        name='instructor'
        list={instructorList}
        create={instructorCreate}
        edit={instructorEdit}
        show={instructorShow}
        icon={UserIcon}
      />
    </Admin>
  )
}

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import studentsList from './components/students/studentsList';
import studentCreate from './components/students/studentCreate';
import studentEdit from './components/students/studentEdit';
import groupsList from './components/groups/groupsLits';
import groupCreate from './components/groups/groupCreate';
import groupEdit from './components/groups/groupEdit';
import groupShow from './components/groups/groupShow';
import instructorCreate from './components/instructor/instructorCreate';
import instructorEdit from './components/instructor/instructorEdit';
import instructorList from './components/instructor/instructorList';
import instructorShow from './components/instructor/instructorShow';
import studentShow from './components/students/studentShow';
import UserIcon from '@material-ui/icons/Group';



function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:5000')}>
      <Resource
        name='students'
        list={studentsList}
        show={studentShow}
        create={studentCreate}
        edit={studentEdit}
        icon={UserIcon}
      />
      <Resource
        name='groups'
        list={groupsList}
        create={groupCreate}
        edit={groupEdit}
        show={groupShow}
        icon={UserIcon}
      />
      <Resource
        name='instructor'
        list={instructorList}
        create={instructorCreate}
        edit={instructorEdit}
        show={instructorShow}
        icon={UserIcon}
      />
    </Admin>
  )
}

export default App;