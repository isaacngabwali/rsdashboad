import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
} from '@mui/material';
import axios from "axios";
import { useState, useEffect } from "react";

import ButtonGroup from '@mui/material/ButtonGroup';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


export default function UserPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
        .get('https://rsbase.fanitehub.com/api/v1/products', {
  
        })
        .then((response) => {
          setData(response.data);
        })

  }, []);
  // ----------------------------------------------------------------------
  
  return (
    <>
      <Helmet>
        <title> Rudi Shule </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Orders
          </Typography>
        </Stack>

        <Card>

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="left">Unit Price (UGX)</TableCell>
                  <TableCell align="left">Stock quantity</TableCell>
                  <TableCell align="left">Unit</TableCell>
                  <TableCell align="left">SKU</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              {data.map((data) => (
                <TableBody key={data.id}>
                      <TableRow>

                        <TableCell align="left"><Avatar alt="" src={data.image_original} /></TableCell>

                        <TableCell align="left"> {data.name}</TableCell>

                        <TableCell align="left">{data.price}</TableCell>

                        <TableCell align="left">{data.quantity}</TableCell>

                        <TableCell align="left">{data.unit}</TableCell>

                        <TableCell align="left">
                          <Label color="success">{data.sku}</Label>
                        </TableCell>

                        <TableCell align="right">
                        <ButtonGroup variant="contained" >
                          <Button aria-label="outlined success button group" color="warning">Edit</Button>
                          <Button aria-label="outlined danger button group"  color="error">Delete</Button>
                        </ButtonGroup>
                        </TableCell>
                      </TableRow>
                </TableBody>
                ))} 
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </>
  );
}
