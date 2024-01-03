import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import user_img from '../../../images/user_img.png'
import send from '../../../images/send.png'
import { addMessage, getMessages, getUserData } from '../../../database/requests'

const Main = () => {
    const { username, chatWith } = useParams()
    const [chat, setChat] = useState(undefined)
    const [messages, setMessages] = useState()
    const [inputMessage, setInputMessage] = useState("")
    const [userData, setUserData] = useState()
    const [chatWithData, setChatWithData] = useState()
    const [found, setFound] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            const data = await getUserData(username)
            setUserData(data)
        }
        fetch()
    }, [])

    // check if the chatWith-user in database
    useEffect(() => {
        const fetch = async () => {
            const data = await getUserData(chatWith)
            if (data.length === 0) {
                setFound(false)
            } else {
                setChatWithData(data)
            }
        }
        fetch()
    }, [])

    // get messages with the users
    useEffect(() => {
        if (found) {
            const fetch = async () => {
                const data = await getMessages(username, chatWith)
                setMessages(data[0])
                setChat(data[1])
            }
            fetch()
        }
    }, [])

    if (!found) {
        return (
            <div>
                <h2>404 Not Found</h2>
            </div>
        )
    }

    if (!chatWithData || !messages) {
        return
    }

    const handleSendButton = (event) => {
        const text = inputMessage.trim()

        if (text) {
            console.log('written text: ', text)
            const new_message = {
                'sender': userData['id'],
                'message': text,
                'chat': chat,
            }

            setMessages([new_message, ...messages])
            addMessage(new_message)
        }

        setInputMessage('')
    }

    const handleKeyEnter = (event) => {
        if (event.key === 'Enter') {
            handleSendButton(event)
        }
    }

    return (
        <main className='main'>

            <Link to={`/${username}/others/${chatWith}`} className='chat_with' >
                <img src={user_img} />
                <div>{chatWithData['first_name']} {chatWithData['last_name']}</div>
            </Link>

            <div className="chat">

                <div className='send_message'>
                    <input id='inputText'
                        placeholder='Enter message'
                        onKeyDown={handleKeyEnter}
                        onChange={(event) => {setInputMessage(event.target.value)}}
                        value={inputMessage}/>
                        
                    <button className='sendButton' onClick={handleSendButton}>
                        <img src={send}/>
                    </button>
                </div>

                {messages.length > 0 ? (
                    messages.map((message) => (
                        (message['sender'] === userData['id']) ?
                            <div className='user_message' key={message.id}>
                                <div>{message.message}</div>
                            </div>
                        :
                        <div className='not_user_message' key={message.id}>
                            <div>{message.message}</div>
                        </div>    
                    ))
                )
                : (<div className='empty_dialogue'>Start chatting now!</div>)
                }
            </div>
        </main>
    )
}

export default Main