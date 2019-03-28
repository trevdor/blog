import React from 'react'

export function Excerpt({ children }) {
  return (
    <div
      style={{
        borderLeft: '3px solid gray',
        marginBottom: '2em',
        paddingLeft: '2em',
      }}
    >
      <span
        style={{
          fontVariant: 'italic',
        }}
      >
        {children}
      </span>
    </div>
  )
}

export default Excerpt
