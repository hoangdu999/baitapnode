const axios = require("axios");

async function fetchData() {
  const result = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
  );
  return result.data
}
module.exports = {
  getData: () => {
    return fetchData();
  },
};
