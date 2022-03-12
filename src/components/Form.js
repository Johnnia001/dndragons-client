import React, { useState } from 'react'
import CharacterCreate from './Character/CharacterCreate'
import AbilityCreate from './Character/AbilityScore'
import { Navigate } from 'react-router-dom'
import { createCharacter } from '../api/character'
import SpiCreate from './Character/SavingProfInsp'

import {
  characterCreateSuccess,
  characterCreateFailure
} from './AutoDismissAlert/messages'

const CharForm = ({ user, setUser, msgAlert }) => {
  const emptyCharacter = {
    name: '',
    level: '',
    exp: '',
    charClass: '',
    race: '',
    alignment: '',
    background: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    prof: '',
    savingThrows: '-STR-DEX-CON-INT-WIS-CHA'
    // skills: ''
  }

  const [page, setPage] = useState(0)
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const [character, setCharacter] = useState(Object.assign({}, emptyCharacter))
  if (!user) {
    return <Navigate to='/' />
  }

  const onCharacterCreate = async () => {
    try {
      await createCharacter(user, character).then(res => {
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
      setCharacter(Object.assign({}, emptyCharacter))
    }
  }
  if (shouldNavigate) {
    return <Navigate to={'/characters'} />
  }
  const FormTitles = [
    'Character Information',
    'Ability Scores',
    'Saving Throws & Proficiency'
  ]

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CharacterCreate character={character} setCharacter={setCharacter} />
      )
    } else if (page === 1) {
      return <AbilityCreate character={character} setCharacter={setCharacter} />
    } else if (page === 2) {
      return <SpiCreate character={character} setCharacter={setCharacter} />
    } else {
      return <h1>hi</h1>
    }
  }

  return (
    <div className='form'>
      <div>
        <div className='form-container'>
          <div className='flex-container'>
            <div className='header'>
              <h1>{FormTitles[page]}</h1>;
            </div>
            <div className='dice20'>
              <img className='dice' src={require('./img/d202.gif').default} />
            </div>
          </div>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
          <button
            className='start-btn'
            disabled={page === 0}
            onClick={() => {
              setPage(currPage => currPage - 1)
            }}
          >
            Prev
          </button>
          <button
            className='start-btn'
            onClick={async event => {
              if (page === FormTitles.length - 1) {
                await onCharacterCreate()
                console.log(character)
              } else {
                setPage(currPage => currPage + 1)
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharForm
