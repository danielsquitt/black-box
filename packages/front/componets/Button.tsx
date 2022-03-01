import styled from 'styled-components';

const Button = styled.button`
  margin: 0 0.5em;
  appearance: none;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  &.primary {
    background-color: ${(p) => p.theme.color.pallet.primary.main};
    &:hover {
      background-color: ${(p) => p.theme.color.pallet.primary.light};
    }
    &:active {
      background-color: ${(p) => p.theme.color.pallet.primary.dark};
      box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
    }
  }
  &.secondary {
    background-color: ${(p) => p.theme.color.pallet.secondary.main};
    &:hover {
      background-color: ${(p) => p.theme.color.pallet.secondary.light};
    }
    &:active {
      background-color: ${(p) => p.theme.color.pallet.secondary.dark};
      box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
    }
  }
  &.success {
    background-color: ${(p) => p.theme.color.pallet.success.main};
    &:hover {
      background-color: ${(p) => p.theme.color.pallet.success.light};
    }
    &:active {
      background-color: ${(p) => p.theme.color.pallet.success.dark};
      box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
    }
  }
  &.danger {
    background-color: ${(p) => p.theme.color.pallet.danger.main};
    &:hover {
      background-color: ${(p) => p.theme.color.pallet.danger.light};
    }
    &:active {
      background-color: ${(p) => p.theme.color.pallet.danger.dark};
      box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
    }
  }
  &.warning {
    background-color: ${(p) => p.theme.color.pallet.warning.main};
    &:hover {
      background-color: ${(p) => p.theme.color.pallet.warning.light};
    }
    &:active {
      background-color: ${(p) => p.theme.color.pallet.warning.dark};
      box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
    }
  }
  &.info {
    background-color: ${(p) => p.theme.color.pallet.info.main};
    &:hover {
      background-color: ${(p) => p.theme.color.pallet.info.light};
    }
    &:active {
      background-color: ${(p) => p.theme.color.pallet.info.dark};
      box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
    }
  }
`;

export default Button;
