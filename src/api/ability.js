import axios from 'axios'
import apiUrl from '../apiConfig'

export const indexAbility = user => {
  return axios.get(apiUrl + 'characters/ability/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getOneAbility = (id, user) => {
  return axios.get(`${apiUrl}/characters/ability/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
export const createAbility = (
  user,
  strength
) => {
  return axios.post(
    `${apiUrl}/character/ability/`,
    {
      ability: {
        user,
        strength
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const editAbility = (
  user,
  id,
  strength
) => {
  const charDetails = {
    user
  }
  if (strength !== '') {
    charDetails.strength = strength
  }

  return axios.patch(
    `${apiUrl}/characters/ability/${id}/`,
    {
      ability: charDetails
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const deleteAbility = (user, id) => {
  return axios.delete(`${apiUrl}/characters/ability/${id}`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
