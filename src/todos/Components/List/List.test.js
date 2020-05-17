import React from 'react'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import List from './index'

const handleRemove = jest.fn()

describe('<List />', ()  => {
	afterEach(() => {
		jest.clearAllMocks()
	})

  it('should render empty list', () => {
    const list = []
    const wrapper = mount(<List list={list} handleRemove={handleRemove}/>)
      expect(wrapper.props().list).toEqual([])
  })

  it('should render not empty list', () => {
    const list = [{id: '1', title: 'lorem', description: 'ipsum'}]
    const wrapper = mount(<List list={list} handleRemove={handleRemove}/>)
      expect(wrapper.props().list).toEqual([{id: '1', title: 'lorem', description: 'ipsum'}])
  })

  it('should render title', () => {
    const list = [{id: '1', title: 'lorem', description: 'ipsum'}]
    const wrapper = mount(<List list={list} handleRemove={handleRemove}/>)
      expect(wrapper.find('h5').text()).toEqual('lorem')
  })

  it('should render description', () => {
    const list = [{id: '1', title: 'lorem', description: 'ipsum'}]
    const wrapper = mount(<List list={list} handleRemove={handleRemove}/>)
      expect(wrapper.find('p').text()).toEqual('ipsum')
  })

  it('should render correct number of items', () => {
    const list = [{id: '1', title: 'lorem', description: 'ipsum'}]
    const wrapper = mount(<List list={list} handleRemove={handleRemove}/>)
      expect(wrapper.find('li')).toHaveLength(1)
  })

  it('remove item', () => {
    const list = [{id: '123', title: 'lorem', description: 'ipsum'}]
		const wrapper = mount(<List list={list} handleRemove={handleRemove}/>);
    wrapper.find('button').simulate('click')

		expect(handleRemove).toHaveBeenCalledTimes(1)
		expect(handleRemove).toHaveBeenLastCalledWith('123')
	})
})
