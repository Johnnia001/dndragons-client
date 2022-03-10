import React, { useState } from 'react'
import CharacterCreate from './Character/CharacterCreate'
import AbilityCreate from './Character/AbilityScore'
import { Navigate } from 'react-router-dom'
import { createCharacter } from '../api/character'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import {
  characterCreateSuccess,
  characterCreateFailure
} from './AutoDismissAlert/messages'

const CharForm = ({ user, setUser, msgAlert }) => {
  const [page, setPage] = useState(0)
  const [setShouldNavigate] = useState(false)
  const [character, setCharacter] = useState({
    name: '',
    level: '',
    exp: '',
    charClass: '',
    race: '',
    alignment: '',
    background: '',
    strength: ''
  })
  if (!user) {
    return <Navigate to='/' />
  }

  const onCharacterCreate = async event => {
    event.preventDefault()

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
      setCharacter('')
    }
  }
  if (shouldNavigate) {
    return <Navigate to={'/characters'} />
  }
  const FormTitles = ['Character Information', 'Ability Scores']

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CharacterCreate character={character} setCharacter={setCharacter} />
      )
    } else if (page === 1) {
      return <AbilityCreate character={character} setCharacter={setCharacter} />
    } else {
      return <h1>hi</h1>
    }
  }

  return (
    <div className='form'>
      <div className='progressbar'>
        <div
          style={{
            width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%'
          }}
        ></div>
      </div>
      <div className='form-container'>
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage(currPage => currPage - 1)
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                onCharacterCreate()
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
