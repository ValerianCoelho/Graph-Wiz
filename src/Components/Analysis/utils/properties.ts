export const calculateDensity = (nodeData: any, pathData: any) => {
    // Count the number of nodes
    const numNodes = Object.keys(nodeData).length;

    // Count the number of edges
    const numEdges = Object.keys(pathData).length;

    // Calculate maximum possible number of edges (for an undirected graph)
    const maxEdges = (numNodes * (numNodes - 1)) / 2;

    // Calculate density
    const density = numEdges / maxEdges;

    return density;
}

export const calculateIsolatedNodes = (nodeData: any, pathData: any) => {
    const nodeIDs = Object.keys(nodeData);
    const pathFromNodes = Object.values(pathData).map((path: any) => path.fromNodeID);
    const pathToNodes = Object.values(pathData).map((path: any) => path.toNodeID);
    const allPathNodes = [...pathFromNodes, ...pathToNodes];

    const isolatedNodes = nodeIDs.filter(nodeID => !allPathNodes.includes(nodeID));
    return isolatedNodes.length;
}

export const calculateSelfLoops = (pathData: any) => {
    const selfLoops = Object.values(pathData).filter((path: any) => path.fromNodeID === path.toNodeID);
    return selfLoops.length;
}

export const calculateNumberOfRegions = (nodeData: any, pathData: any) => {
    const numEdges = Object.keys(pathData).length;
    const numVertices = Object.keys(nodeData).length;
    return numEdges - numVertices + 2;
}