const fetchService = (url, town) => {
  if (!url) return null;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const array = data[town];
    });
  return '';
};

export { fetchService };
