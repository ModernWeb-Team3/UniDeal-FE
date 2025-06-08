import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 5px;

    li {
      margin: 0 4px;
      button:before {
        font-size: 10px;
        color: #999;
      }

      &.slick-active button:before {
        color: #000;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const ProductImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    touchThreshold: 3,
  };

  return (
    <StyledSlider {...settings}>
      {images.map((src, idx) => (
        <ImageWrapper key={idx}>
          <img src={src} alt={`상품 이미지 ${idx + 1}`} />
        </ImageWrapper>
      ))}
    </StyledSlider>
  );
};

export default ProductImageSlider;
