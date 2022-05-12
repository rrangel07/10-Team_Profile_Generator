const Employee = require('../lib/employee');

describe('Employee', () => {
    //Positive test
    describe('Initialization', () => {
        it ('should create an employee object', () => {
            //Arrange
            const employee = new Employee();
            //Assert
            expect(typeof employee).toBe('object');
        });
        // Test for equality
        it ('should set the name property', () => {
            //Arrange
            const name = 'Raul';
            // Act
            const employee = new Employee(name);
            //Assert
            expect(employee.name).toBe(name);
        });
        // Test for inequality
        it ('should set the name property with the content of name', () => {
            //Arrange
            const name = 'Ivan';
            // Act
            const employee = new Employee(name);
            //Assert
            expect(employee.name).not.toBe('Raul');
        });
        // Test for equality
        it ('should set the ID property', () => {
            //Arrange
            const id = 12;
            // Act
            const employee = new Employee('Raul',id);
            //Assert
            expect(employee.id).toBe(id);
        });
        // Test for inequality
        it ('should set the id property with the content of the second argument passed to the constructor', () => {
            //Arrange
            const id = 12;
            // Act
            const employee = new Employee('Raul',id);
            //Assert
            expect(employee.id).not.toBe('Raul');
        });
        // Test for equality
        it ('should set the email property', () => {
            //Arrange
            const email = 'raulanrangel07@gmail.com';
            // Act
            const employee = new Employee('Raul',12,email);
            //Assert
            expect(employee.email).toBe(email);
        });
        // Test for inequality
        it ('should set the email property with the content of third argument passed to the constructor', () => {
            //Arrange
            const email = 'raulanrangel07@gmail.com';
            // Act
            const employee = new Employee('Raul',12,email);
            //Assert
            expect(employee.email).not.toBe('Raul');
            expect(employee.email).not.toBe('12');
        });
    });

    describe('testing get methods', () => {
        it('should return the name property of the object', () => {
            //Arrange
            const name = 'Maria';
            //Act
            const employee = new Employee(name,12,'m@r.com');
            //Assert
            expect(employee.getName()).toBe(name);
        });
        it('should return the ID property of the object', () => {
            //Arrange
            const id = 12;
            //Act
            const employee = new Employee('Maria',id,'m@r.com');
            //Assert
            expect(employee.getId()).toBe(id);
        });
        it('should return the email property of the object', () => {
            //Arrange
            const email = 'm@r.com';
            //Act
            const employee = new Employee('Maria',12,email);
            //Assert
            expect(employee.getEmail()).toBe(email);
        });
        it('should return the role property of the object', () => {
            //Arrange
            const role = 'Employee';
            //Act
            const employee = new Employee('Maria',12,'m@r.com');
            //Assert
            expect(employee.getRole()).toBe(role);
        });
    });
});