// @ts-check
import { useState } from 'react';

// Components
import Button from './Button';

function FormEmployee({ employeeData, onCreate, onEdit }) {
    const [firstName, setFirstName] = useState(employeeData ? employeeData.FIRST_NAME : '');
    const [lastName, setLastName] = useState(employeeData ? employeeData.LAST_NAME : '');
    const [email, setEmail] = useState(employeeData ? employeeData.EMAIL : '@mail.com');
    const [phoneNumber, setPhoneNumber] = useState(employeeData ? employeeData.PHONE_NUMBER : '');
    const [salary, setSalari] = useState(employeeData ? employeeData.SALARY : '');
    const [commissionPCT, setCommissionPCT] = useState(employeeData ? employeeData.COMMISSION_PCT : '');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSalary = (event) => {
        setSalari(event.target.value);
    };

    const handleCommissionPCT = (event) => {
        setCommissionPCT(event.target.value);
    };

    const handleSubmit = (evemt) => {
        evemt.preventDefault();

        if (
            firstName &&
            lastName &&
            email
        ) {
            if (employeeData) {
                onEdit({
                    FIRST_NAME: firstName,
                    LAST_NAME: lastName,
                    EMAIL: email,
                    PHONE_NUMBER: phoneNumber,
                    SALARY: salary,
                    COMMISSION_PCT: commissionPCT,
                });
            } else {
                onCreate({
                    EMPLOYEE_ID: Date.now(),
                    FIRST_NAME: firstName,
                    LAST_NAME: lastName,
                    EMAIL: email,
                    PHONE_NUMBER: phoneNumber,
                    HIRE_DATE: Date.now(),
                    SALARY: salary,
                    COMMISSION_PCT: commissionPCT,
                });
            }

            setFirstName('');
            setLastName('');
            setEmail('@mail.com');
            setPhoneNumber('');
            setSalari('');
            setCommissionPCT('');
        } else {
            alert('COMPLETA LOS CAMPOS REQUERIDOS!!!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-slate-200 border-2 border-slate-400 rounded-xl flex flex-col gap-4 p-4 w-full lg:w-2/4 lg:self-center'>
            <div className='flex flex-col'>
                <label htmlFor='FIRST_NAME'>nombre<span className='text-red-700 text-xl'>*</span></label>
                <input
                    className='p-1 border-2 border-slate-400 rounded-md'
                    id='FIRST_NAME'
                    maxLength={10}
                    name='FIRST_NAME'
                    onChange={handleFirstName}
                    required={true}
                    type='text'
                    value={firstName}
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='LAST_NAME'>apellido<span className='text-red-700 text-xl'>*</span></label>
                <input
                    className='p-1 border-2 border-slate-400 rounded-md'
                    id='LAST_NAME'
                    maxLength={10}
                    name='LAST_NAME'
                    onChange={handleLastName}
                    required={true}
                    type='text'
                    value={lastName}
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='EMAIL'>correo electronico<span className='text-red-700 text-xl'>*</span></label>
                <input
                    className='p-1 border-2 border-slate-400 rounded-md'
                    id='EMAIL'
                    maxLength={30}
                    name='EMAIL'
                    onChange={handleEmail}
                    placeholder='mail@mail.com'
                    required={true}
                    type='email'
                    value={email}
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='PHONE_NUMBER'>numero telefonico</label>
                <input
                    className='p-1 border-2 border-slate-400 rounded-md'
                    id='PHONE_NUMBER'
                    maxLength={11}
                    minLength={10 || 0}
                    name='PHONE_NUMBER'
                    onChange={handlePhoneNumber}
                    pattern='^\d{10,11}$'
                    placeholder='3813000000'
                    type='text'
                    value={phoneNumber}
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='SALARY'>salario</label>
                <input
                    className='p-1 border-2 border-slate-400 rounded-md'
                    id='SALARY'
                    maxLength={10}
                    name='SALARY'
                    onChange={handleSalary}
                    type='text'
                    value={salary}
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor='COMMISSION_PCT'>comision</label>
                <input
                    className='p-1 border-2 border-slate-400 rounded-md'
                    id='COMMISSION_PCT'
                    maxLength={10}
                    name='COMMISSION_PCT'
                    onChange={handleCommissionPCT}
                    type='text'
                    value={commissionPCT}
                />
            </div>

            <div className='self-center'>
                <Button title='guardar empleado' type="submit">
                    guardar cambios
                </Button>
            </div>
        </form>
    );
}

export default FormEmployee;
