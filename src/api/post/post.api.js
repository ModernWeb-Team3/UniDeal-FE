import api from '@/api/api';

const PATH = '/posts';

// GET 게시물 상세 조회
export const getPostItem = async (postId) => {
  const response = await api.get(`${PATH}/${postId}`);
  return response.data;
};
