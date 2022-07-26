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
    age: 32,
    status: 'current',
    date: '01/01/2020',
    name: 'Henry Schartz',
    salary: '$5000',
    email: 'henrtysc@gmail.com',
    designation: 'Editor'
  },
  {
    age: 22,
    date: '01/01/2020',
    salary: '$4000',
    status: 'current',
    name: 'Margaret Bonh',
    email: 'margaretbon@gmail.com',
    designation: 'Sub-Editor'
  },
  {
    age: 22,
    date: '01/01/2020',
    name: 'Julien Zuana',
    status: 'current',
    salary: '$4000',
    email: 'zulien@gmail.com',
    designation: 'Sub-Editor'
  },
  {
    age: 21,
    date: '01/01/2021',
    status: 'current',
    salary: '$1900',
    name: 'Mardalena Pamela',
    email: 'marpam@gmail.com',
    designation: 'Office Desk Executive'
  },
  {
    age: 32,
    status: 'current',
    date: '01/01/2021',
    salary: '$1076.28',
    name: 'Stepahie Chawratich',
    designation: 'Office Desk Executive',
    email: 'stephachar@gmail.com'
  },
  {
    age: 33,
    date: '01/01/2021',
    salary: '3000',
    name: 'Margareta Zhaini',
    status: 'current',
        email: 'zhaini@gmail.com',
    designation: 'Business Executive'
  },
  {
    age: 31,
    status: 'current',
    date: '06/01/2020',
    salary: '$3000',
    name: 'Zuana Margareta',
    designation: 'Business Executive',
    email: 'zuanamargareta@gmail.com'
  },
  {
    age: 32,
    date: '01/01/2020',
    salary: '$3000',
    name: 'Katerina Gomes',
    status: 'current',
    designation: 'Accountant',
    email: 'katgom@google.com'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
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
              <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
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
