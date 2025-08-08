import { useSelector } from 'react-redux'
import { selectUsername, setUsername } from '../redux/slices/userSlice'
import { useAppDispatch } from '../redux/store'
import { useState, type ChangeEvent, type FormEvent } from 'react'

const User = () => {
  const username = useSelector(selectUsername)
  const dispatch = useAppDispatch()
  const [newUsername, setNewUsername] = useState('')

  const handeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUsername(newUsername))
    setUsername('')
  }

  return <div>
    <h2>User: {username}</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={newUsername} onChange={handeChange} />
      <button type="submit">Set Username</button>
    </form>
  </div>
}

export default User