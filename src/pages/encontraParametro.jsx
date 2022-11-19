import { useState } from "react";
import { DescobreParametro } from "../utils/calculaParametro";
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
import { ContentContainer } from "../components";

export default function EncontraParametro() {

    const [inputData, setInputData] = useState({
        capital: '',
        tempo: '',
        taxa: '',
        montante: ''
    })

    function handleChange(event) {
        setInputData({
            ...inputData,
            [event.target.name]: event.target.value
        })
    }

    function calc() {
        setInputData(DescobreParametro(
            inputData.capital,
            inputData.tempo,
            inputData.taxa,
            inputData.montante
        ))
    }

    return (
        <ContentContainer>
            <h1>Encontra parametros</h1>
            <p>Encontra um parametro faltante de um calculo financeiro, pode ser usado para descobrir a taxa de um investimento ou financiamento por exemplo</p>
            <FormControl>
                <TextField
                    label="Capital"
                    name="capital"
                    onChange={handleChange}
                    value={inputData.capital}
                    margin="dense"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                    }}
                />
                <TextField
                    label="Tempo"
                    name="tempo"
                    onChange={handleChange}
                    value={inputData.tempo}
                    margin="dense"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AccessTime /></InputAdornment>
                    }}
                />
                <TextField
                    label="Taxa"
                    name="taxa"
                    onChange={handleChange}
                    value={inputData.taxa}
                    margin="dense"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Percent /></InputAdornment>
                    }}
                />
                <TextField
                    label="Montante"
                    name="montante"
                    onChange={handleChange}
                    value={inputData.montante}
                    margin="dense"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                    }}
                />
                <Button
                    onClick={calc}
                    variant='contained'
                    style={{ height: '55px' }}
                    endIcon={<PriceCheck />}
                >
                    Calcular
                </Button>
            </FormControl>
        </ContentContainer>
    )
}