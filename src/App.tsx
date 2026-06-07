import { useState } from 'react'


import { Header } from './Header.tsx';
import { Blog } from './Blog.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Header />
      <Blog />
    </div>
    </>
  )
}

export default App
