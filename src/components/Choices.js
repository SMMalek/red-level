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
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-4/6 gap-4 mx-auto mb-10  w-fit ">
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
