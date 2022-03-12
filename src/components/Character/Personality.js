import React from 'react'

import Form from 'react-bootstrap/Form'

const PersonalityCreate = ({ character, setCharacter }) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Personality Traits</h3>
        <h4>
          Part of the character creation process is figuring out what makes your
          character tick. What is their personality like? Who and what do they
          care about?
        </h4>

        <Form>
          <Form.Group className='mb-3' controlId='personality'>
            <Form.Label>Proficiencies</Form.Label>
            <Form.Control
              type='personality'
              name='personality'
              placeholder='Personality Traits'
              value={character.personality}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  personality: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='level'>
            <Form.Label>Ideals</Form.Label>
            <Form.Control
              required
              name='ideals'
              type='ideals'
              placeholder='Check with your DM what level you are starting at.'
              value={character.ideals}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  ideals: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exp'>
            <Form.Label>Bonds</Form.Label>
            <Form.Control
              required
              name='bonds'
              type='bonds'
              placeholder='Bonds'
              value={character.bonds}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  bonds: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exp'>
            <Form.Label>Flaws</Form.Label>
            <Form.Control
              required
              name='flaws'
              type='flaws'
              placeholder='Flaws'
              value={character.bonds}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  flaws: event.target.value
                }))
              }
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default PersonalityCreate
