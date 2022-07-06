const Employee= require('../lib/Employee')

test ('creates an Employee object', () => {
    const employee= new Employee();

    expect(typeof(employee)).toBe("object");
})