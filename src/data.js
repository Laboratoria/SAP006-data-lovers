export const allFilters = (data) => {
    const resultadoAZ = data.sort((a, z) => a.name > z.name ? 1 : -1)
    return resultadoAZ;
  };

export default allFilters