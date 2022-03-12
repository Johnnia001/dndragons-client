import React from 'react'

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const AbilityCreate = ({ character, setCharacter }) => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Ability Scores</h3>
        <p>
          Your character’s ability scores represent how well your character
          performs in six distinct areas
        </p>

        <Form>
          <FloatingLabel
            controlId='floatingSelectGrid'
            label='Strength'
          >
            <Form.Control
              as='select'
              type='strength'
              aria-label='Alignment'
              required
              value={character.strength}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  strength: event.target.value
                }))
              }
            >
              <option className='label'>Strength</option>
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
            </Form.Control>
          </FloatingLabel>

          <Form>
            <FloatingLabel controlId='floatingSelectGrid' label='Dexterity'>
              <Form.Control
                as='select'
                type='dexterity'
                aria-label='Alignment'
                required
                value={character.dexterity}
                onChange={event =>
                  setCharacter(character => ({
                    ...character,
                    dexterity: event.target.value
                  }))
                }
              >
                <option>Dexterity</option>
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
              </Form.Control>
            </FloatingLabel>
          </Form>
        </Form>

        <Form>
          <FloatingLabel controlId='floatingSelectGrid' label='Constitution'>
            <Form.Control
              as='select'
              type='constitution'
              aria-label='Alignment'
              required
              value={character.constitution}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  constitution: event.target.value
                }))
              }
            >
              <option>Constitution</option>
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
            </Form.Control>
          </FloatingLabel>
        </Form>

        <Form>
          <FloatingLabel controlId='floatingSelectGrid' label='Intelligence'>
            <Form.Control
              as='select'
              type='intelligence'
              aria-label='Alignment'
              required
              value={character.intelligence}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  intelligence: event.target.value
                }))
              }
            >
              <option>Intelligence</option>
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
            </Form.Control>
          </FloatingLabel>
        </Form>
        <Form>
          <FloatingLabel controlId='floatingSelectGrid' label='Wisdom'>
            <Form.Control
              as='select'
              type='wisdom'
              aria-label='Alignment'
              required
              value={character.wisdom}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  wisdom: event.target.value
                }))
              }
            >
              <option>Wisdom</option>
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
            </Form.Control>
          </FloatingLabel>
        </Form>

        <Form>
          <FloatingLabel controlId='floatingSelectGrid' label='Charisma'>
            <Form.Control
              as='select'
              type='charisma'
              aria-label='Alignment'
              required
              value={character.charisma}
              onChange={event =>
                setCharacter(character => ({
                  ...character,
                  charisma: event.target.value
                }))
              }
            >
              <option>Charisma</option>
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
            </Form.Control>
          </FloatingLabel>
        </Form>
      </div>
    </div>
  )
}

export default AbilityCreate
