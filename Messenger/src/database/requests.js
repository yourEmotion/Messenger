import { unstable_renderSubtreeIntoContainer } from "react-dom";

const baseUrl = "http://127.0.0.1:8000";

export const getUsers = async () => {
    const response = await fetch(`${baseUrl}/api/users`)
    const jsonData = await response.json()
    return jsonData
}

export const getUserData = async (username) => {
    const response = await fetch(`${baseUrl}/api/users/?username=${username}`)
    const jsonData = await response.json()
    return jsonData[0]
}

export const getFriends = async (username) => {
    const response = await fetch(`${baseUrl}/api/users/?username=${username}`)
    const jsonData = await response.json()

    const friends_id_list = jsonData[0]["friends"]

    let friendsData = []
    for (const id of friends_id_list) {
        const friend_id = id
        const response1 =  await fetch(`${baseUrl}/api/users/?id=${friend_id}`)
        const friendJsonData = await response1.json()
        friendsData = [...friendsData, friendJsonData[0]]
    }

    console.log(friendsData)
    return friendsData
}

export const getChats = async (username) => {
    const response1 = await fetch(`${baseUrl}/api/users/?username=${username}`)
    const jsonData1 = await response1.json()
    
    const id = jsonData1[0]['id']
    
    const response2 = await fetch(`${baseUrl}/api/chats/?user1=${id}`)
    const jsonData2 = await response2.json()

    const response3 = await fetch(`${baseUrl}/api/chats/?user2=${id}`)
    const jsonData3 = await response3.json()

    let usersIdList = []
    for (const user of jsonData2) {
        const userId = user['user2']
        const response4 = await fetch(`${baseUrl}/api/users/?id=${userId}`)
        const jsonData4 = await response4.json()
        usersIdList = [...usersIdList, jsonData4[0]]
    }

    for (const user of jsonData3) {
        const userId = user['user1']
        const response5 = await fetch(`${baseUrl}/api/users/?id=${userId}`)
        const jsonData5 = await response5.json()
        usersIdList = [...usersIdList, jsonData5[0]]
    }
    return usersIdList

}

export const getAllMessages = async () => {
    const response = await fetch(`${baseUrl}/api/messages`)
    const jsonData = await response.json()
    return jsonData
}

export const getMessages = async (username, chatWith) => {
    const response1 = await fetch(`${baseUrl}/api/users/?username=${username}`)
    const jsonData1 = await response1.json()
    
    const user_id = jsonData1[0]['id']

    const response2 = await fetch(`${baseUrl}/api/users/?username=${chatWith}`)
    const jsonData2 = await response2.json()
    
    const chatWith_id = jsonData2[0]['id']

    const response3 = await fetch(`${baseUrl}/api/chats/?user1=${user_id}&user2=${chatWith_id}`)
    const jsonData3 = await response3.json()

    let chat_id
    if (jsonData3.length === 0) {
        const response4 = await fetch(`${baseUrl}/api/chats/?user1=${chatWith_id}&user2=${user_id}`)
        const jsonData4 = await response4.json()
        if (jsonData4.length === 0) {
            return [[], undefined]
        }
        chat_id = jsonData4[0]['id']
    } else {
        chat_id = jsonData3[0]['id']
    }

    const response5 = await fetch(`${baseUrl}/api/messages/?chat=${chat_id}`)
    const jsonData5 = await response5.json()

    jsonData5.sort((a, b) => b.id - a.id);
    
    return [jsonData5, chat_id]
}

export const addMessage = async (new_message) => {
    await fetch(`${baseUrl}/api/messages/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(new_message),
    })
}