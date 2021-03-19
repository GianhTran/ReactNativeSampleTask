import { saveEmployeeToRealmDb, getEmployeeByIdFromRealmDb, getAllEmloyeeFromRealmDb, deleteEmployeeByIdFromRealmDb, updateEmployeeInRealmDb } from "./local/EmployeesLocalDataSource"

export const saveEmployee = (
    firstName,
    lastName,
    email,
    mobileNumber,
    employeeId,
    dob,
    department) => {
    saveEmployeeToRealmDb(
        firstName,
        lastName,
        email,
        mobileNumber,
        employeeId,
        dob,
        department);
}

export const getEmployeeById = (emloyeeId) => {
    return getEmployeeByIdFromRealmDb(emloyeeId);
}

export const getAllEmloyee = () => {
    return getAllEmloyeeFromRealmDb();
}

export const deleteEmployeeById = (emloyeeId) => {
    return deleteEmployeeByIdFromRealmDb(emloyeeId);
}

export const updateEmployee = (employee) => {
    return updateEmployeeInRealmDb(employee);
}