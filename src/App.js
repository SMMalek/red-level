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
      <Nav />
      <Title />
      {start
        ?
        <div>
          <Main className="flex flex-col bg-gray-100" appList={appList} reInitialize={reInitialize}/>
        </div>
        :
        <button className={startBtnStyle} onClick={initialize}>Start</button>
      }
    </div>
  )
}

export default App
