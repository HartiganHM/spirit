export default {
  getItem: () => 'abcdefghijk987654321',
  removeItem: key => delete localStorage.Storage[key],
  Storage: {
    'spirit-token-987': 'abcdefghijk987654321'
  }
};