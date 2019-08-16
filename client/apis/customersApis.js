export const getCustomer = id => ({
  method: 'GET',
  url: `/customers/${id}`,
});
