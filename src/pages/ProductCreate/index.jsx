import styled from 'styled-components';
import { useState } from 'react';

import Dropdown from '@/components/common/Dropdown';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import Button from '@/components/common/Button/Button';
import Status from './Status';

import location from '@/constants/location';
import category from '@/constants/category';

import Location from '@/assets/location.svg?react';
import CameraPlus from '@/assets/camera_plus.svg?react';
import X from '@/assets/x.svg?react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const ImageUpload = styled.div`
  width: 75px;
  height: 75px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ImgPreview = styled.img`
  width: 75px;
  border-radius: 3px;
`;

const Horizon = styled.div`
  display: flex;
  align-items: center;
`;

const HorizonImg = styled(Horizon)`
  gap: 7px;
`;

const HorizonInput = styled(Horizon)`
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
`;

const mockImg = [
  {
    id: 0,
    src: 'https://m.maniahouse.co.kr/web/product/big/202209/c5a2176bb886c540b8947a65cd386926.jpg',
  },
  {
    id: 1,
    src: 'https://mblogthumb-phinf.pstatic.net/20151125_5/cstory7_1448438743999Kb3zr_JPEG/1%B8%AE%B6%F4%C4%ED%B8%B6.jpg?type=w420',
  },
  {
    id: 2,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PZ6AKi0-pW0p9J14fQ3k53jtVkyeSXwq7Emm_IWm8URsJ8GDjIRMxFh5kse0cdeSZRs&usqp=CAU',
  },
];

const ProductCreate = () => {
  const [isSelling, setIsSelling] = useState(true);

  return (
    <Container>
      <HorizonImg>
        <ImageUpload>
          <CameraPlus />
        </ImageUpload>
        {mockImg.map((img) => (
          <div style={{ position: 'relative' }}>
            <X style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }} />
            <ImgPreview key={img.id} src={img.src} />
          </div>
        ))}
      </HorizonImg>

      <Status isSelling={isSelling} setIsSelling={setIsSelling} />

      <HorizonInput>
        <div>카테고리</div>
        <Dropdown options={category} name="카테고리" />
      </HorizonInput>

      {/* 제목 */}
      <Input />

      <div>
        <div style={{ marginBottom: '10px' }}>설명</div>
        <Textarea />
      </div>

      <HorizonInput>
        <div>거래 장소</div>
        <Map>
          <Location />
          장소 보기
        </Map>
        <Dropdown options={location} name="거래 장소" />
      </HorizonInput>

      <HorizonInput>
        <div>가격</div>
        <Input />원
      </HorizonInput>

      <Button fullWidth>상품 등록하기</Button>
    </Container>
  );
};
export default ProductCreate;
