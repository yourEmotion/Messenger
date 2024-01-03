import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from "./frontend/start_page/StartPage"
import LogIn from "./frontend/log_in/LogIn"
import SignUp from './frontend/sign_up/SignUp'
import MyPage from './frontend/my_page/MyPage'
import FriendsPage from "./frontend/friends_page/FriendsPage"
import MessagesPage from './frontend/messages_page/MessagesPage'
import ChatPage from './frontend/chat_page/ChatPage'
import OtherPage from './frontend/other_page/OtherPage'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StartPage />}/>
                <Route path='/log-in' element={<LogIn />}/>
                <Route path='/sign-up' element={<SignUp />}/>
                <Route path={`/:username`} element={<MyPage />}/>
                <Route path={`/:thisUsername/others/:otherUsername`} element={<OtherPage />}/>
                <Route path={`/:username/friends`} element={<FriendsPage />}/>
                <Route path={`/:username/messages`} element={<MessagesPage />}/>
                <Route path='/:username/messages/chat/:chatWith' element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute