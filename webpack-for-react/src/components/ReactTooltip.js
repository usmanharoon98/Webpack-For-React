import React from 'react'
import ReactTooltip from 'react-tooltip';

export const Tooltip = () => {
    return (
        <ReactTooltip
            effect="solid"
            delayHide= {100}
            delayShow= {300}
            arrowColor="transparent"
            place="bottom"
        />
    )
}