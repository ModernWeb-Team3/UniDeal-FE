import axios from 'axios';

const PATH = '/posts';

export const getPostItem = async (postId) => {
  const response = await axios.get(`${PATH}/${postId}`);
  return response.data;
};
