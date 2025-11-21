import React from 'react'

const Card = ({ header, actions, footer, children }) => {
    return (
        <div className="card">
            {(header || actions) && (
                <div className="card-header">
                    <div className="left">{header}</div>
                    <div className="right">{actions}</div>
                </div>
            )}
            <div className="card-body">
                {children}
            </div>
            {footer && (
                <div className="card-footer">
                    {footer}
                </div>
            )}
        </div>
    )
}

export default Card