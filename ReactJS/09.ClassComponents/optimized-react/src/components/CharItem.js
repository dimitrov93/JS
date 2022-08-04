import React from 'react'

export const CharItem = ({name, onClick}) => {
  return (
    <li onClick={() => onClick(name)}>
        {name}
    </li>
  )
}
