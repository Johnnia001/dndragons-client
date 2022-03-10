import React, { useState } from 'react'
import CharacterCreate from './components/Character/CharacterCreate'
import AbilityCreate from './components/Character/AbilityScore'

const Pages = ({ user, setUser }) => {
  const [page, setPage] = useState(1)
  //  const [data, setData] = useState({
  //     user: {},
  //     name: {},
  //     level: {},
  //     exp: {},
  //     charClass: {},
  //     race: {},
  //     alignment: {},
  //     background: {},
  //     strength: {}
  //   })

  const goNextPage = () => {
    if (page === 2) return
    setPage(page => page + 1)
  }

  //   let updateData (type, newData) {
  //     setData(data => {
  //       return { ...data, [type]: newData }
  //     })
  //   }

  //   function submit () {
  //     fetch('/api/form', { method: 'POST', body: JSON.stringify(data) })
  //   }

  return (
    <div name='Pages'>
      {/* the progress bar goes here */}
      <div>
        <progress max='2' value={page} />
      </div>
      {/* the content goes here */}
      <div>
        {page === 1 && <CharacterCreate />}
        {page === 2 && <AbilityCreate />}
      </div>
      {page !== 2 && <button onClick={goNextPage}>Go Next</button>}
      {/* page === 2 && (
        /* <button type='submit' onClick={submit}>
          Submit
      </button> */}
    </div>
  )
}

export default Pages
