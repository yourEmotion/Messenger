import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import user_img from '../../../images/user_img.png'
import search from '../../../images/search.png'
import { getFriends } from '../../../database/requests'

const Main = () => {
    const { username } = useParams()
    const [friends, setFriends] = useState()
    const [sortBy, setSortBy] = useState("name")

    useEffect(() => {
        const fetch = async () => {
            const data = await getFriends(username)
            setFriends(data)
        }
        fetch()
    }, [])

    if (!friends) {
        return
    }

    const sortFriends = (friends, by) => {
        return friends.sort((a, b) => {
            switch (by) {
                case "name":
                    return `${a["surname"]} ${a["firstname"]}`
                            .localeCompare(`${b["surname"]} ${b["firstname"]}`)
                /*case "popularity":
                    return b.popularity - a.popularity
                case "date_added":
                    return new Date(b['date_added']) - new Date(a['date_added'])*/
            }
        })
    }

    const sortedFriends = {
        'name': sortFriends([...friends], 'name'),
        /*'popularity': sortFriends([...friends], 'popularity'),
        'date_added': sortFriends([...friends], 'date_added'),*/
    }

    const handleSortByChange = (event) => {
        setSortBy(event.target.value)
    }

    // функция не работает
    const handleSearchButton = (event) => {
        if (friends.has(event.target.value)) {
            console.log('Found')
        } else {
            console.log('Not found')
        }
    }

    const handleKeyEnter = (event) => {
        if (event.key === 'Enter') {
            handleSearchButton(event)
        }
    }

    console.log(sortedFriends[sortBy])

    return (
        <main className='main'>
            <div className='searchFriend'>Search people by username:<input placeholder='username' onKeyDown={handleKeyEnter}/>
                <button className='searchButton' onClick={handleSearchButton}>
                    <img src={search} alt=''/>
                </button>
            </div>

            <div className="friends-sort">
                <div>Sort by:</div>
                <select className="sort-by" onChange={handleSortByChange}>
                    <option value="name">name</option>
                    <option value="popularity">popularity</option>
                    <option value="date_added">date added</option>
                </select>
            </div>

            <div className="container">
                <h1>Friends:</h1>
                <ul>
                {friends.map((friend) => (
                    <Link to={`/${username}/others/${friend['username']}`} key={friend}>
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