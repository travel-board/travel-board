import { Input } from "./components/Input"

import { FaSearch } from 'react-icons/fa'


function App() {

  return (
    <>
      <Input type="text" placeholder="Digite seu email" button={false} error={false} message="error">
        <FaSearch/>
      </Input>
      
    </>
  )
}

export default App