import Main from "../components/Main/MyPage"
import Header from "../components/Header/MyPage"
import Footer from "../components/Footer"
import './styles.css'

const MyPage = () => {
    return (
        <div className="myPage">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default MyPage