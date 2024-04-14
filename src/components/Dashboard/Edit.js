import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
    const id = selectedEmployee.id;
    const [UIDNo, setUIDNo] = useState(selectedEmployee.UIDNo);
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [MobileNo, setMobileno] = useState(selectedEmployee.MobileNo);
    const [Person, setPerson] = useState(selectedEmployee.Person);
    const [PayInstallment, setPayInstallment] = useState(selectedEmployee.PayInstallment);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!UIDNo || !firstName || !lastName || !MobileNo || !Person || !PayInstallment || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            });
        }

        const employee = {
            id,
            UIDNo,
            firstName,
            lastName,
            MobileNo,
            Person,
            PayInstallment,
            date,
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Update Person Details.</h1>
                <label htmlFor="UID No.">UID No.</label>
                <input
                    id="UIDNo."
                    type="text"
                    name="UIDNo"
                    value={UIDNo}
                    onChange={e => setUIDNo(e.target.value)}
                />
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Mobile No.</label>
                <input
                    id="MobileNo"
                    type="number"
                    name="MobileNo."
                    value={MobileNo}
                    onChange={e => setMobileno(e.target.value)}
                />
                <label htmlFor="salary">Person</label>
                <input
                    id="Person"
                    type="number"
                    name="Person"
                    value={Person}
                    onChange={e => setPerson(e.target.value)}
                />
                <label htmlFor="salary">Pay Installment</label>
                <input
                    id="PayInstallment"
                    type="text"
                    name="PayInstallment"
                    value={PayInstallment}
                    onChange={e => setPayInstallment(e.target.value)}
                />
                <label htmlFor="date">Update Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
};

export default Edit;
