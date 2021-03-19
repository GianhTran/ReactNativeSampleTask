import realm from "../local/api/RealmAPI";

export const saveEmployeeToRealmDb = (
    firstName,
    lastName,
    email,
    mobileNumber,
    employeeId,
    dob,
    department) => {
    realm.write(() => {
        realm.create("Employee", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            employeeId: employeeId,
            dob: dob,
            department: department
        });
    });
}

export const getEmployeeByIdFromRealmDb = (emloyeeId) => {
    return realm.objects("Employee").filtered(`employeeId = "${emloyeeId}"`)[0];
}

export const getAllEmloyeeFromRealmDb = () => {
    return realm.objects("Employee").sorted('firstName', false);
}

export const deleteEmployeeByIdFromRealmDb = (emloyeeId) => {
    const emloyee = realm.objects("Employee").filtered(`employeeId = "${emloyeeId}"`);
    realm.write(() => {
        realm.delete(emloyee)
    })
}

export const updateEmployeeInRealmDb = (employee) => {
    realm.write(() => {
        realm.create("Employee", {
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            mobileNumber: employee.mobileNumber,
            employeeId: employee.employeeId,
            dob: employee.dob,
            department: employee.department
        }, 'modified');
    })
}