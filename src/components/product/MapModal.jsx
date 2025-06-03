import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 15;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  font-size: 14px;
  gap: 20px;
  padding: 15px;
`;

const MapModal = ({ onClose }) => {
  const mapRef = useRef(null);
  const APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`;
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const mapContainer = mapRef.current;
          const mapOption = {
            center: new window.kakao.maps.LatLng(37.45094960591398, 127.12898483119197),
            level: 3,
          };
          new window.kakao.maps.Map(mapContainer, mapOption);
        });
      } else {
        console.error('Kakao Maps SDK 로드 실패');
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <Container onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <div ref={mapRef} style={{ width: '400px', height: '700px' }} />
      </Content>
    </Container>
  );
};

export default MapModal;
