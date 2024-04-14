import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
    const [UIDNo, setUIDNo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [MobileNo, setMobileno] = useState('');
    const [Person, setPerson] = useState('');
    const [PayInstallment, setPayInstallment] = useState('');
    const [date, setDate] = useState('');

    const handleAdd = e => {
        e.preventDefault();

        if (!UIDNo || !firstName || !lastName || !MobileNo || !Person || !PayInstallment || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            UIDNo,
            firstName,
            lastName,
            MobileNo,
            Person,
            PayInstallment,
            date,
        };

        employees.push(newEmployee);
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add New Person</h1>
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
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
};

export default Add;
