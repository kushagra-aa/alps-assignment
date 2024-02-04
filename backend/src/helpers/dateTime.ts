export const formatDate = (inputDate: string) =>
  formatDateString(
    new Date(inputDate).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  );

const formatDateString = (inputDate: string): string => {
  const dateParts = inputDate.split(" ");
  const month = dateParts[0];
  const day = dateParts[1].slice(0, 2); // Extract only the first two digits of the day
  const year = dateParts[2];

  return `${day}-${month}-${year}`;
};
