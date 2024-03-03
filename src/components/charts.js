import React from "react";
import Typography from "@material-ui/core/Typography";
import Chart from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import useRemoteService from "../hooks/useRemoteService";
import StateHandler from "./state-handler";
import DataSetHandler from "./create-charts";

function Charts() {
  const { userEntry } = useRemoteService([]);
  const { dataLine, dataDoughnut } = DataSetHandler();

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
                    Visualize your stress
                  </Typography>
                </div>
                <br></br>
                <CDBContainer>
                  <Line data={dataLine} options={{ responsive: true }} />
                </CDBContainer>
                <br></br>
                <CDBContainer>
                  <div class="d-flex justify-content-center">
                    <Typography variant="caption">Stress Count</Typography>
                  </div>
                  <Doughnut
                    data={dataDoughnut}
                    options={{ responsive: true }}
                  />
                </CDBContainer>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Charts;
