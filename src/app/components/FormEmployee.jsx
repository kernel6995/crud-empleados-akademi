// @ts-check
import { useState } from 'react';

// Components
import Button from './Button';
import InputField from './InputField';

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
                const currentDate = new Date(Date.now());
                const formattedDate = currentDate.toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                });

                onCreate({
                    EMPLOYEE_ID: Date.now(),
                    FIRST_NAME: firstName,
                    LAST_NAME: lastName,
                    EMAIL: email,
                    PHONE_NUMBER: phoneNumber,
                    HIRE_DATE: formattedDate,
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
            <p>completa los campos con <span className='text-red-700 text-xl'>*</span></p>

            <InputField
                label='nombre'
                maxLength={10}
                name='FIRST_NAME'
                onChange={handleFirstName}
                placeholder='ej: mario'
                required={true}
                value={firstName}
            />

            <InputField
                label='apellido'
                maxLength={10}
                name='LAST_NAME'
                onChange={handleLastName}
                placeholder='ej: bross'
                required={true}
                value={lastName}
            />

            <InputField
                label='correo electronico'
                maxLength={30}
                name='EMAIL'
                onChange={handleEmail}
                placeholder='ej: mail@mail.com'
                required={true}
                type='email'
                value={email}
            />

            <InputField
                label='numero telefonico'
                maxLength={11}
                minLength={10 || 0}
                name='PHONE_NUMBER'
                onChange={handlePhoneNumber}
                pattern='^\d{10,11}$'
                placeholder='ej: 3815000000'
                value={phoneNumber}
            />

            <InputField
                label='salario'
                maxLength={10}
                name='SALARY'
                onChange={handleSalary}
                placeholder='ej: 1.000.000.00'
                value={salary}
            />

            <InputField
                label='comision'
                maxLength={10}
                name='COMMISSION_PCT'
                onChange={handleCommissionPCT}
                placeholder='ej: A1'
                value={commissionPCT}
            />

            <div className='self-center'>
                <Button title='guardar empleado' type="submit">
                    guardar cambios
                </Button>
            </div>
        </form>
    );
}

export default FormEmployee;
