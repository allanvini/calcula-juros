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
  CalculaInvestimento,
  CalculaAplicacao,
  AmortizacaoPrice,
  AmortizacalSac,
  EncontraParametro
} from './pages';

import {
  Home as HomeIcon,
  Savings,
  AddCard,
  RequestQuote,
  CurrencyExchange,
  Payments,
  QueryStats
} from '@mui/icons-material'

function App() {
  return (
    <Typography>
      <Router>

        <NavBar>
          <Button component={RouterLink} to='/' startIcon={<HomeIcon />} size="large">Pagina inicial</Button>
          <Button component={RouterLink} to='/investimento' startIcon={<Savings />} size="large">Calcular investimento</Button>
          <Button component={RouterLink} to='/aplicacao' startIcon={<CurrencyExchange />} size="large">Calcular aplicacao</Button>
          <Button component={RouterLink} to='/amortizacao-price' startIcon={<Payments />} size="large">Amortização (PRICE)</Button>
          <Button component={RouterLink} to='/amortizacao-sac' startIcon={<RequestQuote />} size="large">Amortização (SAC)</Button>
          <Button component={RouterLink} to='/descobrir-parametro' startIcon={<QueryStats />} size="large">Descobrir Parametro</Button>
        </NavBar>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/investimento" exact element={<CalculaInvestimento />} />
          <Route path="/aplicacao" exact element={<CalculaAplicacao />} />
          <Route path="/amortizacao-price" exact element={<AmortizacaoPrice />} />
          <Route path="/amortizacao-sac" exact element={<AmortizacalSac />} />
          <Route path="/descobrir-parametro" exact element={<EncontraParametro />} />
        </Routes>

      </Router>
    </Typography>
  )
}

export default App
