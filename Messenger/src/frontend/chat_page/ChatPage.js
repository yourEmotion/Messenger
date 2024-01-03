import Main from "../components/Main/ChatPage"
import Header from "../components/Header/ChatPage"
import Footer from "../components/Footer"
import './styles.css'

const ChatPage = () => {
    return (
        <div className="chatPage">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default ChatPage