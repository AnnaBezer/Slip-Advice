  const getCurrentDateFormatted = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  //   const formattedToday = dd + '/' + mm + '/' + yyyy;
  const formattedToday = `${dd}/${mm}/${yyyy} at ${hour}:${minute}`;

  return formattedToday;
};

export default getCurrentDateFormatted