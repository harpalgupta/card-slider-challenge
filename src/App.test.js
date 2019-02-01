import React from 'react';
import App from './App';
import * as api from './api'

describe('React Tests', () => {
  it('renders without crashing', () => {

});
})


describe('check Api calls', () => {
 it('retrieves 9 cards from api fetch', async ()=>{
  return api.fetchCards().then(data=>{
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(9);
  
  })
})

it('patch like', async ()=>{
  
  const result = await  api.likeCard(1,false)
    // console.log(data)
    
   return result
  
  })


}) 



