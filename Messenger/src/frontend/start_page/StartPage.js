import Header from "../components/Header/StartPage"
import Footer from "../components/Footer"
import Main from "../components/Main/StartPage"
import './styles.css'

const StartPage = () => {

    return (
        <div className="startPage">
            <Header />
            <Main />
            <Footer />
        </div>
    )
    
}

export default StartPage