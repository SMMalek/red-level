import React from 'react'

  const Choice = props => {

    const handleClick = e =>
      {
        props.setAnswersList(props.text,props.current)
    }
    let btnStyle="flex m-auto w-3/6 sm:w-4/6 border-2 sm:p-5 border-dashed rounded-lg border-slate-300 hover:bg-redmenta/10 w-fit justify-center p-5 transition-all ease-in duration-200 "
    if(props.selected === props.text){
      btnStyle = "flex m-auto w-3/6 sm:w-4/6 border-2 sm:p-5  border-dashed rounded-lg border-slate-900 bg-redmenta/10 w-fit justify-center p-5 transition-all ease-in duration-200"
    }

    return (
      <button className={btnStyle} onClick={handleClick}>
        <p className="m-auto pt-1 text-2xl sm:text-3xl md:text-4xl w-fit h-fit justify-center transition-all ease-in duration-200">{props.text}</p>
      </button>
    );
  }

export default Choice
