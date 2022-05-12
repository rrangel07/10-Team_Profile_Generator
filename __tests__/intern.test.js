const Intern = require('../lib/intern');
describe('Intern', () => {
    describe('Initialization', () => {
        it ('should create an intern object', () => {
            //Arrange
            const intern = new Intern();
            //Assert
            expect(typeof intern).toBe('object');
        });
        it ('should set the school property', () => {
            //Arrange
            const school = 'UA';
            //Act
            const intern = new Intern('Raul',12,'raulanrangel07@gmail.com',school);
            //Assert
            expect(intern.school).toBe(school);
        });
        it ('should set the school property with the content of the fourth argument passed to the constructor', () => {
            //Arrange
            const school = 'UA';
            // Act
            const intern = new Intern('Raul',12,'raulanrangel07@gmail.com',school);
            //Assert
            expect(intern.school).not.toBe('Raul');
            expect(intern.school).not.toBe(12);
            expect(intern.school).not.toBe('raulanrangel07@gmail.com');
        });
    });
    describe('testing get methods', () => {
        it('should return the school property of the object', () => {
            //Arrange
            const school = 'UA';
            //Act
            const intern = new Intern('Raul',12,'raulanrangel07@gmail.com',school);
            //Assert
            expect(intern.getSchool()).toBe(school);
        });
        it('should return the role property of the object', () => {
            //Arrange
            const role = 'Intern';
            //Act
            const intern = new Intern('Raul',12,'raulanrangel07@gmail.com','school');
            //Assert
            expect(intern.getRole()).toBe(role);
        });
    });
});