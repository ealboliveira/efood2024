import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles'
import Footer from './components/Footer'
import Paths from './routes'
import { store } from './components/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Paths />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
