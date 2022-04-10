import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Table, InputAdornment, TableBody, TableCell, TableHead, TablePagination, TableContainer } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useEffect, useState } from "react";
import UserUpdate from '../Page/UserUpdate';
import { URL as url } from '../Constant';
import LinearProgress from '@mui/material/LinearProgress';
import { filter } from "lodash";


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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'fname',
    numeric: false,
    disablePadding: true,
    label: 'ClientName',
  },
  {
    id: 'booking-date',
    numeric: true,
    disablePadding: false,
    label: 'Booking Date',
  },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'telephone',
    numeric: true,
    disablePadding: false,
    label: 'Telephone',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [open, setOpen] = React.useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [disableApplyButton, setDisableApplyButton] = React.useState(false);
  const { filterName, onFilterName } = props;

  useEffect(() => {
    if (fname !== '' && lname !== '') {
      setDisableApplyButton(false)
    } else {
      setDisableApplyButton(true)
    }
  }, [fname, lname]);
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      'fname': fname,
      'lname': lname,
      'username': username,
      'email': 'email',
      'avatar': avatar,
    }
    fetch('https://www.mecallapi.com/api/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            window.location.href = '/home';
          }
        }
      )
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        textAlign={'start'}
      >
        Appointments
      </Typography>
      <TextField
        sx={{ pr: 2 }}
        value={filterName}
        onChange={onFilterName}
        // label="ค้นหา"
        size="small"
        placeholder="ค้นหา"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        component="form" noValidate onSubmit={handleSubmit}
      >
        <DialogTitle id="alert-dialog-title">
          {"Adding new members to the crew"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="Fristname"
                label="FristName"
                variant="outlined"
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="Lastname"
                label="Lastname"
                variant="outlined"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                fullWidth
                id="Email"
                label="Email"
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid item xs={6}>
              <TextField
                fullWidth
                id="Age"
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="username"
                label="username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="avatar"
                label="avatar"
                variant="outlined"
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            disabled={disableApplyButton}
          //  onClick={handleClose} 
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Completed() {
  const axios = require("axios");
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  function createData(name, date, telephone, status, issue) {
    return { name, date, telephone, status, issue };
  }

  const rows = [
    createData('Frozen Bey', '09-03-2565', '089-999-8888', 'air-filter'),
    createData('Jin yoghurt', '09-03-2565', '080-000-0000', 'engine'),
    createData('Ter Ahe', '09-03-2565', '081-111-1111', 'port'),
    createData('Aet yoghurt', '09-03-2565', '086-666-6666', 'air'),
  ];
  useEffect(() => {
    UsersGet()
  }, []);
  const UsersGet = () => {
    axios.get(url + "/a/appointments/completed").then((res) => {
      console.log(res.data);
      const list = res.data.map((d) => d);
      setIsLoading(false)
      setUsers(list);
    });
  }
  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            UsersGet();
          }
        }
      )
  }
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };


  const filteredInvoice = applySortFilter(
    users,
    getComparator(order, orderBy),
    filterName
  );
  function applySortFilter(array, comparator, query) {
    console.log("applySortFilter");
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        array,
        (_user) => (_user.name).toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    return stabilizedThis.map((el) => el[0]);
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const UpdateUser = id => {
    window.location = '/detail'
  }
  const handleDetailClick = id => {
    window.location = '/detail/' + id
  }
  const formatDate = (d) => {
    const date = new Date(d * 1000).toLocaleString('fr-FR')
    return date
  }
  const formatPhone = (telephone) => {
    var val = telephone.replace(/[^0-9]/g, "");
    let a = val;
    a = val.slice(0, 3);
    a += val.length > 3 ? "-" + val.slice(3, 6) : "";
    a += val.length > 6 ? "-" + val.slice(6) : "";
    val = a;

    return val
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {isLoading && <LinearProgress />}
        <EnhancedTableToolbar
          filterName={filterName}
          onFilterName={handleFilterByName}
          numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={users.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              
              {filteredInvoice
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.fname);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.fname)}
                      role="checkbox"
                      // onClick={() => handleDetailClick(row.id)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.fname}
                      selected={isItemSelected}
                    >
                      <TableCell

                        padding="checkbox">
                        {/* <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        /> */}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {/* {row.fname + '\t' + row.lname} */}
                        {row.name}
                      </TableCell>
                      {/* <TableCell align="right">{row.lname}</TableCell> */}
                      <TableCell align="right">{formatDate(row.starts_at.seconds)}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{formatPhone(row.telephone)}</TableCell>
                      <TableCell align="right"> <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button disable={true}
                          onClick={() => handleDetailClick(row.appointment_id)}
                        >View</Button>
                        <Button color='error' onClick={() => UserDelete(row.id)}>Del</Button>
                      </ButtonGroup>
                      </TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </Box>
  );
}