import styled from 'styled-components';

import Dropdown from '@/components/common/Dropdown';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import Button from '@/components/common/Button/Button';

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
`;

const Form = () => {
  return (
    <>
      <Horizon>
        <div>카테고리</div>
        <Dropdown options={category} name="카테고리" />
      </Horizon>

      {/* 제목 */}
      <Input />

      <div>
        <div style={{ marginBottom: '10px' }}>설명</div>
        <Textarea />
      </div>

      <Horizon>
        <div>거래 장소</div>
        <Map>
          <Location />
          장소 보기
        </Map>
        <Dropdown options={location} name="거래 장소" />
      </Horizon>

      <Horizon>
        <div>가격</div>
        <Input />원
      </Horizon>
    </>
  );
};

export default Form;
