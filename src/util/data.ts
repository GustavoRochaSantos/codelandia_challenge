import dayjs from "dayjs";

export const formatDataBr = (date: Date) => {
  return `${dayjs(date).format("DD/MM/YYYY")} às ${dayjs(date).format(
    "h:mm A"
  )}`;
};
