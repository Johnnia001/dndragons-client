import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteCharacter, getOneCharacter } from '../../api/character'
import { characterDeleteSuccess } from '../AutoDismissAlert/messages'

const Character = ({ user, msgAlert }) => {
  const [character, setCharacter] = useState(null)
  const [deleted] = useState(false)
  const { id } = useParams()
  const [shouldNavigate, setShouldNavigate] = useState(false)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await getOneCharacter(id, user)
        setCharacter(res.data.character)
      } catch (error) {
        msgAlert({
          heading: 'Character failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
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

  // 3 states:
  // If character is `null`, we are loading
  if (!character) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/characters' />
  } else {
    // We have a character, display it!
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h2>{character.name}</h2>
          <p>Level: {character.level}</p>
          <p>EXP:{character.exp}</p>
          <p>{character.charClass}</p>
          <p>{character.race}</p>
          <p>{character.alignment}</p>
          <p>{character.background}</p>
          <p>Ability Scores</p>
          <p>Strength: {character.strength}</p>
          <p>Dexterity: {character.dexterity}</p>
          <p>Constitution: {character.constitution}</p>
          <p>Intelligence: {character.intelligence}</p>
          <p>Wisdom: {character.wisdom}</p>
          <p>Charisma: {character.charisma}</p>
          <p>Proficiency: {character.prof}</p>
          <p>Saving Throws:{character.savingThrows}</p>

          <Button
            className='start-btn'
            onClick={onDeleteCharacter}
          >
            Delete Character
          </Button>
          <Link to={`/characters/${id}/edit`}>
            <Button className='start-btn' type='submit'>
              Update Character
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Character
