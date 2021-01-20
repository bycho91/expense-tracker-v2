const formatDate = (date) => {
  const d = new Date(date);

  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate() + 1}`;
  let year = d.getFullYear();

  return [month, day, year].join("/");
};

export default formatDate;
