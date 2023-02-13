import { createSlice } from "@reduxjs/toolkit";

const initialEmployees = [
    {
        EMPLOYEE_ID: 1,
        FIRST_NAME: 'Carl',
        LAST_NAME: 'Jonson',
        EMAIL: 'carl@mail.com',
        PHONE_NUMBER: '3813000000',
        HIRE_DATE: '03/07/2001',
        SALARY: 100000,
        COMMISSION_PCT: 'A1',
    },
    {
        EMPLOYEE_ID: 2,
        FIRST_NAME: 'Tommy',
        LAST_NAME: 'Versety',
        EMAIL: 'mail_disel@mail.com',
        PHONE_NUMBER: '3813000001',
        HIRE_DATE: '12/07/200',
        SALARY: 100000,
        COMMISSION_PCT: 'A1',
    },
    {
        EMPLOYEE_ID: 3,
        FIRST_NAME: 'Gordon',
        LAST_NAME: 'Freeman',
        EMAIL: 'freeman@mail.com',
        PHONE_NUMBER: '3813000002',
        HIRE_DATE: '01/02/2003',
        SALARY: 100000,
        COMMISSION_PCT: 'A1',
    },
];

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        employees: initialEmployees,
        employee: {},
        loading: false,
        error: null,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        editEmployee: (state, action) => {
            const { id, newData } = action.payload;
            const index = state.employees.findIndex((employee) => employee.id === id);
            state.employees[index] = { ...state.employees[index], ...newData };
        },
        deleteEmployee: (state, action) => {
            const index = state.employees.findIndex((employee) => employee.id === action.payload);
            state.employees.splice(index, 1);
        },
    },
});

export const {
    addEmployee,
    editEmployee,
    deleteEmployee,
} = employeesSlice.actions;

export default employeesSlice.reducer;
