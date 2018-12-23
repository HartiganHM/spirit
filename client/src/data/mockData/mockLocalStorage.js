export default {
  getItem: key => localStorage.Storage[key],
  removeItem: key => delete localStorage.Storage[key],
  Storage: {
    'spirit-token-987': 'abcdefghijk987654321'
  }
};