export const search = (text) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search`,
    data: {searchText: text}
  });
};
