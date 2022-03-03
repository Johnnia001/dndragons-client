import axios from 'axios'
import apiUrl from '../apiConfig'

export const getOneCharacter = (user, id) => {
  return axios.get(`${apiUrl}/characters/${id}`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createCharacter = (user, name, about) => {
  return axios.post(
    `${apiUrl}/characters/`,
    {
      character: {
        name,
        about
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const editCharacter = (user, id, name, about) => {
  return axios.patch(
    `${apiUrl}/characters/${id}`,
    {
      character: {
        name,
        about
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
