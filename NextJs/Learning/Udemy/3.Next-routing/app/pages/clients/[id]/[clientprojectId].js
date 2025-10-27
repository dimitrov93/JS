import { useRouter } from 'next/router'
import React from 'react'


const SelectedProjectByClient = () => {
    const router = useRouter()

    console.log(router.query);
  return (
    <div>SelectedProjectByClient</div>
  )
}

export default SelectedProjectByClient