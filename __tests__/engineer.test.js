const Engineer = require('../lib/engineer');
describe('Engineer', () => {
    describe('Initialization', () => {
        it ('should create an engineer object', () => {
            //Arrange
            const engineer = new Engineer();
            //Assert
            expect(typeof engineer).toBe('object');
        });
        it ('should set the GitHub property', () => {
            //Arrange
            const gitHub = 'rrangel07';
            //Act
            const engineer = new Engineer('Raul',12,'raulanrangel07@gmail.com',gitHub);
            //Assert
            expect(engineer.gitHub).toBe(gitHub);
        });
        it ('should set the GitHub property with the content of the fourth argument passed to the constructor', () => {
            //Arrange
            const gitHub = 'rrangel07';
            // Act
            const engineer = new Engineer('Raul',12,'raulanrangel07@gmail.com',gitHub);
            //Assert
            expect(engineer.gitHub).not.toBe('Raul');
            expect(engineer.gitHub).not.toBe(12);
            expect(engineer.gitHub).not.toBe('raulanrangel07@gmail.com');
        });
    });
    describe('testing get methods', () => {
        it('should return the GitHub property of the object', () => {
            //Arrange
            const gitHub = 'rrangel07';
            //Act
            const engineer = new Engineer('Raul',12,'raulanrangel07@gmail.com',gitHub);
            //Assert
            expect(engineer.getGitHub()).toBe(gitHub);
        });
        it('should return the role property of the object', () => {
            //Arrange
            const role = 'Engineer';
            //Act
            const engineer = new Engineer('Raul',12,'raulanrangel07@gmail.com','gitHub');
            //Assert
            expect(engineer.getRole()).toBe(role);
        });
    });
});