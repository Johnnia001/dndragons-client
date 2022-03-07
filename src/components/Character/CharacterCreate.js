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
  const [level, setLevel] = useState('')
  const [exp, setExp] = useState('')
  const [charClass, setCharClass] = useState('')
  const [race, setRace] = useState('')
  const [alignment, setAlignment] = useState('')
  const [background, setBackground] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  if (!user) {
    return <Navigate to='/' />
  }

  const onCharacterCreate = async event => {
    event.preventDefault()

    try {
      await createCharacter(
        user,
        name,
        level,
        exp,
        charClass,
        race,
        alignment,
        background
      ).then(res => {
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
      setLevel('')
      setExp('')
      setCharClass('')
      setRace('')
      setAlignment('')
      setBackground('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/characters/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Character Information</h3>

        <Form onSubmit={onCharacterCreate}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Character Name'
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='level'>
            <Form.Label>Level</Form.Label>
            <Form.Control
              required
              value={level}
              name='level'
              type='level'
              placeholder='Check with your DM what level you are starting at.'
              onChange={event => setLevel(event.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exp'>
            <Form.Label>Experience Points</Form.Label>
            <Form.Control
              required
              value={exp}
              name='exp'
              type='exp'
              placeholder='Check with your DM how much EXP you are starting at.'
              onChange={event => setExp(event.target.value)}
            />
          </Form.Group>
          <Form.Control
            aria-label='charClass'
            as='select'
            required
            name='charClass'
            value={charClass}
            type='charClass'
            onChange={event => setCharClass(event.target.value)}
          >
            <option>Class ▿</option>
            <option value='Artificer'>Artificer</option>
            <option value='Barbarian'>Barbarian</option>
            <option value='Bard'>Bard</option>
            <option value='Blood Hunter'>Blood Hunter</option>
            <option value='Cleric'>Cleric</option>
            <option value='Druid'>Druid</option>
            <option value='Fighter'>Fighter</option>
            <option value='Monk'>Monk</option>
            <option value='Paladin'>Paladin</option>
            <option value='Ranger'>Ranger</option>
            <option value='Rogue'>Rogue</option>
            <option value='Sorcerer'>Sorcerer</option>
            <option value='Warlock'>Warlock</option>
            <option value='Wizard'>Wizard</option>
          </Form.Control>
          <Form.Control
            aria-label='Race'
            required
            as='select'
            name='race'
            value={race}
            type='race'
            onChange={event => setRace(event.target.value)}
          >
            <option>Race ▿</option>
            <option value='Dragon Born'>Dragon Born</option>
            <option value='Dwarf'>Dwarf</option>
            <option value='Elf'>Elf</option>
            <option value='Gnome'>Gnome</option>
            <option value='Half Elf'>Half Elf</option>
            <option value='Halfling'>Halfling</option>
            <option value='Half-Orc'>Half-Orc</option>
            <option value='Human'>Human</option>
            <option value='Tiefling'>Tiefling</option>
          </Form.Control>

          <Form.Control
            required
            as='select'
            name='alignment'
            value={alignment}
            type='alignment'
            onChange={event => setAlignment(event.target.value)}
            aria-label='Alignment'
          >
            <option>Alignment ▿</option>
            <option value='Lawful Good'>Lawful Good</option>
            <option value='Neutral Good'>Neutral Good</option>
            <option value='Chaotic Good'>Chaotic Good</option>
            <option value='Lawful Neutral'>Lawful Neutral</option>
            <option value='True Neutral'>True Neutral</option>
            <option value='Chaotic Neutral'>Chaotic Neutral</option>
            <option value='Lawful Evil'>Lawful Evil</option>
            <option value='Neutral Evil'>Neutral EVil</option>
            <option value='Chaotic Evil'>Chaotic Evil</option>
            <option value='Unaligned'>Unaligned</option>
          </Form.Control>
          <Form.Group className='mb-4' controlId='background'>
            <Form.Label>Background</Form.Label>
            <Form.Control
              required
              value={background}
              name='background'
              type='background'
              placeholder='Gives you special bonuses based on your choice'
              onChange={event => setBackground(event.target.value)}
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
