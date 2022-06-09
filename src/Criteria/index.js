import React, { useState } from "react";
import ReactFlow, {
    useNodes, useEdges, useNodesState, useEdgesState, addEdge,
    applyNodeChanges, applyEdgeChanges, Background
} from "react-flow-renderer";

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Input Node' },
        sourcePosition: "right",
        position: { x: 100, y: 200 },
    },
    {
        id: '10',
        type: 'default',
        data: { label: 'String Contains' },
        sourcePosition: "right",
        targetPosition: "left",
        position: { x: 400, y: 300 },
    },
    {
        id: '2',
        type: 'output',
        data: { label: 'Output Node' },
        targetPosition: "left",
        position: { x: 700, y: 400 },
    },
];

const initialEdges = [
    { id: 'e1-10', source: '1', target: '10'},
    { id: 'e10-2', source: '10', target: '2'},
];

function Criteria(props) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const handleNodesChange = (changes) => {
        setNodes((nds) => applyNodeChanges(changes, nds), [setNodes]);
    }

    const handleEdgesChange = (changes) => {
        setEdges((eds) => applyEdgeChanges(changes, eds), [setEdges]);
    }

    const handleConnect = (connection) => {
        setEdges((eds) => addEdge(connection, eds), [setEdges]);
    }

    return (
        <div
        style={{
            width: "calc(100vw)",
            height: "calc(100vh)"
        }}
        >
            <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNodesChange}
            onEdgesChange={handleEdgesChange}
            onConnect={handleConnect}
            >
                <Background />
            </ReactFlow>
        </div>
    );
}

export default Criteria;