export const getRooms = async () => {
  const url = `https://apidojo-booking-v1.p.rapidapi.com/properties/get-hotel-photos?hotel_ids=1950932&languagecode=en-us`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e1d7df9bb9msh27f3ba159a7569dp1b7ce4jsn57d8bd167c7c",
      "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
    },
  };

  let finalArray = [];
  await fetch(url, options)
    .then(async (response) => await response.json())
    .then(async (response) => {
      let prefix = response.url_prefix;
      let data = Object.values(response.data);
      data.forEach(async (item) => {
        item.forEach((room) => {
          let id = room[2];
          let url = `${prefix}${room[6]}${[0]}`;
          finalArray = [...finalArray, (data = { id: id, url: url })];
        });
      });
    })
    .catch((err) => console.error(err));
  return finalArray;
};
