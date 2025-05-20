const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe("Test per l'operatore reverseString", () => {

    test('reverse pippo to equal oppip', () => {
        expect(reverseString("pippo")).toBe("oppip");
    });

    test('reverse "" to equal ""', () => {
        expect(reverseString("")).toBe("");
    });
});

describe("Test per l'operatore isPalindrome", () => {

    test('check pippo to equal false', () => {
        expect(isPalindrome("pippo")).toBe(false);
    });

    test('check apa to equal true', () => {
        expect(isPalindrome("apa")).toBe(true);
    });
});

describe("Test per l'operatore truncateString", () => {

    test('check pippo and 1 to equal p...', () => {
        expect(truncateString("pippo", 1)).toBe("p...");
    });

    test('check apa and 4 to equal apa', () => {
        expect(truncateString("apa", 4)).toBe("apa");
    });

    test('check apa and -1 to equal ...', () => { // This test is skipped because the behavior is not what we want
        expect(truncateString("apa", -1)).toBe("...");
    });
});

describe("Test per l'operatore countCharacters", () => {

    test('check pippo to equal {p:3, i:1, o:1}', () => {
        expect(countCharacters("pippo")).toStrictEqual({ "p": 3, "i": 1, "o": 1 });
    });

    test('check apa to equal {a:2, p:1}', () => {
        expect(countCharacters("apa")).toStrictEqual({ "a": 2, "p": 1 });
    });

    test('check "" to equal {}', () => {
        expect(countCharacters("")).toStrictEqual({});
    });
});