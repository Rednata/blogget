const formatDate = date => {
  console.log('date===', date);
  const d = date * 1000;
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const temp = new Intl.DateTimeFormat('ru', options).format(new Date(d));
  console.log('temp: ', temp);

  return new Intl.DateTimeFormat('ru', options).format(new Date(d));
};

export default formatDate;
