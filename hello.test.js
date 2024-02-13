// Hello.test.js

// Import the function to test
const Hello = require('./Hello');

// Test suite for Hello function
describe('Hello function', () => {
  // Test case to check if the function returns the correct message
  test('returns correct message', () => {
    // Arrange (Setup)
    const expectedMessage = 'Hello Craigen';

    // Act (Execute)
    const result = Hello();

    // Assert (Verify)
    expect(result).toBe(expectedMessage);
  });

  // Test case to check if the function logs the correct message
  test('logs correct message', () => {
    // Arrange (Setup)
    const consoleSpy = jest.spyOn(console, 'log');
    const expectedMessage = 'Hello Craigen';

    // Act (Execute)
    Hello();

    // Assert (Verify)
    expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
    consoleSpy.mockRestore(); // Restore console.log
  });
});
