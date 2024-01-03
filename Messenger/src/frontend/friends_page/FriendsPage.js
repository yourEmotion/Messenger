import Main from "../components/Main/FriendsPage"
import Header from "../components/Header/FriendsPage"
import Footer from "../components/Footer"
import './styles.css'

const FriendsPage = () => {
    return (
        <div className="friendsPage">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default FriendsPage