import React,{Component} from 'react';
let quizData=require('./quiz_data.json');
class Quiz extends Component{

    constructor(props){
        super(props);
        this.setState(
            {quiz_position:1}
        );
    }

    render (){
        return(
            <div>
                <div className='QuizQUestion'>
                    {quizData.quiz_questions[0].instruction_text}
                </div>
            </div>
        );
    }
}

export default Quiz;