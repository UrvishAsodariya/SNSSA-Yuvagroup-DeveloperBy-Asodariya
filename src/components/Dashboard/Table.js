import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
    employees.forEach((employee, i) => {
        employee.id = i + 1;
    });

    const column = [
        {
            name: 'id',
            selecor: row => row.id,
            sortable: true
        }, {
            name: 'id',
            selecor: row => row.id,
            sortable: true
        }, {
            name: 'id',
            selecor: row => row.id,
            sortable: true
        }, {
            name: 'id',
            selecor: row => row.id,
            sortable: true
        }, {
            name: 'id',
            selecor: row => row.id,
            sortable: true
        },
    ]

    return (
        <div className="contain-table">
            <table className="striped-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>UID No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile No.</th>
                        <th>Person</th>
                        <th>Pay Installment</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.UIDNo}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.MobileNo}</td>
                                <td>{employee.Person}</td>
                                <td>{employee.PayInstallment}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Person</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default Table;
