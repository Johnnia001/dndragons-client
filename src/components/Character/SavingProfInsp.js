import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { createCharacter } from '../../api/character'
// import CharForm form '../Form'
import Form from 'react-bootstrap/Form'
// import Select from 'react-select'

const SpiCreate = ({ character, setCharacter, event }) => {
  // const options = [
  //   { value: 'strength', label: 'Strength' },
  //   { value: 'dexterity', label: 'Constitution' },
  //   { value: 'intelligence', label: 'Intelligence' },
  //   { value: 'wisdom', label: 'wisdom' },
  //   { value: 'charisma', label: 'Charisma' }
  // ]

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Saving Throws</h3>
        <h4>
          Saving throws are mostly the same as your ability modifiers, but two
          of these will get a bonus based on what class you have chosen.
        </h4>

        <Form>
          <Form.Label>Saving Throws</Form.Label>
          <Form.Switch
            type='switch'
            name='strength'
            label='strength'
            onChange={event =>
              setCharacter(character => ({
                ...character,
                savingThrows: {
                  ...character.savingThrows,
                  strength: event.target.checked
                }
              }))
            }
          />
          <Form.Switch
            type='switch'
            name='dexterity'
            label='dexterity'
            onChange={event => {
              setCharacter(character => ({
                ...character,
                savingThrows: {
                  ...character.savingThrows,
                  dexterity: event.target.checked
                }
              }))
            }}
          />
        </Form>
      </div>
    </div>
  )
}

export default SpiCreate
