// Format the date using the browser's default locale
// Convert - to / and remove the time to prevent dates from being off by one day
// in time zones behind GMT
const formatDate = (date) =>
  new Intl.DateTimeFormat().format(
    new Date(date.replace(/-/g, "/").replace(/T.+/, ""))
  );

export default formatDate;
