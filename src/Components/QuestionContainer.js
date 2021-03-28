import React from 'react'
import Question from './Question'
import './QuestionContainer.css'
import {Data} from '../Data/Questions'

function QuestionContainer({incrementScore, responded}) {
    return (
        <div className='QuestionCont'>
        {Data.map(data=><Question data={data} incrementScore={incrementScore} responded={responded} key={data[0]} />)}
            
           
        </div>
    )
}

export default QuestionContainer
