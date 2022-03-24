import React from "react";
import MainLayout from "../component/MainLayout";
import { useEffect, useState } from "react";
import { URL as url}  from '../../Constant';

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Box,
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

export default function Booking() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [plateNumber, setPlateNumber] = React.useState("");
  const [carbrand, setCarBrand] = React.useState("");
  const [dateTime, setDateTime] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [disableApplyButton, setDisableApplyButton] = React.useState(false);
  const axios = require("axios");
  useEffect(() => {
    if (
      fname !== "" &&
      lname !== "" &&
      email !== "" &&
      phoneNumber.length === 12 &&
      phoneNumber.length !== "" &&
      plateNumber !== "" &&
      carbrand !== null &&
      dateTime !== null &&
      description !== ""
    ) {
      setDisableApplyButton(false);
    } else {
      setDisableApplyButton(true);
    }
  }, [
    fname,
    lname,
    email,
    phoneNumber,
    plateNumber,
    carbrand,
    dateTime,
    description,
  ]);

  const handlePhoneChange = (event) => {
    var val = event.target.value.replace(/[^0-9]/g, "");
    if (val[0] === "0") {
      let a = val;
      a = val.slice(0, 3);
      a += val.length > 3 ? "-" + val.slice(3, 6) : "";
      a += val.length > 6 ? "-" + val.slice(6) : "";
      val = a;
    } else {
      val = "";
    }
    setPhoneNumber(val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data1 = {
      appointment_id: "id",
      task_id: ["task_id"],
      task_id: ["ol11poxwuro7CSGed711th"],
      user_id: "userid",
      create_at: "d",
      starts_at: "w",
      ends_at: "w",
      plate_no: plateNumber,
      brand: carbrand,
      description: description,
      name: fname + lname,
      status: "pending",
      firstName: fname,
      lastName: lname,
      telephone: phoneNumber,
      // email: email,
      // age: 22,
    };

    var data2 = {
      appointment_id: "gnIYRmddOJmdrf70oqwE",
      task_id: ["ol11poxwuro7CSGed7th"],
      user_id: "SxC0e6aMigpdRIP0Uybq",
      // create_at: {
      //   seconds: 1647059400,
      //   nanos: 0
      // },
      // starts_at: {
      //   seconds: 1647059400,
      //   nanos: 0
      // },
      // ends_at: {
      //   seconds: 1647174600,
      //   nanos: 0
      // },
      plate_no: plateNumber,
      brand: carbrand,
      description: description,
      status: "pending",
      name: fname + lname,
    };
    axios.post(url + "/a/create", data2).then((res) => {
      console.log(res);
      console.log(carbrand);
      // window.location.href = '/booking';
    });
  };

  return (
    <div>
      <MainLayout isCard={true}>
        <Card>
          <CardHeader title="Make Appointment" />
          <CardContent>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": { width: "25ch" },
                "& .MuiSelect-select": { width: "20ch" },
              }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} spacing={2}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    pb={2}>
                    <Grid>
                      <TextField
                        id="standard-multiline-flexible"
                        label="First Name"
                        maxRows={4}
                        // value={value}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        id="standard-multiline-flexible"
                        label="Last Name"
                        maxRows={4}
                        onChange={(e) => setLname(e.target.value)}
                        // value={value}
                        // onChange={handleChange}
                      />
                    </Grid>
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    pb={2}>
                    <Grid>
                      <TextField
                        id="standard-multiline-flexible"
                        label="Email"
                        maxRows={4}
                        onChange={(e) => setEmail(e.target.value)}
                        // value={value}
                        // onChange={handleChange}
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        id="standard-multiline-flexible"
                        label="TEL"
                        maxRows={4}
                        inputProps={{ maxLength: 12 }}
                        // value={value}
                        onChange={handlePhoneChange}
                        value={phoneNumber}
                      />
                    </Grid>
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    pb={2}>
                    <Grid>
                      <TextField
                        id="standard-multiline-flexible"
                        label="Plate Number"
                        maxRows={4}
                        onChange={(e) => setPlateNumber(e.target.value)}
                        // value={value}
                      />
                    </Grid>
                    <Grid>
                      <FormControl>
                        <Box>
                          <InputLabel id="demo-simple-select-label">
                            Car brand
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={carbrand}
                            label="car brand"
                            // onChange={handleChange}
                            onChange={(e) => setCarBrand(e.target.value)}>
                            <MenuItem value={"Honda"}>Honda</MenuItem>
                            <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
                            <MenuItem value={"Toyota"}>Toyota</MenuItem>
                            <MenuItem value={"Nissan"}>Nissan</MenuItem>
                          </Select>
                        </Box>
                      </FormControl>
                    </Grid>
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    pb={2}>
                    <Grid>
                      <TextField
                        id="standard-multiline-flexible"
                        label="Description"
                        maxRows={4}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        id="datetime-local"
                        label="Date-Time"
                        type="datetime-local"
                        defaultValue="2022-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => setDateTime(e.target.value)}
                      />
                    </Grid>
                    
                  </Stack>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent={{ xs: "center", sm: "flex-end" }}>
                <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
                  <Button>Cancel</Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={disableApplyButton}>
                    Confirm
                  </Button>
                </Stack>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </MainLayout>
    </div>
  );
}
