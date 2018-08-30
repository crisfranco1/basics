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


let getEmployeeById = (id, callback) => {
    let employee = employees.find(((employee) => employee.id === id));
    if (!employee) {
        callback(`Employee ${id} does not exist.`);
    } else {
        callback(null, employee);
    }
};


let getSalaryByEmployee = (employee, callback) => {
    let salary = salaries.find((salary) => salary.id === employee.id);
    if (!salary) {
        callback(`No se encontro un salario para el usuario ${employee.name}`);
    } else {
        callback(null, { name: employee.name, salary: salary.salary });
    }
};


getEmployeeById(1, (error, employee) => {
    if (error) {
        console.log(error);
    }
    else {
        getSalaryByEmployee(employee, (error, salary) => {
            if (error) {
                console.log(error);
            } else {
                console.log(salary);
            }
        });
    }
});