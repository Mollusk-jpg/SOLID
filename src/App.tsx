import { useState } from 'react'
import { Header } from './Header.tsx';
import { Blog } from './Blog.tsx';
import { BrowserSolidLdoProvider } from '@ldo/solid-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <BrowserSolidLdoProvider>
        <Header />
        <Blog />
      </BrowserSolidLdoProvider>
    </div>
    </>
  )
}

export default App
