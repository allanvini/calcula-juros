import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField'

function App() {
  return (
    <Typography>
      <Router>

        <Button component={RouterLink} to='/'>Home</Button>
        <Button component={RouterLink} to='/teste'>Teste</Button>
        <Link component={RouterLink}>Link comum</Link>

        <Routes>
          <Route path="" exact element={<Button variant='contained'>Hello World!</Button>} />
          <Route path="/teste" exact element={<h1>pagina teste</h1>} />
        </Routes>
        <TextField label="Insira algo" variant="standard" />
      </Router>
    </Typography>
  )
}

export default App
