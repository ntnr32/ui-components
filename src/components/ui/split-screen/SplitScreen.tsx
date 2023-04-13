import React, { Children } from 'react'

interface SplitScreenProps {
    leftWidth: number;
    rightWidth: number;
    className?: string;
    children: React.ReactNode
}

const SplitScreen: React.FC<SplitScreenProps> = ({ leftWidth, rightWidth, className, children }) => {

    const [left, right] = Children.toArray(children);

    return (
        <div className={`flex w-full ${className}`}>
            <div style={{ flex: `${leftWidth}` }}>{left}</div>
            <div style={{ flex: `${rightWidth}` }}>{right}</div>
        </div>
    )
}

export default SplitScreen