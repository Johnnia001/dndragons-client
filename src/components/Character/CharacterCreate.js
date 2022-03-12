import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { createCharacter } from '../../api/character'
// import CharForm form '../Form'
import Form from 'react-bootstrap/Form'
// // import Button from 'react-bootstrap/Button'
// import {
//   characterCreateSuccess,
//   characterCreateFailure
// } from '../AutoDismissAlert/messages'

const CharacterCreate = ({ character, setCharacter }) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Character Information</h3>

        <Form>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label className='label'>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Character Name'
              required
              value={character.name}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  name: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='level'>
            <Form.Label className='label'>Level</Form.Label>
            <Form.Control
              required
              name='level'
              type='level'
              placeholder='Check with your DM what level you are starting at.'
              value={character.level}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  level: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exp'>
            <Form.Label className='label'>Experience Points</Form.Label>
            <Form.Control
              required
              name='exp'
              type='exp'
              placeholder='Check with your DM how much EXP you are starting at.'
              value={character.exp}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  exp: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Control
            aria-label='charClass'
            as='select'
            required
            name='charClass'
            type='charClass'
            value={character.charClass}
            onChange={event =>
              setCharacter(character => ({
                ...character,
                charClass: event.target.value
              }))
            }
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
            type='race'
            value={character.race}
            onChange={event =>
              setCharacter(character => ({
                ...character,
                race: event.target.value
              }))
            }
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
            type='alignment'
            aria-label='Alignment'
            value={character.alignment}
            onChange={event =>
              setCharacter(character => ({
                ...character,
                alignment: event.target.value
              }))
            }
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
            <Form.Label className='label'>Background</Form.Label>
            <Form.Control
              required
              name='background'
              type='background'
              placeholder='Gives you special bonuses based on your choice'
              value={character.background}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  background: event.target.value
                }))
              }
            />
          </Form.Group>
          {/* <Button variant='primary' type='submit'>
            Next
  </Button> */}
        </Form>
      </div>
    </div>
  )
}

export default CharacterCreate
