import { useState } from "react";
import { ContentContainer } from "../components";
import { SAC } from "../utils/calculaAmortizacao";
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
    PriceCheck,
    Money
} from '@mui/icons-material'

export default function AmortizacalSac(){
    const [calcData, setCalcData] = useState([])

    const [inputData, setInputData] = useState({
        saldoDevedor: '',
        totalParcelas: '',
        taxa: ''
    })

    function handleChange(event) {
        setInputData({
            ...inputData,
            [event.target.name]: event.target.value
        })
    }

    function calc() {
        setCalcData(SAC(
            inputData.saldoDevedor,
            inputData.totalParcelas,
            inputData.taxa
        ))
    }

    return (
        <ContentContainer>
            <h1>Calcular amortização SAC</h1>
            <p>Calcula a amortização com valor de prestação decrescente</p>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid xs={6}>
                        <TextField
                            label="Saldo devedor"
                            name="saldoDevedor"
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                            }}
                        />
                    </Grid>

                    <Grid xs={2}>
                        <TextField
                            label="Total de parcelas"
                            name="totalParcelas"
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><Money /></InputAdornment>
                            }}
                        />
                    </Grid>

                    <Grid xs={2}>
                        <TextField
                            label="Taxa de juros"
                            name="taxa"
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><Percent /></InputAdornment>
                            }}
                        />
                    </Grid>

                    <Grid xs={2}>
                        <Button onClick={calc} variant='contained' fullWidth style={{ height: '55px' }} endIcon={<PriceCheck />}>Calcular</Button>
                    </Grid>

                    {
                        calcData.length > 0 &&

                        <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Mes</TableCell>
                                        <TableCell>Prestação</TableCell>
                                        <TableCell>Juros</TableCell>
                                        <TableCell>Amortização</TableCell>
                                        <TableCell>Saldo devedor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>0</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>{(calcData[0].saldoDevedor + calcData[0].amortizacao).toFixed(2)}</TableCell>
                                    </TableRow>
                                    {
                                        calcData.map(element => (
                                            <TableRow>
                                                <TableCell>{element.mes}</TableCell>
                                                <TableCell>{element.prestacao.toFixed(2)}</TableCell>
                                                <TableCell>{element.juro.toFixed(2)}</TableCell>
                                                <TableCell>{element.amortizacao.toFixed(2)}</TableCell>
                                                <TableCell>{element.saldoDevedor.toFixed(2)}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    }

                </Grid>
            </Box>
        </ContentContainer>
    )
}