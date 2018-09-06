import React from 'react';
import { Board } from './Board';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import List from './List';

Enzyme.configure({
  adapter: new Adapter()
});

const props = {
  id: '1',
  currentBoard: {
    id: 1,
    name: 'board 1',
    lists: [
      {
        id: 1,
        name: 'list 1',
        cards: [
          {
            id: 1,
            text: 'card 1'
          }, 
          {
            id: 2,
            text: 'card 2'
          },
          {
            id: 3,
            text: 'card 3'
          }
        ]
      },
      {
        id: 2,
        name: 'list 2',
        cards: [
          {
            id: 1,
            text: 'card 1'
          }, 
          {
            id: 2,
            text: 'card 2'
          }
        ]
      }
    ]
  },
  getCurrentBoard: a=>a,
  handleCardUpdate: a=>a,
  handleListUpdate: a=>a
}

beforeEach(function() {

}) 

describe("<Board />", function() {
  it('should render 2 Lists inside <Board /> component', function() {
    const boardComponent = mount(<Board {...props} />);
    expect(boardComponent.find(List)).to.have.lengthOf(2);
  });
});