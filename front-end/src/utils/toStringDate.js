const toStringDate = (dateString) => {
  const date = new Date(dateString);
  const day = (date.getDate()).toLocaleString('pt-BR', {
    maximumIntegerDigits: 2,
    minimumIntegerDigits: 2,
  });
  const month = date.getUTCMonth() + 1;
  const year = date.getFullYear().toString().slice(+'-2');
  const formatedDate = `${day}/${month}/${year}`;
  return formatedDate;
};

export default toStringDate;
