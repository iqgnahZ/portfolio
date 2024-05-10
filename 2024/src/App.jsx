import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header'

function App() {
  return (
    <div className="app">
      <Header/>
      <Router>
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
