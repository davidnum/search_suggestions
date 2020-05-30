import React from 'react';
import SuggestionItem from './SuggestionItem';
import { shallow } from 'enzyme';

describe('render if query is part of item', () => {
  it('should render bold text part', () => {
    const wrapper = shallow(<SuggestionItem query="te" name="Test" />);

    expect(wrapper.find('b').text()).toEqual('Te');
  });

  it('should call onSelect when clicked', () => {
    const onSelectMock = jest.fn(() => {});
    const wrapper = shallow(<SuggestionItem query="te" name="Test" onSelect={onSelectMock} />);

    wrapper.find('li').simulate('click');

    expect(onSelectMock.mock.calls.length).toBe(1);
    expect(onSelectMock.mock.calls[0][0]).toEqual('Test');
  });
});

describe('render if query is not part of item', () => {
  it('should render simple text', () => {
    const wrapper = shallow(<SuggestionItem query="aa" name="Test" />);

    expect(wrapper.find('li').text()).toEqual('Test');
  });

  it('should call onSelect when clicked', () => {
    const onSelectMock = jest.fn(() => {});
    const wrapper = shallow(<SuggestionItem query="aa" name="Test" onSelect={onSelectMock} />);

    wrapper.find('li').simulate('click');

    expect(onSelectMock.mock.calls.length).toBe(1);
    expect(onSelectMock.mock.calls[0][0]).toEqual('Test');
  });
});
