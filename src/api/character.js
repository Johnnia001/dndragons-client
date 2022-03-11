import axios from 'axios'
import apiUrl from '../apiConfig'

export const indexCharacters = user => {
  return axios.get(apiUrl + '/characters/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getOneCharacter = (id, user) => {
  return axios.get(`${apiUrl}/characters/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
export const createCharacter = (user, character) => {
  console.log(character)
  return axios.post(
    `${apiUrl}/characters/create/`,
    {
      character
    },

    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const editCharacter = (
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
  savingThrows
) => {
  const charDetails = {
    user,
    savingThrows
  }
  // if ( !== '') {
  // charDetails. =
  //     }

  if (name !== '') {
    charDetails.name = name
  }
  if (level !== '') {
    charDetails.level = level
  }
  if (exp !== '') {
    charDetails.exp = exp
  }
  if (charClass !== '') {
    charDetails.charClass = charClass
  }
  if (race !== '') {
    charDetails.race = race
  }
  if (alignment !== '') {
    charDetails.alignment = alignment
  }
  if (background !== '') {
    charDetails.background = background
  }
  if (strength !== '') {
    charDetails.strength = strength
  }
  if (dexterity !== '') {
    charDetails.dexterity = dexterity
  }
  if (constitution !== '') {
    charDetails.constitution = constitution
  }
  if (intelligence !== '') {
    charDetails.intelligence = intelligence
  }
  if (wisdom !== '') {
    charDetails.wisdom = wisdom
  }
  if (charisma !== '') {
    charDetails.charisma = charisma
  }
  console.log(charDetails)
  return axios.patch(
    `${apiUrl}/characters/${id}/`,
    {
      character: charDetails
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const deleteCharacter = (user, id) => {
  return axios.delete(`${apiUrl}/characters/${id}`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
