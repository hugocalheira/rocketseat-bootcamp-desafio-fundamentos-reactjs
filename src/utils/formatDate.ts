const formatDate = (date: Date): string =>
  new Date(date).toLocaleDateString()

export default formatDate;
