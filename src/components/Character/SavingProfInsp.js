import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { createCharacter } from '../../api/character'
// import CharForm form '../Form'
import Form from 'react-bootstrap/Form'
// import Select from 'react-select'

const SpiCreate = ({ character, setCharacter, event }) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Proficiency Bonus</h3>
        <p>
          Your character’s proficiency bonus is determined by their level. This
          proficiency modifier increases by one at levels 5, 9, 13, and 17. You
          add this bonus to any rolls for something that you have proficiency
          in. That means saving throws, skill checks, weapon attacks, and using
          tools that you are trained with.
        </p>
        <Form>
          <Form.Group className='mb-4' controlId='prof'>
            <Form.Label className='label'>Proficiency Bonus</Form.Label>
            <Form.Control
              value={character.prof}
              name='prof'
              type='prof'
              placeholder='Proficiency Bonus'
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  prof: event.target.value
                }))
              }
            />
          </Form.Group>

          <h3>Saving Throws</h3>
          <p>
            Saving throws are mostly the same as your ability modifiers, but two
            of these will get a bonus based on what class you have chosen.
          </p>

          <Form.Label className='label'>Saving Throws (choose 2)</Form.Label>
          <Form.Switch
            className='label'
            type='switch'
            name='strength'
            label='strength'
            checked={character.savingThrows.includes('+STR')}
            onChange={event => {
              const [oldStr, newStr] = event.target.checked
                ? ['-STR', '+STR']
                : ['+STR', '-STR']
              setCharacter(character => ({
                ...character,
                savingThrows: character.savingThrows.replace(oldStr, newStr)
              }))
            }}
          />
          <Form.Switch
            className='label'
            type='switch'
            name='dexterity'
            label='dexterity'
            checked={character.savingThrows.includes('+DEX')}
            onChange={event => {
              const [oldDex, newDex] = event.target.checked
                ? ['-DEX', '+DEX']
                : ['+DEX', '-DEX']
              setCharacter(character => ({
                ...character,
                savingThrows: character.savingThrows.replace(oldDex, newDex)
              }))
            }}
          />
          <Form.Switch
            className = 'label'
            type='switch'
            name='constitution'
            label='constitution'
            checked={character.savingThrows.includes('+CON')}
            onChange={event => {
              const [oldCon, newCon] = event.target.checked
                ? ['-CON', '+CON']
                : ['+CON', '-CON']
              setCharacter(character => ({
                ...character,
                savingThrows: character.savingThrows.replace(oldCon, newCon)
              }))
            }}
          />
          <Form.Switch
            className = 'label'
            type='switch'
            name='intelligence'
            label='intelligence'
            checked={character.savingThrows.includes('+INT')}
            onChange={event => {
              const [oldInt, newInt] = event.target.checked
                ? ['-INT', '+INT']
                : ['+INT', '-INT']
              setCharacter(character => ({
                ...character,
                savingThrows: character.savingThrows.replace(oldInt, newInt)
              }))
            }}
          />
          <Form.Switch
            className = 'label'
            type='switch'
            name='wisdom'
            label='wisdom'
            checked={character.savingThrows.includes('+WIS')}
            onChange={event => {
              const [oldWis, newWis] = event.target.checked
                ? ['-WIS', '+WIS']
                : ['+WIS', '-WIS']
              setCharacter(character => ({
                ...character,
                savingThrows: character.savingThrows.replace(oldWis, newWis)
              }))
            }}
          />
          <Form.Switch
            className = 'label'
            type='switch'
            name='charisma'
            label='charisma'
            checked={character.savingThrows.includes('+CHA')}
            onChange={event => {
              const [oldCha, newCha] = event.target.checked
                ? ['-CHA', '+CHA']
                : ['+CHA', '-CHA']
              setCharacter(character => ({
                ...character,
                savingThrows: character.savingThrows.replace(oldCha, newCha)
              }))
            }}
          />
        </Form>
      </div>
    </div>
  )
}

export default SpiCreate
