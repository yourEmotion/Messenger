import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import user_img from '../../../images/user_img.png'
import { getUserData } from '../../../database/requests'

const Main = () => {
    const { thisUsername, otherUsername } = useParams()
    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetch = async () => {
            const data = await getUserData(otherUsername)
            setData(data)
        }
        fetch()
    }, [])

    if (!data) {
        return
    }

    return (
        <main className='main'>
            
            <img src={user_img} />
            <div className='info'>
                <Link to={`/${thisUsername}/messages/chat/${otherUsername}`}>
                    <button className='toChatButton'>
                        <div>To chat</div>
                    </button>
                </Link>
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

export default Main