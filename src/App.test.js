import React from 'react';
import App from './App';
import * as api from './api'

it('renders without crashing', () => {

});


it('retrieves 9 cards from api fetch',()=>{
  return api.fetchCards().then(data=>{
    expect(Array.isArray(data)).toBe(true)
    expect(data).toHaveLength(9)
  
  })
})

it('patch like',()=>{
  return api.likeCard(1,false).then(data=>{
    // console.log(data)
    // expect(data).toHaveLength(9)

  
  })
})