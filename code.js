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
