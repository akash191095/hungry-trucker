import React from "react";
import { Marker, Tooltip } from "react-leaflet";
import { Typography } from "@material-ui/core";

const TooltipMarker = ({ content: { name, address, type, show, position } }) =>
  show && (
    <Marker position={position}>
      <Tooltip>
        <div style={{ padding: "1em 2em" }}>
          <Typography component="p" variant="body2">
            {name}
          </Typography>
          <Typography component="p" variant="body2">
            {address}
          </Typography>
          <Typography component="p" variant="body2">
            {type}
          </Typography>
        </div>
      </Tooltip>
    </Marker>
  );

export default TooltipMarker;
