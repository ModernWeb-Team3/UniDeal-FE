import Dropdown from '@/components/common/Dropdown';
import location from '@/constants/location';

const ProductCreate = () => {
  console.log(location);
  return (
    <div>
      <Dropdown options={location} />
    </div>
  );
};
export default ProductCreate;
