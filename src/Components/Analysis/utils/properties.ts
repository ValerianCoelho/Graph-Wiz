interface NodeData {
    [key: string]: {
        componentType: string;
        coord: { x: number; y: number };
        label: string;
    };
}

interface PathData {
    [key: string]: {
        componentType: string;
        direction: string;
        fromNodeID: string;
        toNodeID: string;
        weight: number;
    };
}
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


export const isEulerian = (nodeData: NodeData, pathData: PathData) => {
    // Create a map to store the degree of each node
    const degrees: { [nodeID: string]: number } = {};

    // Iterate over pathData to count the degree of each node
    Object.values(pathData).forEach(path => {
        degrees[path.fromNodeID] = (degrees[path.fromNodeID] || 0) + 1;
        degrees[path.toNodeID] = (degrees[path.toNodeID] || 0) + 1;
    });

    // Check if the graph is connected
    const visited: { [nodeID: string]: boolean } = {};
    const dfs = (nodeID: string) => {
        visited[nodeID] = true;
        for (const pathID of Object.keys(pathData)) {
            const path = pathData[pathID];
            if (path.fromNodeID === nodeID && !visited[path.toNodeID]) {
                dfs(path.toNodeID);
            }
            if (path.toNodeID === nodeID && !visited[path.fromNodeID]) {
                dfs(path.fromNodeID);
            }
        }
    };

    dfs(Object.keys(nodeData)[0]); // Start DFS from an arbitrary node

    const isConnected = Object.keys(nodeData).every(nodeID => visited[nodeID]);

    // Check if all vertices have even degree
    const isEvenDegree = Object.values(degrees).every(degree => degree % 2 === 0);

    // Return true if the graph is connected and all vertices have even degree
    return isConnected && isEvenDegree;
}

export const isHamiltonian = (nodeData: NodeData, pathData: PathData) => {
    const visited: { [nodeID: string]: boolean } = {};
    const path: string[] = [];

    const dfs = (currentNode: string) => {
        visited[currentNode] = true;
        path.push(currentNode);

        if (path.length === Object.keys(nodeData).length) {
            // Check if the path forms a Hamiltonian cycle
            const firstNode = path[0];
            const lastNode = path[path.length - 1];
            for (const edgeID of Object.keys(pathData)) {
                const edge = pathData[edgeID];
                if (
                    (edge.fromNodeID === lastNode && edge.toNodeID === firstNode) ||
                    (edge.fromNodeID === firstNode && edge.toNodeID === lastNode)
                ) {
                    return true;
                }
            }
        }

        for (const edgeID of Object.keys(pathData)) {
            const edge = pathData[edgeID];
            if (edge.fromNodeID === currentNode && !visited[edge.toNodeID]) {
                if (dfs(edge.toNodeID)) {
                    return true;
                }
            }
            if (edge.toNodeID === currentNode && !visited[edge.fromNodeID]) {
                if (dfs(edge.fromNodeID)) {
                    return true;
                }
            }
        }

        // Backtrack
        visited[currentNode] = false;
        path.pop();

        return false;
    };

    // Start DFS from each node
    for (const nodeID of Object.keys(nodeData)) {
        if (dfs(nodeID)) {
            return true;
        }
    }

    return false;
}