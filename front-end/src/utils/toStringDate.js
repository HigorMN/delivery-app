const toStringDate = (data) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' };
  return new Date(data).toLocaleDateString('pt-BR', options);
};

export default toStringDate;
