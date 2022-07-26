import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'


const rows = [
  {
    age: 1,
   status: 'ongoing',
    date: '01/01/2020',
    name: 'Henry Schartz',
    salary: '$100',
    email: 'henrtysc@gmail.com',
    designation: 'Prague'
  },
  {
    age: 1,
    date: '01/01/2020',
     salary: '$100',
status: 'ongoing',
    name: 'Margaret Bonh',
    email: 'margaretbon@gmail.com',
    designation: 'Prague'
  },
  {
    age: 1,
    date: '01/01/2020',
    name: 'Julien Zuana',
    status: 'pending',
   salary: '$100',
    email: 'zulien@gmail.com',
    designation: 'Prague'
  },
  {
    age: 1,
    date: '01/01/2021',
    status: 'pending',
    salary: '$100',
    name: 'Mardalena Pamela',
    email: 'marpam@gmail.com',
    designation: 'Prague'
  },
  {
    age: 1,
    status: 'pending',
    date: '01/01/2021',
    salary: '$100',
    name: 'Stepahie Chawratich',
    designation: 'prague',
    email: 'stephachar@gmail.com'
  },
  {
    age: 1,
    date: '01/01/2021',
    salary: '$100',
    name: 'Margareta Zhaini',
   status: 'ongoing',
        email: 'zhaini@gmail.com',
    designation: 'Prague'
  },
  {
    age: 1,
    status: 'ongoing',
    date: '06/01/2020',
     salary: '$100', 
    name: 'Zuana Margareta',
    designation: 'Prague',
    email: 'zuanamargareta@gmail.com'
  },
  {
    age: 1,
    date: '01/01/2020',
     salary: '$100',
    name: 'Katerina Gomes',
    status: 'ongoing',
    designation: 'Prague',
    email: 'katgom@google.com'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  ongoing: { color: 'primary' },
  pending: { color: 'warning' },
  professional: { color: 'success' }
}




const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Bill</TableCell>
              <TableCell>QT</TableCell>
              <TableCell>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
