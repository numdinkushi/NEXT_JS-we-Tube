import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const HomeLayoutComponent = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className="p-4 bg-red-600">Test tube</div>
            {children}
        </div>
    );
}

