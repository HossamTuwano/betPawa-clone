var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "2b78ff358adf4edf14a72990fef65e9d");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://v3.football.api-sports.io/{endpoint}", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
