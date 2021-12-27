import { v4 as uuidv4 } from 'uuid'
export const getUUID = () => {
  let UUID = window.sessionStorage.getItem('UUID')
  if (!UUID) {
    UUID = uuidv4()
    window.sessionStorage.setItem('UUID', UUID)
  }
  return UUID
}
