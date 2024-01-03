import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import user_img from '../../../images/user_img.png'
import { getUserData } from '../../../database/requests'

const Main = () => {
    const { username } = useParams()
    const [userData, setUserData] = useState()

    useEffect(() => {
        const fetch = async () => {
            const data = await getUserData(username)
            setUserData(data)
        }
        fetch()
    }, [])

    if (!userData) {
        return
    }

    if (username) {
        return (
            <main className='main'>
                <img src={user_img} alt='User' />
                <div className='info'>
                    <button className='editButton'>
                        <div>Edit profile</div>
                    </button>
                    <h1 className='firstname'>{userData['first_name']}</h1>
                    <h1 className='surname'>{userData['last_name']}</h1>
                    <h2 className='age'>age: {userData['age']}</h2>
                    <h2 className='city'>city: {userData['city']}</h2>
                    <div className='about'>
                        <h3 className='about_head'>About me:</h3>
                        <p className='about_paragraph'>{userData['about']}</p>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <div>Error 404</div>
    )
}

export default Main
