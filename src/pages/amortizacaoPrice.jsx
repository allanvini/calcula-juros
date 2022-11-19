import { useState } from "react";
import { ContentContainer } from "../components";
import { PRICE } from "../utils/calculaAmortizacao";
import {
    TextField,
    InputAdornment,
    FormControl,
    Button,
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
    PriceCheck,
    Money
} from '@mui/icons-material'

export default function AmortizacaoPrice() {

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
        setCalcData(PRICE(
            inputData.saldoDevedor,
            inputData.totalParcelas,
            inputData.taxa
        ))
    }


    return (
        <ContentContainer>
            <h1>Calcular amortização PRICE</h1>
            <p>Calcula a amortização com valor de prestação constante</p>
            <FormControl>
                <TextField
                    label="Saldo devedor"
                    name="saldoDevedor"
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                    }}
                />

                <TextField
                    label="Total de parcelas"
                    name="totalParcelas"
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Money /></InputAdornment>
                    }}
                />

                <TextField
                    label="Taxa de juros"
                    name="taxa"
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Percent /></InputAdornment>
                    }}
                />

                <Button
                    onClick={calc}
                    variant='contained'
                    fullWidth
                    style={{ height: '55px', marginTop: '20px' }}
                    endIcon={<PriceCheck />}
                >
                    Calcular
                </Button>

            </FormControl>

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
        </ContentContainer>
    )
}