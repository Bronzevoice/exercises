function formatDate(oldFormatDate) {

  const date = new Date(oldFormatDate),
    month = (date.getMonth() + 1).toString(),
    day = date.getDate().toString(),
    year = date.getFullYear().toString(),

    // Comrpueba si el mes y el día tienen una sola cifra para añadirle un 0 antes en ese caso
    monthFormatted = month.length < 2 ? '0' + month : month,
    dayFormatted = day.length < 2 ? '0' + day : day,
    formattedDate = year + monthFormatted + dayFormatted;

  return formattedDate;
}<