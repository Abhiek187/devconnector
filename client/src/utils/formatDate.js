// Format the date using the browser's default locale
const formatDate = (date) => new Intl.DateTimeFormat().format(new Date(date));

export default formatDate;
