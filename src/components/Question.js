import React from 'react'

  const Question = props => {
    const qidn = props.current+1
    const qid = "q" + qidn
    return (
      <div className="flex m-auto px-2 h-2/6 mt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold m-auto item-center text-center">{props.questions[qid].question}</h1>
      </div>
    );
  }

export default Question
