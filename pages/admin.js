
import React from 'react'
import DataTable from 'react-data-table-component';

// functional component - arrow function
const Admin = () => {
  const message = '...'

  const data = [{ id: 1, name: 'Joe Doe', email: 'joe.doe@gmail.com' }];
  const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
            right: true,
        },
        ];

  return (
    <div>
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <DataTable
                        title="Users List"
                        columns={columns}
                        data={data}
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
 
}



export default Admin
