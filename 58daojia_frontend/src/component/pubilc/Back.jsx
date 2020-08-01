import React, { useCallback } from 'react';

export default function Back() {
    const onBack = useCallback(() => {
        window.history.back()
    })
    return (
        <svg 
        width="42" 
        height="42"
        onClick={onBack}>
            <polyline
                points="25,13 16,21 25,29"
                stroke="#000"
                strokeWidth="2"
                fill="none" />
        </svg>
    )
}