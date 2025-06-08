import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button/Button';
import logo from '@/assets/logo.svg';

// 이미지 import
import mockBook1 from '@/assets/mock_book.svg';
import mockBook2 from '@/assets/mock_book2.svg';
import mockBook3 from '@/assets/mock_book3.svg';
import mockBook4 from '@/assets/mock_book4.svg';
import mockCloth from '@/assets/mock_cloth.svg';
import mockEtc from '@/assets/mock_etc.svg';
import mockIt from '@/assets/mock_it.svg';
import { useNavigate } from 'react-router-dom';

//----- Styled Components------

const Wrapper = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const FixedHeader = styled.div`
  flex-shrink: 0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Logo = styled.img`
  width: 120px;
  object-fit: contain;
  margin: 16px 0;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Location = styled.div`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const SearchIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  margin-top: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 16px 0;
`;

const GuideText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ScrollArea = styled.div`
  max-height: calc(112px * 5);
  overflow-y: auto;
  padding: 0 16px;
`;

const FixedFooter = styled.div`
  flex-shrink: 0;
  position: sticky;
  bottom: 0;
  background: #fff;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #eee;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 80px;
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 16px 0;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background: #ccc;
  border-radius: 4px;
  margin-right: 12px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SubInfo = styled.div`
  font-size: 13px;
  color: #777;
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const LocationDropdown = styled.div`
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-top: 10px;
`;

const LocationList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  max-height: 160px;
  overflow-y: auto;
`;

const LocationItem = styled.li`
  margin-bottom: 6px;
  cursor: pointer;
  &:hover {
    color: #1d9bf0;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('가천대학교');
  const [isPressed, setIsPressed] = useState(false);

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const nav = useNavigate();

  const categories = ['책', '의류', '전공물품', '전자기기', '기타'];
  const locations = [
    '가천대학교',
    'AI공학관',
    '비전타워',
    '중앙도서관',
    '교육대학원',
    '공과대학1',
    '공과대학2',
    '한의과대학',
    '전자정보도서관',
    '글로벌센터',
    '법과대학',
    '생활관',
    '가천대역',
  ];

  const mockProducts = [
    {
      id: 1,
      category: '책',
      title: '운영체제 책 팝니다',
      location: 'AI공학관',
      price: '10,000원',
      imageUrl: mockBook1,
    },
    {
      id: 2,
      category: '책',
      title: '콜잉책 팔아요',
      location: '전자정보도서관',
      price: '18,000원',
      imageUrl: mockBook2,
    },
    {
      id: 3,
      category: '책',
      title: '전공책 판매함ㅁㅁㅁㅁ',
      location: '중앙도서관',
      price: '13,000원',
      imageUrl: mockBook3,
    },
    {
      id: 4,
      category: '책',
      title: '생체재료학 전공책 팔아요',
      location: '글로벌센터',
      price: '12,000원',
      imageUrl: mockBook4,
    },
    {
      id: 5,
      category: '의류',
      title: '후드티 살 사람',
      location: '가천대학교',
      price: '8,000원',
      imageUrl: mockCloth,
    },
    {
      id: 6,
      category: '전자기기',
      title: '중고 에어팟 팝니다',
      location: '전자정보도서관',
      price: '50,000원',
      imageUrl: mockIt,
    },
    {
      id: 7,
      category: '기타',
      title: '미니 선풍기',
      location: '비전타워',
      price: '12,000원',
      imageUrl: mockEtc,
    },
  ];

  const handleWriteClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    // 추가 동작 가능
    nav('/product/new');
  };

  return (
    <Wrapper>
      <FixedHeader>
        <HeaderLogo>
          <Logo src={logo} alt="Logo" />
        </HeaderLogo>

        <TopRow>
          <Location onClick={() => setShowLocation((prev) => !prev)}>{selectedLocation} ▾</Location>
          <SearchIcon onClick={toggleSearch}>🔍</SearchIcon>
        </TopRow>

        {showLocation && (
          <LocationDropdown>
            <LocationList>
              {locations.map((loc) => (
                <LocationItem
                  key={loc}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setShowLocation(false);
                  }}
                >
                  {loc}
                </LocationItem>
              ))}
            </LocationList>
          </LocationDropdown>
        )}

        {showSearch && <SearchInput type="text" placeholder="상품명으로 검색" autoFocus />}

        <FilterWrapper>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'secondary'}
              size="sm"
              rounded="md"
              textColor={selectedCategory === category ? '#fff' : '#333'}
              borderColor="#ccc"
              onClick={() => setSelectedCategory((prev) => (prev === category ? '' : category))}
            >
              {category}
            </Button>
          ))}
        </FilterWrapper>

        <GuideText>판매중인 물품을 확인해보세요</GuideText>
      </FixedHeader>

      <ScrollArea>
        <ItemList>
          {mockProducts
            .filter((item) => !selectedCategory || item.category === selectedCategory)
            .map((item) => (
              <Item
                key={item.id}
                onClick={() => nav(`/product/${item.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <Thumbnail as="img" src={item.imageUrl} alt={item.title} />
                <ItemInfo>
                  <Title>{item.title}</Title>
                  <SubInfo>{item.location}</SubInfo>
                  <BottomRow>
                    <Price>{item.price}</Price>
                  </BottomRow>
                </ItemInfo>
              </Item>
            ))}
        </ItemList>
      </ScrollArea>

      <FixedFooter>
        <Button
          variant="primary"
          size="sm"
          rounded="full"
          onClick={handleWriteClick}
          style={{
            transform: isPressed ? 'scale(0.96)' : 'scale(1)',
            backgroundColor: isPressed ? '#DCEEFF' : '#2E8EFF',
            transition: 'all 0.1s ease-in-out',
          }}
        >
          + 글쓰기
        </Button>
      </FixedFooter>
    </Wrapper>
  );
};

export default Home;
