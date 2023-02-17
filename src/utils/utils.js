const paginate = (foods) => {
  const itemsPerPage = 4;
  const pages = Math.ceil(foods.length / itemsPerPage);

  const newfoods = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return foods.slice(start, start + itemsPerPage);
  });
  return newfoods;
};

export default paginate;
