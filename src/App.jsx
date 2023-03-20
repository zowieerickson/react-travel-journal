import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Article from './components/Article'
import articleData from './data.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const articleElements = articleData.map(item => {
    return <Article 
      item={item}
    />
  })

  return (
    <div className="App">
      <Header />
      <main>
        {articleElements}
      </main>
      <h1>Hello world</h1>
    </div>
  )
}

export default App
