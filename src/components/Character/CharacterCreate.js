import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createCharacter } from '../../api/character'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  characterCreateSuccess,
  characterCreateFailure
} from '../AutoDismissAlert/messages'

const CharacterCreate = ({ user, setUser, msgAlert }) => {
  const [name, setName] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)
  // TODO: FIX THIS SO IT DOESNT LOG YOU OUT
  //
  //
  /* if (!user) {
    return <Navigate to='/' />
  } */

  const onCharacterCreate = async event => {
    event.preventDefault()

    try {
      await createCharacter(user, name, aboutMe).then(res => {
        user.character = res.data.character
      })
      msgAlert({
        heading: 'Character Creation Success',
        message: characterCreateSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Character Creation failed with error: ' + error.message,
        message: characterCreateFailure,
        variant: 'danger'
      })
      setName('')
      setAboutMe('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Your Character</h3>

        <Form onSubmit={onCharacterCreate}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Character Name'
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='aboutMe'>
            <Form.Label>Back Story</Form.Label>
            <Form.Control
              required
              value={aboutMe}
              type='aboutMe'
              placeholder='Does not have to be sad'
              onChange={event => setAboutMe(event.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CharacterCreate
