import React from 'react'

const BadgeNiveau = ({score}) => {
    let label;
    let color;
    if (score > 90) {
        label = "Or";
        color = "gold";
    } else if (score > 60) {
        label = "Argent";
        color = "silver";
    } else {
        label = "Bronze";
        color = "peru";
    }
    return <span style={{ color }}>{label}</span>;
}

export default BadgeNiveau