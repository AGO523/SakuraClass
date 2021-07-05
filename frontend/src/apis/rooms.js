import axios from 'axios';
import { roomsIndex } from '../urls/index'

export const fetchRooms = () => {
  return axios.get(roomsIndex)
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}
