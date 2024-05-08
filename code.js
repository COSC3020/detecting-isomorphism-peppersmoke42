// Credit to ChatGPT for explaining what isomorphism is
//    -And for debugging my program
//    -And for providing test cases
function calcDegrees(graph)
{
    let degrees = [];
    for (const row of graph) {
        let degree = 0;
        for (const element of row)
            degree += element;
        degrees.push(degree);
    }
    return degrees;    
}

function are_isomorphic(graph1, graph2) 
{
    if (graph1.length !== graph2.length || graph1[0].length !== graph2[0].length)
        return false;

    const degrees1 = calcDegrees(graph1);
    const degrees2 = calcDegrees(graph2);

    for (const vertex in graph1)
        if (degrees1[vertex] !== degrees2[vertex])
            return false;
    
    return true;
}

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
console.log(are_isomorphic(graph1, graph2)); // Output: true
console.log(are_isomorphic(graph1, graph3)); // Output: false
console.log(are_isomorphic(graph1, graph4)); // Output: false
console.log(are_isomorphic(graph4, graph5)); // Output: false
console.log(are_isomorphic(graph5, graph6)); // Output: false
