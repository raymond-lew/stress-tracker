import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Input, Button, Table } from "reactstrap";
import Typography from "@material-ui/core/Typography";
import { scaleData } from "../lib/scale";
import { AuthContext } from "./state-provider";

const min = 0;
const max = 10;

const Create = () => {
  const [state, setState] = useState({ rate: "" });
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const userDisplayName = useContext(AuthContext);
  const dataRate = state.rate;

  const onChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const userData = {
    rate: dataRate,
    userName: userDisplayName,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/create", userData, {
        params: { username: userDisplayName },
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((error) => {
        setError(error);
      });

    setState({
      rate: "",
    });
  };

  if (error) {
    return (
      <div class="d-flex justify-content-center">
        <div class="alert alert-danger" role="alert">
          {error.message}
        </div>
      </div>
    );
  }

  if (message) {
    return (
      <div class="d-flex justify-content-center">
        <div class="alert alert-primary" role="alert">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <>
          <div className="h1">
            <Typography variant="h5" component="h5" data-test="heading">
              Add new entry
            </Typography>
          </div>
        </>
        <br></br>
        <>
          <Table class="table" size="sm">
            <tbody>
              {scaleData.map((item) => {
                return (
                  <tr>
                    <td align="center">{item.rate}</td>
                    <td> = </td>
                    <td>{item.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
        <div class="cl1">
          Using the scale above, enter the number corresponding to your feeling
        </div>
        <br></br>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <Form onSubmit={onSubmit}>
              <Input
                name="rate"
                className="form-control"
                value={state.rate}
                onChange={onChange}
                type="number"
                autoFocus
                required
              />
              <br></br>
              <Button color="primary">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
