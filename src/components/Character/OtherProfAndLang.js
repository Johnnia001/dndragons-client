import React from 'react'

import Form from 'react-bootstrap/Form'

const ProfLangCreate = ({ character, setCharacter }) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Other Proficiencies</h3>

        <Form>
          <Form.Group className='mb-3' controlId='proficiencies'>
            <Form.Label>Proficiencies</Form.Label>
            <Form.Control
              type='proficiencies'
              name='proficiencies'
              placeholder='Proficiencies'
              value={character.proficiencies}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  proficiencies: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='level'>
            <Form.Label>Language</Form.Label>
            <Form.Control
              required
              name='language'
              type='language'
              placeholder='Check with your DM what level you are starting at.'
              value={character.language}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  language: event.target.value
                }))
              }
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exp'>
            <Form.Label>Expertise</Form.Label>
            <Form.Control
              required
              name='expertise'
              type='expertise'
              placeholder='Check with your DM how much EXP you are starting at.'
              value={character.expertise}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  expertise: event.target.value
                }))
              }
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default ProfLangCreate
