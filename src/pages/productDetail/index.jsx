import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return <div>상품 상세페이지: {id}</div>;
};

export default ProductDetail;
