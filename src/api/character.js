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
export const createCharacter = (
  user,
  name,
  level,
  exp,
  charClass,
  race,
  alignment,
  background
) => {
  return axios.post(
    `${apiUrl}/characters/`,
    {
      character: {
        user,
        name,
        level,
        exp,
        charClass,
        race,
        alignment,
        background
      }
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
  background
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
