import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { editCharacter, getOneCharacter } from '../../api/character'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  characterEditSuccess,
  characterEditFailure
} from '../AutoDismissAlert/messages'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const CharacterEdit = ({ user, msgAlert }) => {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('')
  const [exp, setExp] = useState('')
  const [charClass, setCharClass] = useState('')
  const [race, setRace] = useState('')
  const [alignment, setAlignment] = useState('')
  const [background, setBackground] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()
  const [character, setCharacter] = useState({
    savingThrows: {
      strength: false,
      dexterity: false
    }
  })
  const [strength, setStrength] = useState('')
  const [dexterity, setDexterity] = useState('')
  const [constitution, setConstitution] = useState('')
  const [intelligence, setIntelligence] = useState('')
  const [wisdom, setWisdom] = useState('')
  const [charisma, setCharisma] = useState('')
  const [savingThrows, setSavingThrows] = useState({
    strength: false,
    dexterity: false
  })

  if (!user) {
    return <Navigate to='/' />
  }
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await getOneCharacter(id, user)
        setCharacter(res.data.character)
        setName(character.name)
      } catch (error) {
        msgAlert({
          heading: 'Character failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const onCharacterEdit = async event => {
    event.preventDefault()

    try {
      await editCharacter(
        user,
        id,
        name,
        level,
        exp,
        charClass,
        race,
        alignment,
        background,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        character.savingThrows
      )
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
      setLevel('')
      setExp('')
      setCharClass('')
      setRace('')
      setAlignment('')
      setBackground('')
      setStrength('')
      setDexterity('')
      setConstitution('')
      setIntelligence('')
      setWisdom('')
      setCharisma('')
      setSavingThrows({
        strength: false,
        dexterity: false
      })
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
              name='name'
              placeholder={character.name}
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='level'>
            <Form.Label>Level</Form.Label>
            <Form.Control
              value={level}
              name='level'
              type='level'
              placeholder={character.level}
              onChange={event => setLevel(event.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='exp'>
            <Form.Label>Experience Points</Form.Label>
            <Form.Control
              value={exp}
              name='exp'
              type='exp'
              placeholder={character.exp}
              onChange={event => setExp(event.target.value)}
            />
          </Form.Group>
          <Form.Control
            aria-label='charClass'
            as='select'
            name='charClass'
            value={charClass}
            type='charClass'
            onChange={event => setCharClass(event.target.value)}
          >
            <option>{character.charClass}</option>
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
            as='select'
            name='race'
            value={race}
            type='race'
            onChange={event => setRace(event.target.value)}
          >
            <option>{character.race}</option>
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
            as='select'
            name='alignment'
            value={alignment}
            type='alignment'
            onChange={event => setAlignment(event.target.value)}
            aria-label='Alignment'
          >
            <option>{character.alignment}</option>
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
              value={background}
              name='background'
              type='background'
              placeholder={character.background}
              onChange={event => setBackground(event.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <h3>Ability Scores</h3>
          <FloatingLabel controlId='floatingSelectGrid' label='Strength'>
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
            </Form.Control>
          </FloatingLabel>
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
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <h3>Saving Throws</h3>
          <Form.Label>Saving Throws</Form.Label>
          <Form.Switch
            type='switch'
            name='strength'
            label='strength'
            checked={savingThrows.strength}
            onChange={event =>
              setSavingThrows({
                ...savingThrows,
                strength: event.target.checked
              })
            }
          />
          <Form.Switch
            type='switch'
            name='dexterity'
            label='dexterity'
            checked={savingThrows.dexterity}
            onChange={event =>
              setSavingThrows({
                ...savingThrows,
                dexterity: event.target.checked
              })
            }
          />
          ;
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CharacterEdit
