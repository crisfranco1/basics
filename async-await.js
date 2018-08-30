let employees = [
    {
        id: 1,
        name: "Cristian"
    }, {
        id: 2,
        name: 'David'
    },
    {
        id: 3,
        name: 'Franco'
    }];

let salaries = [
    {
        id: 1,
        salary: 1000
    }, {
        id: 2,
        salary: 2000
    }];

/*let getEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        let employee = employees.find(employee => employee.id === id);
        if (!employee) {
            reject(`Employee ${id} does not exist.`);
        } else {
            resolve(employee);
        }
    });
}*/



let getEmployeeById = async (id) => {
    let employee = employees.find(employee => employee.id === id);
    if (!employee) {
        throw new Error(`Employee ${id} does not exist.`);
    } else {
        return employee;
    }

};


let getSalaryByEmployee = async (employee) => {
    let salary = salaries.find(salary => salary.id === employee.id);
    if (!salary) {
        throw new Error(`No se encontro un salario para el usuario ${employee.name}`);
    } else {
        return { name: employee.name, salary: salary.salary };
    }
};


/*let getSalaryByEmployee = employee => {
    return new Promise((resolve, reject) => {
        let salary = salaries.find(salary => salary.id === employee.id);
        if (!salary) {
            reject(`No se encontro un salario para el usuario ${employee.name}`);
        }
        else {
            resolve();
        }
    });
};*/





let getReport = async (employeeId) => {
    let employee = await getEmployeeById(employeeId);
    let salary = await getSalaryByEmployee(employee);
    return salary;
};
getReport(3).then(report => { console.log(report) }).catch(error => { console.log(error) });
