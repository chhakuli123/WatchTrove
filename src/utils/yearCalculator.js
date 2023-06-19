export const calculateYearsAgo = (timeStamp) => {
  const currentTime = new Date();
  const pastTime = new Date(timeStamp);
  const yearDifference = currentTime.getFullYear() - pastTime.getFullYear();

  if (yearDifference === 0) {
    const monthDifference = currentTime.getMonth() - pastTime.getMonth();
    if (monthDifference === 0) {
      const dayDifference = currentTime.getDate() - pastTime.getDate();
      if (dayDifference === 0) {
        return "Today";
      } else {
        return `${dayDifference} day${dayDifference === 1 ? "" : "s"} ago`;
      }
    } else {
      return `${monthDifference} month${monthDifference === 1 ? "" : "s"} ago`;
    }
  } else {
    return `${yearDifference} year${yearDifference === 1 ? "" : "s"} ago`;
  }
};
