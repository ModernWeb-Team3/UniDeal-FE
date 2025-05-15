import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Up from '@/assets/chevron_up.svg?react';
import Down from '@/assets/chevron_down.svg?react';

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const DropdownButton = styled.div`
  outline: none;
  width: 144px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border: 2px solid #2e8eff;
  border-radius: 5px;
`;

const DropdownList = styled.div`
  position: absolute;
  max-height: 135px;
  overflow-y: auto;
  top: calc(100% - 7px);
  margin-top: 5px;
  z-index: 1000;
  border: 2px solid #2e8eff;
  border-radius: 5px;
`;

const DropdownItem = styled.div`
  padding: 10px;
  width: 140px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
`;

const Dropdown = ({ origValue, editValue, options, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(origValue);
  const dropdownRef = useRef < HTMLDivElement > null;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (label, value) => {
    setIsOpen(false);
    setSelectedValue(label);
    editValue(value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedValue(origValue);
  }, [origValue]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle} $hasValue={!!selectedValue}>
        {selectedValue || name}
        {isOpen ? <Up style={{ cusor: 'pointer' }} /> : <Down style={{ cusor: 'pointer' }} />}
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              role="option"
              tabIndex={0}
              onClick={() => handleSelect(option.label, option.value)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
