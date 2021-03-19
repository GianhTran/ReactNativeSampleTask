var Realm = require("realm");

class Employee extends Realm.Object { }
Employee.schema = {
    name: "Employee",
    primaryKey: 'employeeId',
    properties: {
        firstName: "string",
        lastName: "string",
        email: "string",
        mobileNumber: "string",
        employeeId: "string",
        dob: "string",
        department: "string"
    },
};

{/* create realm instance */ }
let realm = new Realm({
    schema: [Employee],
    schemaVersion: 1,
    deleteRealmIfMigrationNeeded: true,
});

export default realm;