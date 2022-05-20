export default interface Employee {
    id: number,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image: string,
}

export default interface EmployeeResult {
    status: string,
    data: [Employee],
    message: string
}