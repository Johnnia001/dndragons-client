import React, { useState, useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import { getOneCharacter, deleteCharacter } from '../../api/character'
import { Spinner } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import {
  characterDeleteSuccess,
  characterFindError
} from '../AutoDismissAlert/messages'

const Character = ({ user, msgAlert }) => {
  const [character, setCharacter] = useState(null)
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        await getOneCharacter(user, id).then(res => setCharacter(res.data.character))
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

  const onDeleteCharacter = async () => {
    try {
      await deleteCharacter(user, id).then(
        delete user.character,
        setShouldNavigate(true),
        msgAlert({
          heading: 'Character Deleted Successfully',
          message: characterDeleteSuccess,
          variant: 'success'
        })
      )
    } catch (error) {
      msgAlert({
        heading: 'Delete Character failed with error: ',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  if (character === null) {
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
    return (
      <>
        <h2>{character.name}</h2>
        <h4>Character</h4>
        <p>{character.about}</p>
        <Button onClick={onDeleteCharacter} variant='danger' type='button'>
          Delete Character
        </Button>
        <Link to={`/characters/${id}/edit`}>
          <Button variant='primary' type='submit'>
            Edit Character
          </Button>
        </Link>
      </>
    )
  }
}

export default Character
