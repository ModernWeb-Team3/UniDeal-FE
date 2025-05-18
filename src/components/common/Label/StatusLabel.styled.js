// components/common/Label/StatusLabel.styled.js

import styled from 'styled-components';

export const StatusLabel = styled.span`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    
    &.soldout{
        background-color: #12CE66; /* Green */
    }
    
    &.onsale{
        background-color: #FFCC3C; /* Orange */
    }
`;