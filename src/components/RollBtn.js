import React from 'react'

  const RollBtn = props => {

    let disabled = false
    let btnStyle = "w-30 font-semibold text-black hover:text-redmenta transition-all ease-in-out duration-300"
    const handleClick = e => {
      props.roll(e.target.value)
      btnStyle = "w-30 font-semibold text-black hover:text-redmenta transition-all ease-in-out duration-300"
    }

    if(props.text === "Next" && props.current === 2){
      disabled=true
      btnStyle = "w-30 font-normal text-black/30 transition-all ease-in-out duration-300"
    }
    if(props.text === "Back" && props.current === 0){
      disabled=true
      btnStyle = "w-30 font-normal text-black/30 transition-all ease-in-out duration-300"
    }

    return (
      <button className={btnStyle} value={props.text} onClick={handleClick} disabled={disabled}>
        {props.text === "Back" && "< "}{props.text}{props.text === "Next" && " >"}
      </button>
    );
  }

export default RollBtn
