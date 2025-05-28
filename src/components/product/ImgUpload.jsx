import { useRef, useState } from 'react';
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
  height: 75px;
  border-radius: 3px;
  object-fit: cover;
  object-position: center;
`;

const HorizonImg = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ImgUpload = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      src: URL.createObjectURL(file),
      file,
    }));

    setImages((prev) => {
      const totalImages = [...prev, ...newImages];
      return totalImages.slice(0, 3); // 최대 3개만 유지
    });
  };

  const handleDeleteImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleUploadClick = () => {
    if (images.length >= 3) {
      alert('이미지는 최대 3개까지 업로드할 수 있습니다.');
      return;
    }
    fileInputRef.current.click();
  };

  return (
    <HorizonImg>
      <Upload onClick={handleUploadClick}>
        <CameraPlus />
      </Upload>
      <input
        type="file"
        multiple
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {images.map((img) => (
        <div key={img.id} style={{ position: 'relative' }}>
          <X
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}
            onClick={() => handleDeleteImage(img.id)}
          />
          <ImgPreview src={img.src} />
        </div>
      ))}
    </HorizonImg>
  );
};

export default ImgUpload;
