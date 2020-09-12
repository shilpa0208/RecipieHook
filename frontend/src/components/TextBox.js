import React from 'react'

const textBoxCommonStyle = `
    appearance-none 
    border rounded
    py-2 px3
    leading-tight
    focus:outline-none focus:shadow-input
    text-black
    cursor-auto
    font-open-regular
`


const TextBox = (props) => {
    let { className, type, maxLenth, width, onChange, ...rest } = props
    className = className || ''
    type = type || 'text'
    width = width || 'w-full'

    const combinedClassName = `${textBoxCommonStyle} ${width} ${className}`.trim()


    return (
        <input
            type={type}
            maxLength={maxLenth}
            className={combinedClassName}
            onChange={onChange}
            {...rest}
        />
    )
}

export default TextBox