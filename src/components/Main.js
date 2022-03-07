import React, {useState} from 'react'
import Question from './Question.js'
import Choices from './Choices.js'
import RollBtn from './RollBtn.js'
import Counter from './Counter.js'
import Results from './Results.js'
  const Main = props => {
    const [current, setCurrent] = useState(0) //index of current Question
    const [list, setList] = useState(["","",""]) //list of User's answers
    const [listc, setListc] = useState([]) //boolean array true if users answers is correct
    const [disabled, setDisabled] = useState(true) //submit btn
    const [isSubmitted, setIsSubmitted] = useState(false) // sumbit clicked and rendering result

    const roll = to => { //Next and back buttons, to-->direction
      if(to === "Next"){setCurrent(current+1)}else{setCurrent(current-1)}}
    const handleClick = () => {setIsSubmitted(true)} //for rendering Results
    const reInitialize = () => {props.reInitialize()} //reInitialize callback()

    let submitBtnStyle = ""// Submit Button acrivation and style
    if(!list[0] || !list[1] || !list[2]){submitBtnStyle ="text-black/30 text-lg"}else{
      submitBtnStyle = "text-lg w-15 m-auto font-semibold hover:text-redmenta transition-all ease-in-out duration-300"
    }

    let tempList = list, tempListc = listc  //call back, setting list and listc
    const setAnswersList = (answer, index, correct) => {
      tempList[index] = answer
      if(answer===correct){
          tempListc[index] = true
          setListc(tempListc)
        }else{
          tempListc[index] = false
          setListc(tempListc)
        }
      setList(tempList)
      if(list[0] && list[1] && list[2]){
        setDisabled(false)
      }
    }

    return (
      <div>
        {!isSubmitted
          ?
          <div className="flex flex-col h-[28rem] bg-gray-100">
            <div className="flex flex-col m-auto h-full w-1/2 p-[10%] pt-[2%] border-2 border-dashed rounded-lg border-slate-300">
              <Question questions={props.appList} current={current} />
              <Choices questions={props.appList} current={current} setAnswersList={setAnswersList} list={list}/>
            </div>
            <div className="flex flex-row justify-between w-1/2 mx-auto mt-2 px-16">
              <RollBtn text="Back" roll={roll} current={current} />
              <RollBtn text="Next" roll={roll} current={current} />
            </div>
            <Counter current={current} />
            <button className={submitBtnStyle} disabled={disabled} onClick={handleClick}>Submit</button>
          </div>
        :
        <Results listc={listc}  reInitialize={reInitialize}/>
      }
      </div>
    );
  }

export default Main
