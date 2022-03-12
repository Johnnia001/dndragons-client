import React, { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { indexCharacters } from '../../api/character'
import { Spinner } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import { characterFindError } from '../AutoDismissAlert/messages'

const Characters = ({ user, msgAlert }) => {
  const [characters, setCharacter] = useState(null)
  const [shouldNavigate, setShouldNavigate] = useState(false)

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        await indexCharacters(user).then(res =>
          setCharacter(res.data.characters)
        )
      } catch (error) {
        msgAlert({
          heading: 'Finding Character failed with error: ',
          message: characterFindError,
          variant: 'danger'
        })
      }
    }
    fetchCharacter()
  }, [])

  // const onDeleteCharacter = async () => {
  //   try {
  //     await deleteCharacter(user, id).then(
  //       delete user.character,
  //       setShouldNavigate(true),
  //       msgAlert({
  //         heading: 'Character Deleted Successfully',
  //         message: characterDeleteSuccess,
  //         variant: 'success'
  //       })
  //     )
  //   } catch (error) {
  //     msgAlert({
  //       heading: 'Delete Character failed with error: ',
  //       message: error.message,
  //       variant: 'danger'
  //     })
  //   }
  // }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  if (characters === null) {
    return (
      <>
        <h4>Fetching Character</h4>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
        <Button
          onClick={() => setShouldNavigate(true)}
          variant='primary'
          type='button'
        >
          Return Home
        </Button>
      </>
    )
  } else {
    const charactersList = characters.map(character => (
      <li key={character.id}>
        <Link to={`/characters/${character.id}`}>{character.name}</Link>
      </li>
    ))
    return (
      <>
        <h1>Characters</h1>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <ul>{charactersList}</ul>
        </div>
      </>
    )
  }
}

export default Characters
