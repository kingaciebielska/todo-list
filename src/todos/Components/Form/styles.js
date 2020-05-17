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
  line-height: 1.2rem;
  font-size: 0.9rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  color: ${color.white};
  padding-top: 1rem;
  transition: all .3s;
  width: 100%;

  @media ${device.mobile} {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${device.tablet} {
    width: 40%;
    margin-right: 5%;
    font-size: 1.2rem;
    line-height: 1.7rem;
    padding-top: 0;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.2rem;
    font-size: 0.9rem;

    @media ${device.mobile} {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    @media ${device.tablet} {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
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
  border: none;
  transition: all .3s;

  &:hover {
    opacity: 0.8;
    transition: all .3s;
  }
`

export const PlusImage = styled.img`
  width: 30px;
  filter: invert(1);
`

export const ErrorMessage = styled.div`
  ${props => props.isAnimated && 'animation: shake 0.9s cubic-bezier(.36,.07,.19,.97) both;'}
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  background-color: ${color.error};
  width: 350px;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 20px;
  transition: all .3s;

  @media ${device.tablet} {
    font-size: 1.5rem;
    padding: 2rem;
  }
`
