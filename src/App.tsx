import { ModalCreateEdit } from "./components/Modal/ModalCreate"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <div className="foi" style={{background: 'black'}}>
      <GlobalStyle />
      <ModalCreateEdit />
    </div>
  )
}

export default App
