import React from "react";
import { TableCell } from "@mui/material";

const RestImageResolver = ({ row }) => {
  console.log(row,"image");
  return (
    <TableCell padding="normal">
      <img
        src={row.driverImage ? row.driverImage : null}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    </TableCell>
  );
};

export default RestImageResolver;
