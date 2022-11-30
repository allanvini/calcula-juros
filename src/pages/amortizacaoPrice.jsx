import { useState } from "react";
import { ContentContainer } from "../components";
import { PRICE } from "../utils/calculaAmortizacao";
import { PeriodoAmortizacao } from "../utils/filtros";
import { paginacao } from "../utils/paginacao";
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
    TableCell,
    TablePagination
} from '@mui/material'
import {
    AttachMoney,
    Percent,
    PriceCheck,
    Money,
    CalendarMonth,
    FilterAlt
} from '@mui/icons-material'

export default function AmortizacaoPrice() {

    const [calcData, setCalcData] = useState([])

    const [paginationControls, setPaginationControls] = useState({
        itemsPerPage: 10,
        page: 1
    })

    const [inputData, setInputData] = useState({
        saldoDevedor: '',
        totalParcelas: '',
        taxa: '',
        de: '',
        ate: ''
    })

    const [filterResults, setFilterResults] = useState(null)

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

    function handleFilter() {
        console.log(PeriodoAmortizacao(inputData.de, inputData.ate, calcData))
        setFilterResults(PeriodoAmortizacao(inputData.de, inputData.ate, calcData))
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
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                    }}
                />

                <TextField
                    label="Total de parcelas"
                    name="totalParcelas"
                    onChange={handleChange}
                    margin="dense"
                    type="number"
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
                    type="number"
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

                <>
                    <h2>Filtrar periodo</h2>
                    <p>Informe um intervalo de periodos (meses) do qual deseja ver a totalização dos pagamentos, como total pagos em parcelas, juros e amortização</p>

                    <FormControl style={{ flexDirection: 'row' }}>
                        <TextField
                            label="De"
                            name="de"
                            type="number"
                            min={1}
                            style={{ margin: '0 4px 0 0' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><CalendarMonth /></InputAdornment>
                            }}
                            value={inputData.de}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Até"
                            name="ate"
                            type="number"
                            max={calcData.length}
                            style={{ margin: '0 0 0 4px' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><CalendarMonth /></InputAdornment>
                            }}
                            value={inputData.ate}
                            onChange={handleChange}
                        />
                        <Button
                            variant='contained'
                            style={{ margin: '0 8px 0 8px' }}
                            onClick={handleFilter}
                        > <FilterAlt /></Button>
                    </FormControl>

                    {
                        filterResults &&
                        <>
                            <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Total pago em prestações</TableCell>
                                            <TableCell>Total de juros pago</TableCell>
                                            <TableCell>Total de amortização acumulada</TableCell>
                                            <TableCell>Saldo devedor no ultimo período</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{filterResults.prestacoes.toFixed(2)}</TableCell>
                                            <TableCell>{filterResults.juros.toFixed(2)}</TableCell>
                                            <TableCell>{filterResults.amortizacao.toFixed(2)}</TableCell>
                                            <TableCell>{filterResults.saldoDevedor.toFixed(2)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    }

                    <h2>Tabulação geral</h2>
                    <p>Abaixo está a tabulação geral do financiamento, com todos os meses descriminados</p>
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
                                {paginationControls.page == 1 &&
                                    <TableRow>
                                        <TableCell>0</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>{(calcData[0].saldoDevedor + calcData[0].amortizacao).toFixed(2)}</TableCell>
                                    </TableRow>
                                }
                                {
                                    paginacao(calcData, paginationControls.itemsPerPage, paginationControls.page).map(element => (
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

                        <TablePagination
                            count={calcData.length}
                            page={paginationControls.page - 1}
                            rowsPerPage={paginationControls.itemsPerPage}
                            shape="rounded"
                            component="div"
                            onPageChange={(event, newPage) => {
                                setPaginationControls({
                                    ...paginationControls,
                                    page: newPage + 1
                                })
                            }}
                            onRowsPerPageChange={(event) => {
                                setPaginationControls({
                                    ...paginationControls,
                                    itemsPerPage: parseInt(event.target.value, 10)
                                })
                            }}
                        />

                    </TableContainer>

                </>
            }
        </ContentContainer>
    )
}