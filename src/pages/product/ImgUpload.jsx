import styled from 'styled-components';
import CameraPlus from '@/assets/camera_plus.svg?react';
import X from '@/assets/x.svg?react';

const Upload = styled.div`
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

const HorizonImg = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
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

const ImgUpload = () => {
  return (
    <HorizonImg>
      <Upload>
        <CameraPlus />
      </Upload>
      {mockImg.map((img) => (
        <div style={{ position: 'relative' }}>
          <X style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }} />
          <ImgPreview key={img.id} src={img.src} />
        </div>
      ))}
    </HorizonImg>
  );
};

export default ImgUpload;
