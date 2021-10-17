import QuizTitle from './QuizTitle'
import Q1 from './Q1'
import Q1Input from './Q1Input'
import Q2 from './Q2'
import Q2Input from './Q2Input'
import './style.css';

const Quiz = () =>{
 return (
    <div className='quiz'>
        <QuizTitle/>
        <Q1/>
        <Q1Input/>
        <Q2/>
        <Q2Input/>
    </div>
 )
}

export default Quiz;