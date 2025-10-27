import { useRouter } from 'next/router';
import React from 'react'

const Clientsprojects = () => {
  const router = useRouter()

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectId]',
      query: { id: 'joe', clientprojectId: 'projectA'}
    })
  }
  return (
    <div>
      <h1>Clientsprojects</h1>
    <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  )
}

export default Clientsprojects