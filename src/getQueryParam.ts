const getQueryParam = (param: string): string | null => {
  return new URLSearchParams(location.search).get(param);
};

export default getQueryParam;
