import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import user_img from '../../../images/user_img.png'
import { getChats } from '../../../database/requests'

const Main = () => {
    const { username } = useParams()
    const [usersList, setUsersList] = useState()

    useEffect(() => {
        const fetch = async () => {
            const users = await getChats(username)
            setUsersList(users)
        }
        fetch()
    }, [])

    if (!usersList) {
        return
    }

    console.log(usersList)

    return (
        <main className='main'>

            <div className='searchFriend'>Search by name:<input placeholder='name or username'/>
            </div>

            <div className="container">
                    <h1>Friends:</h1>
                    <ul>
                    {usersList.map((friend) => (
                        <Link to={`chat/${friend['username']}`} key={friend}>
                            <div className='friend'>
                                <img src={user_img} alt=''/>
                                <div className='name'>
                                    <h2>{friend['first_name']} {friend['last_name']}</h2>
                                    <h3>{friend['username']}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </ul>
                </div>
        </main>
    )

}

export default Main