import { createSlice } from "@reduxjs/toolkit";

const initialEmployees = [
    {
        EMPLOYEE_ID: 1,
        FIRST_NAME: 'carl',
        LAST_NAME: 'johnson',
        EMAIL: 'johnson@mail.com',
        PHONE_NUMBER: '3813000000',
        HIRE_DATE: new Date(2004, 10, 26).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
        SALARY: 100000,
        COMMISSION_PCT: 'A1',
    },
    {
        EMPLOYEE_ID: 2,
        FIRST_NAME: 'tommy',
        LAST_NAME: 'vercetti',
        EMAIL: 'vercetti@mail.com',
        PHONE_NUMBER: '3813000001',
        HIRE_DATE: new Date(2002, 1, 1).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
        SALARY: 100000,
        COMMISSION_PCT: 'A1',
    },
    {
        EMPLOYEE_ID: 3,
        FIRST_NAME: 'gordon',
        LAST_NAME: 'freeman',
        EMAIL: 'freeman@mail.com',
        PHONE_NUMBER: '3813000002',
        HIRE_DATE: new Date(1998, 12, 26).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
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
            const employeeToEdit = action.payload;
            const index = state.employees.findIndex((emp) => emp.EMPLOYEE_ID === employeeToEdit.EMPLOYEE_ID);
            state.employees[index] = { ...state.employees[index], ...employeeToEdit };
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter((emp) => emp.EMPLOYEE_ID !== action.payload);
        },
    },
});

export const {
    addEmployee,
    editEmployee,
    deleteEmployee,
} = employeesSlice.actions;

export default employeesSlice.reducer;
