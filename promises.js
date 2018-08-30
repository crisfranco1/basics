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



let getEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        let employee = employees.find(((employee) => employee.id === id));
        if (!employee) {
            reject(`Employee ${id} does not exist.`);
        } else {
            resolve(employee);
        }
    });
}



let getSalaryByEmployee = employee => {
    return new Promise((resolve, reject) => {
        let salary = salaries.find(salary => salary.id === employee.id);
        if (!salary) {
            reject(`No se encontro un salario para el usuario ${employee.name}`);
        }
        else {
            resolve({ name: employee.name, salary: salary.salary });
        }
    });
};


/*getEmployeeById(10).then(employee => {
    getSalaryByEmployee(employee).then(salary => {
        console.log(salary);
    }, error => {
        console.log(error);
    });
}, error => {
    console.log(error);
});*/



getEmployeeById(3).then(employee => {
    return getSalaryByEmployee(employee);
}).then(salary => {
    console.log(salary);
}).catch(error => {
    console.log(error);
})

