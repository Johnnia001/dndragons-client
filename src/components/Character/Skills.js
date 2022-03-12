import React from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SkillsCreate = ({ character, setCharacter }) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Skills</h3>
        <h4>
          DnD has 18 skills, which are each used to do different things in the
          game. You’ll likely be very good at some of these and not particularly
          useful with others. Your skills are determined by your ability
          modifiers and proficiency bonus.
        </h4>

        <Form>
          <InputGroup className='mb-3'>
            <InputGroup.Checkbox aria-label='Checkbox for following text input' />
            <Form.Control
              type='skills'
              name='skills'
              placeholder='Skills'
              value={character.skills}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  skills: event.target.value
                }))
              }
            />
          </InputGroup>
        </Form>
      </div>
    </div>
  )
}

export default SkillsCreate
