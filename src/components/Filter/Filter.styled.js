import { styled } from 'styled-components';

export const colourStylesCar = {
  control: styles => ({
    ...styles,
    backgroundColor: '#F7F7FB',
    borderRadius: '14px',
    borderColor: 'transparent',
    color: '#121417',
    fontSize: '18px',
    padding: '14px 18px',
    width: '224px',
    height: '48px',
    display: 'flex',
    alignContent: 'center',
  }),
  valueContainer: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  input: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    margin: '0px',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: '#121417',
    padding: '0px',
  }),
  menuList: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 0.20)',
    borderRadius: '14px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
  }),
};

export const colourStylesPrice = {
  control: styles => ({
    ...styles,
    backgroundColor: '#F7F7FB',
    borderRadius: '14px',
    borderColor: 'transparent',
    color: '#121417',
    fontSize: '18px',
    padding: '14px 18px',
    width: '125px',
    height: '48px',
    display: 'flex',
    alignContent: 'center',
  }),
  valueContainer: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  input: styles => ({
    ...styles,
    margin: '0px',
    padding: '0px',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    margin: '0px',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: '#121417',
    padding: '0px',
  }),
  menuList: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 0.20)',
    borderRadius: '14px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
  }),
};

export const Form = styled.form`
  padding: 42px 162px 50px 162px;
  display: flex;
  gap: 18px;
`;
export const Span = styled.span`
  padding-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  line-height: 1.28;
  font-weight: 500;
`;
export const InputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  border-color: transparent;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;

  &::placeholder {
    color: #121417;
  }
`;

export const InputTo = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  border-color: transparent;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;

  &::placeholder {
    color: #121417;
  }
`;

export const Button = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  border: transparent;
  margin-top: auto;

  &:hover {
    background: #0b44cd;
  }

  &:focus {
    background: #0b44cd;
  }
`;