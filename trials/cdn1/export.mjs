export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const div = (a, b) => a / b;

export default (function math() {
    return { add, sub, div }
})()