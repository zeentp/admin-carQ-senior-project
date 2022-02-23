import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const axios = require("axios");
const url = "http://192.168.1.53:8080";

// axios
//   .get("http://192.168.1.53:8080/v1/get?id=mechanic_1")
//   .then(function (response) {
//     // handle success
//     // console.log(response);
//   });
const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  paper: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
}));

function createData(name, status, email, telephone) {
  return {
    name,
    status,
    email,
    telephone,
  };
}

const rows = [
  // createData("Cupcake", 305, "avaliable", 67, 4.3),
  // createData("Donut", 452, "avaliable", 51, 4.9),
  // createData("Eclair", 262, "avaliable", 24, 6.0),
  // createData("Frozen yoghurt", 159, "avaliable", 24, 4.0),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
  return order === "desc"
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
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "name",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "status",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "email",
  },
  // {
  //   id: "protein",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Protein (g)",
  // },
  {
    id: "telephone",
    numeric: true,
    disablePadding: false,
    label: "Telephone",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) =>
          headCell.label === "name" ? (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                Name{" "}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              {" "}
              {headCell.label}
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const { numSelected } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePostData = () => {
    const data = {
      id: "55555555",
      status: false,
      firstName: "1234",
      lastName: "54545",
      telephone: "085-555-555",
      email: "janedoe@gmail.com",
      gender: "female",
      age: 20,
    };
    axios.post(url + "/create", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Accepting an appointment card"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
          {/* <Grid container spacing={{ xl: 2, md: 3 }}>
          <Grid  item xl={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          </Grid>
          <Grid item xl={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          </Grid>
          </Grid> */}
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
                // onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="Lastname"
                label="Lastname"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="Email"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Age3"
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handlePostData} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
        // <Button justifyContent="flex-end" variant="contained">Add +</Button>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        // <Tooltip title="Filter list">
        //   <IconButton>
        // {/* <Button justifyContent="flex-end" variant="contained">Add +</Button> */}
        //     <FilterListIcon />
        //   </IconButton>
        // </Tooltip>

        <Button
          justifyContent="flex-end"
          sx={{ width: 80 }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add +
        </Button>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = listOfMechanic.map((n) => n.name);
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
        selected.slice(selectedIndex + 1)
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [listOfMechanic, setListOfMechanic] = useState(
    []
    // id: "",
    // firstName: "",
    // lastName: "",
    // email: "",
    // gender: "",
    // age: "",
    // status: "",
    // telephone: "",
  );
  useEffect(() => {
    //Get All Trip
    axios.get(url + "/mechanics").then((res) => {
      console.log(res.data);
      const list = res.data.map((d) => d);
      setListOfMechanic(list);
    });
  }, []);
  // const getdata = async () => {
  //   const url = "http://192.168.1.53:8080/mechanics";
  //   //   const await axios.get(url).then(res => {
  //   //       console.log(res.data);
  //   //       const datas = res.data.map((d)=> d)
  //   //       setData(datas)

  //   // })
  //   const a =await axios({
  //     method: "get",
  //     url: url,
  //   }).then(async (res) => {
  //     await setListOfMechanic([res.data]);
  //   }).then(()=>{
  //     console.log(listOfMechanic);
  //   })

  return (
    <Box sx={{ pl: 40, pt: 15 }} className={classes.box}>
      <Paper sx={{ mb: 2 }} className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={listOfMechanic.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(listOfMechanic, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.firstName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  // const b = listOfMechanic.map((l) => {
                  //   console.log(listOfMechanic);
                  // });
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.firstName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.firstName}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {/* {console.log(row.firstName)} */}
                        {row.firstName + "\t" + row.lastName}
                      </TableCell>
                      <TableCell align="right">
                        {row.status === true ? "avaliable" : "unavaliable "}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      {/* <TableCell align="right">{row.protein}</TableCell> */}
                      <TableCell align="right">{row.telephone}</TableCell>
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
          count={listOfMechanic.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
