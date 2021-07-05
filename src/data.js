export const orderAZ = (data) => {
  const resultsAZ = data.sort((a, z) => a.name < z.name ? 1 : -1)
  return resultsAZ;
};
export const orderZA = (data) => {
  const resultsZA = data.sort((a, z) => a.name > z.name ? 1 : -1)
  return resultsZA
};

export default orderAZ
export default orderZA