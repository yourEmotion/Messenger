import Main from "../components/Main/MessagesPage"
import Header from "../components/Header/MessagesPage"
import Footer from "../components/Footer"
import './styles.css'

const MessagesPage = () => {
    return (
        <div className="messagesPage">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default MessagesPage