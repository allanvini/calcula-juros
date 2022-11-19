import { useState } from 'react'
import { ContentContainer } from "../components";
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

const rawData = [
    {
        rodada: 1,
        valor: 1000,
        juros: 100,
        total: 1100,
        acumulado: 1100
    },
    {
        rodada: 2,
        valor: 1000,
        juros: 100,
        total: 1100,
        acumulado: 2200
    },
    {
        rodada: 3,
        valor: 1000,
        juros: 100,
        total: 1100,
        acumulado: 3300
    }
]


export default function CalculaAplicacao() {
    return (
        <ContentContainer>
            <h1>Calcular aplicação</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid xs={2}>
                        <TextField
                            label="Valor aplicado"
                            variant="outlined"
                            ype="number"
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><AttachMoney /></InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid xs={2}>
                        <TextField
                            label="Taxa"
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
                            variant="outlined"
                            ype="number"
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
                                fullWidth
                            >
                                <MenuItem value="a.m"><em>ao mes</em></MenuItem>
                                <MenuItem value="a.a"><em>ao ano</em></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid xs={2}>
                        <Button fullWidth variant="contained" size="large" endIcon={<PriceCheck />} style={{ height: '55px' }}>
                            Calcular
                        </Button>
                    </Grid>
                </Grid>

                {
                    rawData.length > 0 &&

                    <TableContainer component={Paper} style={{marginTop: '30px'}}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rodada</TableCell>
                                    <TableCell>Valor aplicado</TableCell>
                                    <TableCell>Juros</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Acumulado</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rawData.map(element=>(
                                        <TableRow>
                                            <TableCell>{element.rodada}</TableCell>
                                            <TableCell>{element.valor}</TableCell>
                                            <TableCell>{element.juros}</TableCell>
                                            <TableCell>{element.total}</TableCell>
                                            <TableCell>{element.acumulado}</TableCell>
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