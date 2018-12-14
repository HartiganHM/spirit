const getKeyFromLS = () => {
  const userKey = localStorage.getItem('spirit-token-987');
  return userKey;
};

export default getKeyFromLS;
