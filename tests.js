// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a function', function() {
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
        expect(typeof sayHello()).not.toBe('number')
    });
    it('should never return an array', function () {
        expect(typeof sayHello()).not.toBe('object')
    });
    it('should never return a function', function () {
        expect(typeof sayHello()).not.toBe('function')
    });
    it("should never return 'undefined'", function() {
        expect(typeof sayHello()).not.toBe('undefined');
    });
});

describe('isFive', function () {
    it('does function exist', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should be a boolean', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true', function () {
        expect(isFive(5)).toBe(true)
        expect(isFive('5')).toBe(false)
    });
})

describe('isEven', function () {
    it('should be a function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return true if number is positive & even', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(8)).toBe(true)
    });
    it('should return false if isEven(3)', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return true if isEven(-4)', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false if a string is inputted', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return false if infinity is inputted', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should ', function () {
        
    });


})

describe('isVowel', function () {
    it('should be a function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should be a boolean', function () {
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should be a vowel', function () {
        expect(isVowel('a')).toBe(true)
    });
})

describe('add', function () {
    it('should be a function', function () {
        expect(typeof add).toBe('function')
    });
    it('should be a number', function () {
        expect(typeof add()).toBe('number')
    });
    it('should return a number', function () {
        expect(add(2, 5)).toBe(7)
    });
})