import "./Table.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Viewemp = () => {
  var [value, setValue] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      console.log(response.data.users);
      setValue((value = response.data.users));
    });
  }, []);
  return (
    <div>
      <Table>
        <TableHead id="th">
          <TableRow className="form">
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((data, ind) => {
            return (
              <TableRow>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.age}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Viewemp;
