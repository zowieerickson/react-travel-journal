import Header from './components/Header'
import Article from './components/Article'
import articleData from './data.js'
import './App.css'

function App() {
  const articleElements = articleData.map(item => {
    return <Article
      key={item.id}
      item={item}
    />
  })

  return (
    <div className="App">
      <Header />
      <main className="cards-list">
        {articleElements}
      </main>
    </div>
  )
}

export default App
