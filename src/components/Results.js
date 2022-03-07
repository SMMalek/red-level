import React from 'react'

  const Results = props => {

    const check = n => {if(props.listc[n]){return "Correct"}else{return "False"}} //check one answer if true or false
    const handleClick = () => props.reInitialize()

    const RetakeBtnStyle = "text-3xl text-slate-600 font-medium mx-auto my-12 pt-3 pb-4 px-5 w-fit bg-redmenta/10 border-2 border-solid rounded-full border-gray/5 transition-all ease-in-out duration-300 hover:border-slate-400"

    return (
      <div className="flex flex-col m-auto w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 my-7 w-fit">
        <div className="flex flex-col border-2 border-solid rounded-lg border-slate-300">
          <div className="m-auto text-2xl sm:text-3xl my-8 py-3">You first answer is <strong className="text-redmenta/90">{check(0)}</strong></div>
          <hr className="border-slate-200 border-solid mx-4"/>
          <div className="m-auto text-2xl sm:text-3xl my-8 py-3">You second answer is <strong className="text-redmenta/90">{check(1)}</strong></div>
          <hr className="border-slate-200 border-solid mx-4"/>
          <div className="m-auto text-2xl sm:text-3xl my-8 py-3">You third answer is <strong className="text-redmenta/90">{check(2)}</strong></div>
        </div>
        <button className={RetakeBtnStyle} onClick={handleClick}>Retake</button>
      </div>
        );
  }

export default Results
