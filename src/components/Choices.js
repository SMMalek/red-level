import React, {useState} from 'react'
import Choice from './Choice.js'

  const Choices = props => {

    const [selectList, setSelectList] = useState()

    const qidn = props.current+1
    const qid = "q" + qidn
    const answers = props.questions[qid].answers

    let tempList = []
    const setAnswersList = (answer, index) => {
      props.setAnswersList(answer, index, props.questions[qid].correct_answer) //callback

      tempList[index] = answer //setting selected style
      setSelectList(tempList) //setting selected style
    }

    return (
      <div className="grid grid-cols-2 justify-around h-52 gap-8 mx-auto my-10 w-fit ">
        {answers.map( answer =>
          <Choice
            text={answer}
            setAnswersList={setAnswersList}
            current={props.current}
            selected={props.list[props.current]}/>)}
      </div>
    );
  }

export default Choices
