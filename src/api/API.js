export const fetchCovidData = async () => {
  return await fetch("https://api.covidtracking.com/v1/states/info.json", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};
