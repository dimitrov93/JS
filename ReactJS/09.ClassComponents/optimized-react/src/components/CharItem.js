import React, { memo } from 'react'

const CharItem = ({name, onClick}) => {
  return (
    <li onClick={() => onClick(name)}>
        {name}
    </li>
  )
}

export default memo(CharItem)