 export default interface Employee2 {
     id: number,
     employee_name: string,
     employee_salary: number,
     employee_age: number,
     profile_image: string,
 }

export default interface Employee {

    username: string;
    password: string;
    // employees: Employee;
    // friends: []

}

 export default interface EmployeeResult {
     status: string,
     data: [Employee2],
     message: string
 }