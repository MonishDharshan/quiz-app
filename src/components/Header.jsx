import quizLogo from '../assets/quiz-logo.png'

export default function Header() {
    return <header>
        <img src={quizLogo} alt='Quiz Logo'/>
        <h1>QUIZ</h1>
    </header>
}