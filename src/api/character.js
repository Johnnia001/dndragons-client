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
  return axios.patch(
    `${apiUrl}/characters/${id}`,
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

export const deleteCharacter = (user, id) => {
  return axios.delete(`${apiUrl}/characters/${id}`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
