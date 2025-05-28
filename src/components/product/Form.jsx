import { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '@/components/common/Dropdown';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import MapModal from './Map';
import location from '@/constants/location';
import category from '@/constants/category';
import Location from '@/assets/location.svg?react';

const Horizon = styled.div`
  display: flex;
  align-items: center;
  :last-child {
    margin-left: auto;
  }
`;

const Map = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background-color: #dceeff;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
`;

const Form = ({ productData, setProductData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(productData);

  const handleChange = (field) => (e) => {
    setProductData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      {isModalOpen && <MapModal onClose={() => setIsModalOpen(false)} />}

      <Horizon>
        <div>카테고리</div>
        <Dropdown
          options={category}
          name="카테고리"
          origValue={productData.category}
          editValue={(value) => setProductData((prev) => ({ ...prev, category: value }))}
        />
      </Horizon>

      <Input
        style={{ marginRight: '5px', border: '2px solid #bdbdbd' }}
        placeholder="상품명을 입력하세요."
        value={productData.name}
        onChange={handleChange('name')}
      />

      <div>
        <div style={{ marginBottom: '10px' }}>설명</div>
        <Textarea value={productData.detail} onChange={handleChange('detail')} />
      </div>

      <Horizon>
        <div>거래 장소</div>
        <Map onClick={() => setIsModalOpen(true)}>
          <Location />
          장소 보기
        </Map>
        <Dropdown
          options={location}
          name="거래 장소"
          origValue={productData.location}
          editValue={(value) => setProductData((prev) => ({ ...prev, location: value }))}
        />
      </Horizon>

      <Horizon>
        <div>가격</div>
        <Input
          style={{ width: '150px', marginRight: '5px', border: '2px solid #bdbdbd' }}
          type="number"
          placeholder="가격"
          value={productData.price}
          onChange={handleChange('price')}
        />
        원
      </Horizon>
    </>
  );
};

export default Form;
