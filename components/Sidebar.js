import React from 'react'
import Image from 'next/image'
import { ConnectButton } from 'web3uikit'

const isAuthenticated = true
const username = 'Bro Bro'

const Sidebar = () => {
  const styles = {
    container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
    profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: `rounded-3xl object-cover`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
  
  }
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        { //check if user is authenticated
          isAuthenticated && (
            <>
            <div className={styles.profilePicContainer}>
              <Image
              src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
              alt='profile'
              className={styles.profilePic}
              height={100}
              width={100}
              />
            </div>
            {!username ? (  // check for username if none show the input
              <>
                <div className={styles.username}>
                <input 
                type='text'
                placeholder='Username...'
                className={usernameInput}
                // value ={nickname}
                // onchange={e => setNickname(e.target.value)}
                />
                </div>
                <button className={styles.setNickname}>
                // onClick={handleSetUsername}
                set Nickname
                </button>
              </>
            ) : (
              <div>
              <div className={styles.welcome}>Welcome{username}</div>
              </div>
            )
          }
          </>
          )
        }

      </div>

    </div>
  )
}

export default Sidebar
