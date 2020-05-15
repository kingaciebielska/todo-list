import styled from 'styled-components'
import { color, background, shadow } from '../../../styles/colors'
import { device, size } from '../../../styles/devices'

export const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  box-shadow: ${shadow.primary};
  background-image: ${background.default};
  max-width: 90%;
  width: ${size.tablet};
  margin: 1rem auto;
  border-radius: 20px;
  padding: 1rem;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  line-height: 1.7rem;
  font-size: 1.2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  color: ${color.white};
  transition: all .3s;
  width: 100%;

  @media ${device.tablet} {
    width: 40%;
    margin-right: 5%;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7rem;
    font-size: 1.2rem;
  }

  &:focus {
    border-bottom: 2px solid rgba(255, 255, 255, 1);
    transition: all .3s;
  }
`

export const StyledButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  line-height: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  transition: all .3s;

  &:hover {
    color: ${color.white};
    transition: all .3s;
  }
`
