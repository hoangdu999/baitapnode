const axios = require("axios");

async function fetchData() {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  return result.data;
}
module.exports = {
  getData: () => {
    return fetchData();
  },
};
