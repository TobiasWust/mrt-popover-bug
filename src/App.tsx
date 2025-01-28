import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import 'mantine-react-table/styles.css';
import { useMemo } from 'react';
import './App.css';

function App() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        filterFn: 'equals',
        mantineFilterSelectProps: {
          data: ['Male', 'Female', 'Other'],
        },
        filterVariant: 'select',
      },
      {
        accessorKey: 'age',
        header: 'Age',
        filterVariant: 'range',
      },
    ],
    []
  );

  return (
    <>
      <h1>Hallo</h1>
      <MantineProvider>
        <MantineReactTable
          columns={columns}
          data={data}
          columnFilterDisplayMode='popover'
        />
      </MantineProvider>
    </>
  );
}

export default App;

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
};

const data = [
  {
    id: 1,
    firstName: 'Hugh',
    lastName: 'Mungus',
    gender: 'Male',
    age: 42,
  },
  {
    id: 2,
    firstName: 'Leroy',
    lastName: 'Jenkins',
    gender: 'Male',
    age: 51,
  },
  {
    id: 3,
    firstName: 'Candice',
    lastName: 'Nutella',
    gender: 'Female',
    age: 27,
  },
  {
    id: 4,
    firstName: 'Micah',
    lastName: 'Johnson',
    gender: 'Other',
    age: 32,
  },
];
