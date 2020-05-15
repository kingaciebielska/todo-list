import styled from 'styled-components'
import { color, background, shadow } from '../../../styles/colors'
import { device, size } from '../../../styles/devices'

export const Wrapper = styled.div`
  box-shadow: ${shadow.primary};
  background-image: ${background.default};
  max-width: 90%;
  width: ${size.tablet};
  margin: 1rem auto;
  border-radius: 20px;
  padding-bottom: 2rem;
`

export const Heading = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  padding: 2rem 1rem;
  color: ${color.white};

  @media ${device.laptop} {
    font-size: 2rem;
  }
`

export const ListWrapper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  list-style: none;
  background: ${color.white};
  box-shadow: ${shadow.secondary};
  padding: 1rem;

  @media ${device.laptop} {
    padding: 2rem 1rem;
  }
`

export const Title = styled.h5`
  font-size: 1.2rem;
  margin: 0;

  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`

export const Text = styled.p`
  font-size: 0.8rem;
  margin: 1rem 0 0;

  @media ${device.laptop} {
    font-size: 1rem;
  }
`
