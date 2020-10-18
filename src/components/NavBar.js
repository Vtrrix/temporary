import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
} from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function NavBar(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ background: "#2e003e" }}>
          <Toolbar>
            <Typography
              variant="h6"
              style={{
                color: "#e4dcf1",
                fontWeight: "bold",
                fontSize: "30px",
                display: "flex",
              }}
            >
              <p>30 Days of Google Cloud</p>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
