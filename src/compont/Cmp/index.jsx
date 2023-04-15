import React from 'react'

export default function Cmp({data}) {
  return (
    <div style={data.style}>{data.value}</div>
  )
}
