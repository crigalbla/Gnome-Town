// TODO async
const fetchService = async (url, town) => {
  if (!url) return null;

  let result = [];
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const array = data[town];
      result = array;
    });
  return result;
};

export { fetchService };
