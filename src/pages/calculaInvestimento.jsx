import { useState } from 'react'
import { ContentContainer } from "../components";
import Investimento from '../utils/calculaInvestimento';
import {
    Box,
    TextField,
    InputAdornment,
    FormControl,
    Button,
    Select,
    InputLabel,
    MenuItem,
    Grid,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material'
import {
    AttachMoney,
    Percent,
    AccessTime,
    PriceCheck
} from '@mui/icons-material'


export default function CalculaInvestimento() {

    const [calcData, setCalcData] = useState([])

    const [inputData, setInputData] = useState({
        capital: '',
        taxa: '',
        tipoTaxa: 'a.m',
        periodo: '',
        tipoPeriodo: 'meses'
    })

    function handleChange(event) {
        setInputData({
            ...inputData,
            [event.target.name]: event.target.value
        })
    }

    function calc() {
        setCalcData(Investimento(
            inputData.capital,
            inputData.taxa,
            inputData.tipoTaxa,
            inputData.periodo,
            inputData.tipoPeriodo
        ))
    }

    return (
        <ContentContainer>
            <h1>Calcular investimento</h1>
            <p>Calcula investimento a juros compostos</p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid xs={2}>
                        <TextField
                            label="Valor aplicado"
                            name="capital"
                            onChange={handleChange}
                            value={inputData.capital}
                            variant="outlined"
                            type="number"
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid xs={2}>
                        <TextField
                            label="Taxa"
                            name="taxa"
                            value={inputData.taxa}
                            onChange={handleChange}
                            variant="outlined"
                            type="number"
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><Percent /></InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid xs={2}>
                        <FormControl fullWidth>
                            <InputLabel id="tipo-taxa">Ao Mes / Ao Ano</InputLabel>
                            <Select
                                labelId="tipo-taxa"
                                label="Ao Mes / Ao Ano"
                                name="tipoTaxa"
                                value={inputData.tipoTaxa}
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value="a.m"><em>A.M - Ao Mes</em></MenuItem>
                                <MenuItem value="a.a"><em>A.A - Ao Ano</em></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={2}>
                        <TextField
                            label="Periodo"
                            name="periodo"
                            value={inputData.periodo}
                            onChange={handleChange}
                            variant="outlined"
                            type="number"
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><AccessTime /></InputAdornment>
                            }}
                        />
                    </Grid>

                    <Grid xs={2}>
                        <FormControl fullWidth>
                            <InputLabel id="tipo-periodo">Anos / Meses</InputLabel>
                            <Select
                                labelId="tipo-periodo"
                                label="Anos / Meses"
                                name="tipoPeriodo"
                                value={inputData.tipoPeriodo}
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value="meses"><em>ao mes</em></MenuItem>
                                <MenuItem value="anos"><em>ao ano</em></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid xs={2}>
                        <Button onClick={calc} fullWidth variant="contained" size="large" endIcon={<PriceCheck />} style={{ height: '55px' }}>
                            Calcular
                        </Button>
                    </Grid>
                </Grid>

                {
                    calcData.length > 0 && <h1>Montante obtido: <span style={{ color: '#197dff', textDecoration: 'underline' }}>$ {calcData[calcData.length - 1].montante.toFixed(2)}</span></h1>
                }

                {
                    calcData.length > 0 &&

                    <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Mes</TableCell>
                                    <TableCell>Capital</TableCell>
                                    <TableCell>Juros</TableCell>
                                    <TableCell>Montante</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    calcData.map(element => (
                                        <TableRow>
                                            <TableCell>{element.mes}</TableCell>
                                            <TableCell>{element.capital.toFixed(2)}</TableCell>
                                            <TableCell>{element.juros.toFixed(2)}</TableCell>
                                            <TableCell>{element.montante.toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                }


            </Box>

        </ContentContainer>
    )
}