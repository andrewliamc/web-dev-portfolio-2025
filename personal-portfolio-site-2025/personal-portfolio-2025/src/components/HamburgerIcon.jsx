import React from 'react';

/**
 * A simple "three bars" icon with rounded edges.
 * Adjust the `size` and `color` props as needed.
 */
const HamburgerIcon = ({ size = 32, color = 'currentColor' }) => {
    return (
        <svg
            viewBox="0 0 100 70"
            width={size}
            height={size}
            fill={color}
        >
            {/* Each bar is a rectangle with a rounded corner radius (rx) */}
            <rect width="100" height="15" rx="8"></rect>
            <rect x="20" y="30" width="80" height="15" rx="8"></rect>
            <rect x="10" y="60" width="90" height="15" rx="8"></rect>
        </svg>
    );
};

export default HamburgerIcon;