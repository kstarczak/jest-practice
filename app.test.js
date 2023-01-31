import { capitalize } from './app.js';

test('makes first letter uppercase', () => {
    expect(capitalize('hello')).toBe('Hello');
});