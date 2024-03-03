
import useRemoteService from "../hooks/useRemoteService";
import { scaleData } from "../lib/scale";

function DataSetHandler() {
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

  const dataLine = {
    labels: flowRateIds,
    datasets: [
      {
        label: "Flow Distribution",
        backgroundColor: "#0d98ba",
        borderColor: "#0d98ba",
        data: flowRates,
      },
    ],
  };

  const dataDoughnut = {
    labels: countDescriptions,
    datasets: [
      {
        backgroundColor: [
          "#a51d6e",
          "#635d11",
          "#ff8f00",
          "#9b59b6",
          "#e74c3c",
          "#c90016",
          "#a52a2a",
          "#ff0f87",
          "#95a5a6",
          "#34495e",
          "#a5981d",
          "3808080",
        ],
        borderColor: "#b6d7a8",
        data: countRates,
      },
    ],
  };
  return { dataLine, dataDoughnut };
}

export default DataSetHandler;
