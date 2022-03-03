import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { editCharacter } from '../../api/character'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  characterEditSuccess,
  characterEditFailure
} from '../AutoDismissAlert/messages'

const CharacterEdit = ({ user, msgAlert }) => {
  const [name, setName] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  const onCharacterEdit = async event => {
    event.preventDefault()

    try {
      await editCharacter(user, id, name, aboutMe)
      msgAlert({
        heading: 'Character Edit Success',
        message: characterEditSuccess,
        variant: 'success'
      })
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Character Edit failed with error: ' + error.message,
        message: characterEditFailure,
        variant: 'danger'
      })
      setName('')
      setAboutMe('')
    }
  }

  if (updated) {
    return <Navigate to={`/characters/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Your Character</h3>

        <Form onSubmit={onCharacterEdit}>
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
            <Form.Label>About Me</Form.Label>
            <Form.Control
              required
              value={aboutMe}
              type='aboutMe'
              placeholder='Tell us a bit about yourself'
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

export default CharacterEdit
