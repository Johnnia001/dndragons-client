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
  strength
) => {
  const charDetails = {
    user
  }
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
