import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createAbility } from '../../api/ability'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {
  abilityCreateSuccess,
  abilityCreateFailure
} from '../AutoDismissAlert/messages'

const AbilityCreate = ({ user, setUser, msgAlert }) => {
  const [strength, setStrength] = useState('')
  /* const [dexterity, setDexterity] = useState('')
  const [constitution, setConstitution] = useState('')
  const [intelligence, setIntelligence] = useState('')
  const [wisdom, setWisdom] = useState('')
  const [charisma, setCharisma] = useState('') */
  const [shouldNavigate, setShouldNavigate] = useState(false)
  if (!user) {
    return <Navigate to='/' />
  }

  const onAbilityCreate = async event => {
    event.preventDefault()

    try {
      await createAbility(
        user,
        strength
        /* dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma */
      ).then(res => {
        user.ability = res.data.ability
      })
      msgAlert({
        heading: 'Ability Creation Success',
        message: abilityCreateSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Ability Creation failed with error: ' + error.message,
        message: abilityCreateFailure,
        variant: 'danger'
      })
      setStrength('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Ability Scores</h3>
        <h2>
          Your character’s ability scores represent how well your character
          performs in six distinct areas
        </h2>

        <Form onSubmit={onAbilityCreate}>
          <FloatingLabel
            controlId='floatingSelectGrid'
            label='Works with selects'
          >
            <Form.Select aria-label='Floating label select example'>
              <option>Strength</option>
              <option value='Ability Score: 2-3 Modifier: -4'>
                Ability Score: 2-3 Modifier: -4
              </option>
              <option value='Ability Score: 4-5 Modifier: -3'>
                Ability Score: 4-5 Modifier: -3
              </option>
              <option value='Ability Score: 6-7 Modifier: -2'>
                Ability Score: 6-7 Modifier: -2
              </option>
              <option value='Ability Score: 8-9 Modifier: -1'>
                Ability Score: 8-9 Modifier: -1
              </option>
              <option value='Ability Score: 10-11 Modifier: +0'>
                Ability Score: 10-11 Modifier: +0
              </option>
              <option value='Ability Score: 12-13 Modifier: +1'>
                Ability Score:Ability Score: 12-13 Modifier: +1
              </option>
              <option value='Ability Score: 14-15 Modifier: +2'>
                Ability Score: 14-15 Modifier: +2
              </option>
              <option value='Ability Score: 16-17 Modifier: +3'>
                Ability Score: 16-17 Modifier: +3
              </option>
              <option value='Ability Score: 18-19 Modifier: +4'>
                Ability Score: 18-19 Modifier: +4
              </option>
              <option value='Ability Score: 20+ Modifier: +5'>
                Ability Score: 20+ Modifier: +5
              </option>
              <Form.Control
                type='strength'
                required
                value={strength}
                onChange={event => setStrength(event.target.value)}
              />
            </Form.Select>
          </FloatingLabel>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AbilityCreate
