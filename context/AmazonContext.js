import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const AmazonContext = createContext(null)

export const AmazonProvider = ({children}) => {
  const [username, setUsername] = useState('')
  const [nickname, setNickname] = useState('')

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
  } = useMoralis()

  useEffect(() => {
    ;(async () => {
      if(isAuthenticated) {
        const currentUsername = await user?.get('nickname')
      setUsername(currentUsername)
      }
    })()
  
  }, [isAuthenticated, user, username]);

  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set('nickname', nickname)
        user.save()
        setNickname('')
      } else {
        console.log("Can't set empty nickname")
      }
    } else {
      console.log('No user')
    }
  }

  return (
    <AmazonContext.Provider
    value = {{
      isAuthenticated,
      nickname,
      setNickname,
      username,
      setUsername,
    }}
    >
      {children}
    </AmazonContext.Provider>
  )
}
