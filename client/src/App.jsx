import { useState } from 'react'
import NavBar from './navbar'
import InputChainDetails from './inputForm'


function App() {
  const [connectedAccount, setConnectedAccount] = useState("")
  const handleAccountChange = (account) => {
    setConnectedAccount(account)
  }

  return (
    <>
      <NavBar onAccountChange={handleAccountChange} />
      <InputChainDetails connectedAccount={connectedAccount} />
    </>
  )
}

export default App
