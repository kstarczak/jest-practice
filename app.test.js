import { capitalize, reverseString } from './app.js';

test('makes first letter uppercase', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverse a string', () => {
    expect(reverseString("billy")).toBe('yllib');
});