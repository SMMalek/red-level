import React from 'react'

  const Question = props => {
    const qidn = props.current+1
    const qid = "q" + qidn
    return (
      <div className="m-auto px-2 py-2 ">
        <h1 className="text-4xl font-bold m-auto text-center">{props.questions[qid].question}</h1>
      </div>
    );
  }

export default Question
