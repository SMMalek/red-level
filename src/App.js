import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Nav from './components/Nav.js'
import Title from './components/Title.js'
import Main from './components/Main.js'

const App = () => {
  const [appList, setAppList] = useState([])
  const [start, setStart] = useState(false)

  useEffect(() => {
      axios.get('data.json')
          .then((res) => {
            setAppList(res.data.questions)

          })
          .catch((err) => {
            console.log(err);
          })
  }, [])

  const initialize = () => setStart(true)
  const reInitialize = () => setStart(false)

  const startBtnStyle ="grid place-content-center transition-colors ease-in duration-200 w-44 h-44 bg-redmenta/10 m-auto my-20 border-2 border-solid rounded-full border-gray/5 text-5xl text-slate-600 hover:border-gray-500 "

  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      <div className="h-1/5">
        <Nav />
        <Title />
      </div>
      {start
        ?
        <div className="h-4/5">
          <Main appList={appList} reInitialize={reInitialize}/>
        </div>
        :
        <div className="py-40 h-4/5">
          <button className={startBtnStyle} onClick={initialize}>Start</button>
        </div>
      }
    </div>
  )
}

export default App
