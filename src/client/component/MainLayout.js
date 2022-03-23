import React from "react";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const MainLayout = forwardRef(({ children, isCard, ...others }, ref) => {
  return (
    <div>
      {isCard === true ? (
        <Box
          // pl={{ sm: 30, md: 28 }}
          pt={3}
          sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            variant="outlined"
            sx={{ border: "1px solid", borderColor: blue[300] + 75 }}>
            {children}
          </Card>
        </Box>
      ) : (
        <Box
          // pl={{ sm: 30, md: 30 }}
          pt={0.5}
          //   sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid>{children}</Grid>
        </Box>
      )}
    </div>
  );
});

MainLayout.propTypes = {
  children: PropTypes.node,
  isCard: PropTypes.bool,
};

export default MainLayout;
