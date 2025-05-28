// components/common/Label/StatusLabel.jsx
import React from 'react';
import { StatusLabel as StyledLabel } from './StatusLabel.styled'; // ✅ 이름 겹치지 않게 변경

const StatusLabel = ({ status }) => {
    const labelText = {
        soldout: '판매완료',
        onsale: '판매중'
    };

  if (!status || !labelText[status]) return null;

  return <StyledLabel className={status}>{labelText[status]}</StyledLabel>;
};

export default StatusLabel;