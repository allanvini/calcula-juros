import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from 'react-router-dom';

import {
  NavBar
} from './components';

import {
  Typography,
  Button
} from '@mui/material'

import {
  Home,
  CalculaAplicacao
} from './pages';

import {
  Home as HomeIcon,
  Savings,
  AddCard,
  RequestQuote
} from '@mui/icons-material'

function App() {
  return (
    <Typography>
      <Router>

        <NavBar>
          <Button component={RouterLink} to='/' startIcon={<HomeIcon />} size="large">Pagina inicial</Button>
          <Button component={RouterLink} to='/aplicacao' startIcon={<Savings />} size="large">Calcular aplicação</Button>
          <Button component={RouterLink} to='/financiamento' startIcon={<AddCard />} size="large">Calcular financiamento</Button>
          <Button component={RouterLink} to='/quitacao' startIcon={<RequestQuote />} size="large">Quitar financiamento</Button>
        </NavBar>


        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aplicacao" exact element={<CalculaAplicacao />} />
        </Routes>

      </Router>
    </Typography>
  )
}

export default App
