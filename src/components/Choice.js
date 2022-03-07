import React from 'react'

  const Choice = props => {

    const handleClick = e =>
      {
        props.setAnswersList(props.text,props.current)
    }
    let btnStyle="flex m-auto border-2 transition-colors ease-in duration-200 border-dashed rounded-lg border-slate-300 hover:bg-redmenta/10 w-fit justify-center p-5"
    if(props.selected === props.text){
      btnStyle = "flex m-auto border-2 transition-colors ease-in duration-200 border-dashed rounded-lg border-slate-900 bg-redmenta/10 w-fit justify-center p-5"
    }

    return (
      <button className={btnStyle} onClick={handleClick}>
        <p className="m-auto pt-1 text-3xl w-full h-12 w-fit justify-center">{props.text}</p>
      </button>
    );
  }

export default Choice
