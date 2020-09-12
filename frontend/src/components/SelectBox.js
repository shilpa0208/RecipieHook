import React from 'react'


const selectBoxCommonStyle = `
    border-rounded
    py-2 px-3
    leading-tight
    cursor-auto
    font-open-regular
    focus:outline-none focus:shadow-input
`

const SelectBox = (props) => {
    let { onChange, className, children, disabled, width } = props

    className = className || ''
    width = width || 'w-full'
    const textColor = disabled ? '' : 'text-black'
    const cursorClass = disabled ? 'cursor-not-allowed' : 'cursor-auto'
    const striped = disabled ? 'striped' : ''
    
    const combinedClassName = `${selectBoxCommonStyle} ${width} ${textColor} ${cursorClass} ${striped} ${className}`.trim()

    return (
        <select
            className={combinedClassName}
            onChange={onChange}
            {...rest}    
        >
            {children}
        </select>
    )
}

export default SelectBox