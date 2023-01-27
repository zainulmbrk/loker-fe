import React from "react";

const Card = ({ className = "", children }) => {
    return (
        <div className={`p-4 bg-white shadow-md ${className}`}>
            {children}
        </div>
    );
};

export default Card;
