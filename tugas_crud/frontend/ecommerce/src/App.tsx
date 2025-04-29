import './App.css'
import TopNavigationBar from './component/TopNavigationBar'
import Product from './feature/product/Product'

function App() {
  return (
    <div className="bg-gray-700">
      <TopNavigationBar />
      <Product />
    </div>
  )
}

export default App
