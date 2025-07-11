import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const treeData = [
  {
    id: '1',
    label: 'Website',
    children: [
      { id: '1.1', label: 'Home', color: 'green' },
      { id: '1.2', label: 'Pricing', color: 'green' },
      { id: '1.3', label: 'About us', color: 'green' },
      {
        id: '1.4',
        label: 'Blog',
        children: [
          { id: '1.4.1', label: 'Announcements', color: 'blue' },
          { id: '1.4.2', label: 'April lookahead', color: 'blue' },
          { id: '1.4.3', label: "What's new", color: 'blue' },
          { id: '1.4.4', label: 'Meet the team', color: 'blue' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Store',
    children: [
      { id: '2.1', label: 'All products', color: 'green' },
      {
        id: '2.2',
        label: 'Categories',
        children: [
          { id: '2.2.1', label: 'Gadgets', color: 'blue' },
          { id: '2.2.2', label: 'Phones', color: 'blue' },
          { id: '2.2.3', label: 'Wearables', color: 'blue' },
        ],
      },
      { id: '2.3', label: 'Bestsellers', color: 'green' },
      { id: '2.4', label: 'Sales', color: 'green' },
    ],
  },
  { id: '4', label: 'Contact', color: 'blue' },
  { id: '5', label: 'Help', color: 'blue' },
];

function Dot({ color }) {
  const className =
    color === 'green'
      ? 'bg-green-500'
      : color === 'blue'
      ? 'bg-blue-500'
      : 'bg-gray-400';
  return <span className={`w-2 h-2 rounded-full mr-2 ${className}`}></span>;
}

function TreeNode({ node }) {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const animation = useSpring({
    opacity: open ? 1 : 0,
    height: open ? 'auto' : 0,
    overflow: 'hidden',
    config: { tension: 240, friction: 22 },
  });

  return (
    <div className="pl-4">
      <div
        className="flex items-center cursor-pointer py-1 hover:bg-gray-100 rounded-sm"
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren && (
          <span className="mr-2 text-xs text-gray-500">{open ? '▼' : '➤'}</span>
        )}
        {node.color && <Dot color={node.color} />}
        <span className="text-sm text-gray-800">{node.label}</span>
      </div>

      {hasChildren && (
        <animated.div style={animation}>
          <div className="ml-4 border-l border-gray-200 pl-2">
            {node.children.map(child => (
              <TreeNode key={child.id} node={child} />
            ))}
          </div>
        </animated.div>
      )}
    </div>
  );
}

export default function TreeView() {
  return (
    <div className="w-full sm:w-full md:w-full md:h-[610px] lg:h-[610px] xl:h-auto  p-4 bg-white border rounded shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Product Tree</h2>
      {treeData.map(item => (
        <TreeNode key={item.id} node={item} />
      ))}
    </div>
  );
}
