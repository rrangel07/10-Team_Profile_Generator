const Manager = require('../lib/manager');
describe('Manager', () => {
    describe('Initialization', () => {
        it ('should create an manager object', () => {
            //Arrange
            const manager = new Manager();
            //Assert
            expect(typeof manager).toBe('object');
        });
        it ('should set the office property', () => {
            //Arrange
            const office = 20;
            //Act
            const manager = new Manager('Raul',12,'raulanrangel07@gmail.com',office);
            //Assert
            expect(manager.officeNumber).toBe(office);
        });
        it ('should set the office property with the content of the fourth argument passed to the constructor', () => {
            //Arrange
            const office = 20;
            // Act
            const manager = new Manager('Raul',12,'raulanrangel07@gmail.com',office);
            //Assert
            expect(manager.officeNumber).not.toBe('Raul');
            expect(manager.officeNumber).not.toBe(12);
            expect(manager.officeNumber).not.toBe('raulanrangel07@gmail.com');
        });
    });
    describe('testing get methods', () => {
        it('should return the office property of the object', () => {
            //Arrange
            const office = 20;
            //Act
            const manager = new Manager('Raul',12,'raulanrangel07@gmail.com',office);
            //Assert
            expect(manager.getOffice()).toBe(office);
        });
        it('should return the role property of the object', () => {
            //Arrange
            const role = 'Manager';
            //Act
            const manager = new Manager('Raul',12,'raulanrangel07@gmail.com','office');
            //Assert
            expect(manager.getRole()).toBe(role);
        });
    });
});