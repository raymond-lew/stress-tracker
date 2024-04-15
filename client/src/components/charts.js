import React from "react";
import Typography from "@material-ui/core/Typography";
import { CDBContainer } from "cdbreact";
import useRemoteService from "../hooks/useRemoteService";
import StateHandler from "./state-handler";
import { scaleData } from "../lib/scale";
import { Line, Doughnut } from "./create-charts";

function Charts() {
  const { userEntry } = useRemoteService([]);

  const flowRateIds = userEntry?.map((option) => option.entryId);
  const flowRates = userEntry?.map((option) => option.rate);

  const totalRates = flowRates.length;
  const uniqueRates = [...new Set(flowRates)];
  const countRates = [];

  uniqueRates.forEach((currRate) => {
    const numRates = flowRates.filter((rt) => rt === currRate);
    const pctRates = (numRates.length * 100) / totalRates;
    countRates.push(pctRates.toFixed(0));
  });

  const rdScale = scaleData.filter(({ rate }) => uniqueRates.includes(rate));
  const countDescriptions = rdScale?.map((option) => option.description);

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
                  <Line
                    label={flowRateIds}
                    data={flowRates}
                    title={"Stress Distribution"}
                  ></Line>
                </CDBContainer>
                <br></br>
                <CDBContainer>
                  <div class="d-flex justify-content-center">
                    <Typography variant="caption">Stress Count</Typography>
                  </div>
                  <Doughnut label={countDescriptions} data={countRates} />
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
