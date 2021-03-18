import { saveEmployeeToRealmDb, getEmployeeByIdFromRealmDb, getAllEmloyeeFromRealmDb } from "./local/EmployeesLocalDataSource"

export const saveEmployee = () => {
    saveEmployeeToRealmDb();
}

export const getEmployeeById = (emloyeeId) => {
    return getEmployeeByIdFromRealmDb(emloyeeId);
}

export const getAllEmloyee = () => {
    return getAllEmloyeeFromRealmDb();
}