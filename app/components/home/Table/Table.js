"use client"
import Image from 'next/image';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Listings', minWidth: 100 },
  { id: 'code', label: 'Contacts', minWidth: 100 },
  {
    id: 'population',
    label: 'Listing views',
    minWidth: 100,
    format: (value) => value.toLocaleString('en-US'),
  },
 
];

function createData(name, code, population) {

  return { name, code, population };
}

const rows = [
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
  createData('/assets/images/table-img.jpg', 40000 , 1009),
];


export default function TableDash() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: '100%' }} className=' mt-[20px]'>
      <div className='w-[94px] h-[23px] lg:ml-[21px] sm:ml-[14px]  lg:py-[23px] sm:py-[15px] my-[15px]'>
       <h1 className='lg:text-[18px] sm:text-[14px]'> Top Listings </h1>
       </div>
      <TableContainer sx={{ maxHeight: '100%', overflowY: 'hidden' }} >
        <Table >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 40, minWidth: column.minWidth }}
                >
                  <div className="flex items-center">
                  {column.label}
                   <Image src="/assets/icons/arrow.svg" height={5} width={10} alt="arrow-icon" className="ml-[8px]" />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                        {column.id === 'name' && (
                          <Image src={value} alt="Flag" width={53} height={53} className="lg:w-[52.95px] sm:w-[33.42px] lg:h-[36px] sm:h-[22.72px]" /> 
                        )}
                        {column.id !== 'name' && (
                          column.format && typeof value === 'number'
                            ? column.format(value)
                            : value
                        )}
                      </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

