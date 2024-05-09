// Credit to ChatGPT for test cases
const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];

const graph2 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];

const graph3 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

const graph4 = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];

const graph5 = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
];

const graph6 = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0]
];

// Test the function
assert.strictEqual(are_isomorphic(graph1, graph2), true);
assert.strictEqual(are_isomorphic(graph1, graph3), false);
assert.strictEqual(are_isomorphic(graph1, graph4), false);
assert.strictEqual(are_isomorphic(graph4, graph5), false);
assert.strictEqual(are_isomorphic(graph5, graph6), false);


