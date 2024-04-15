import React from "react";
import { Table } from "reactstrap";
import Typography from "@material-ui/core/Typography";
import useRemoteService from "../hooks/useRemoteService";
import StateHandler from "./state-handler";
import { dateOptions } from "../lib/dateOptions";



function Entries() {
  const { userEntry } = useRemoteService([]);

  return (
    <>
      <StateHandler />
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            {userEntry?.length > 0 && (
              <>
                <div className="h1">
                  <Typography variant="h5" component="h5" data-test="heading">
                    Record your feeling day-to-day
                  </Typography>
                </div>
                <br></br>
                <Table class="table" size="sm">
                  <tbody>
                    {userEntry.toReversed().map((entry, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {new Date(entry.dateSent).toLocaleDateString(
                              "en-US",
                              dateOptions
                            )}
                          </td>
                          <td>{entry.rate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Entries;
