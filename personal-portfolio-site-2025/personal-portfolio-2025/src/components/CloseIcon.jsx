// for CloseIcon.jsx
import React from 'react';

const CloseIcon = ({ size = 32, color = 'currentColor' }) => {
    return (
        <svg viewBox="0 0 100 100" width={size} height={size}>
            {/* First bar rotated 45 degrees */}
            <rect
                x="10"
                y="42.5"
                width="80"
                height="15"
                rx="8"
                fill={color}
                transform="rotate(45 50 50)"
            />
            {/* Second bar rotated -45 degrees */}
            <rect
                x="10"
                y="42.5"
                width="80"
                height="15"
                rx="8"
                fill={color}
                transform="rotate(-45 50 50)"
            />
        </svg>
    );
};

export default CloseIcon;