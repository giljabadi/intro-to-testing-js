// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return Hello, Jane!',
        function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return Hello, Alex!',
        function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return Hello, Pat!',
        function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should  return Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should never return true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should never return false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should never return null', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should never return an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!")
    });
    it('should never return a number', function () {
        expect(sayHello()).not.toBe(typeof 0)
    });
    it('should never return an array', function () {
        expect(sayHello()).not.toBe(Array.isArray() == true)
    });
    it('should never return an object', function () {
        expect(sayHello()).not.toBe(typeof {})
    });
    it('should never return a function', function () {
        expect(sayHello()).not.toBe(typeof function () {})
    });
    it("should never return 'undefined'", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});