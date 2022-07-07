const Employee= require('../lib/Employee')

test ('creates an Employee object', () => {
    const employee= new Employee();

    expect(typeof(employee)).toBe("object");
})

test ('returns object name', () => {
    const employee= new Employee('testName');

    expect(employee.name).toBe("testName");
})





test ('returns object name in method', () => {
    const employee= new Employee('testName');

    expect(employee.getName()).toBe("testName");
})
