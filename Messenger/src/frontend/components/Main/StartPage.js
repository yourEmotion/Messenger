import { useState } from 'react'

const Main = () => {
    
    const [isOpenFirst, setIsOpenFirst] = useState(false)
    const [isOpenSecond, setIsOpenSecond] = useState(false)
    const [isOpenThird, setIsOpenThird] = useState(false)

    return (
        <main className='main'>
            <div className='intro'>
                <div>Welcome to</div>
                <div className='logo'>Beepp!</div>
            </div>

            <div className='first_block'>
                <h2 onClick={() => {setIsOpenFirst(!isOpenFirst)}}>What is Beepp?</h2>
                {isOpenFirst && <p>Beep is the best online chat for communication with people.
                    Let's get started right now!</p>}
            </div>

            <div className='second_block'>
                <h2 onClick={() => setIsOpenSecond(!isOpenSecond)}>What can you do with Beep?</h2>
                {isOpenSecond && <p>Here you can create your own page with info about yourself, and you also can find friends and chat with them!</p>}
            </div>

            <div className='third_block'>
                <h2 onClick={() => setIsOpenThird(!isOpenThird)}>Why should you choose Beepp?</h2>
                {isOpenThird && <p>This app is so easy to understand its functionality and has a nice design.</p>}
            </div>

        </main>
    )
}

export default Main