import { CreateGiveaway } from './creategiveaway';

describe('Create giveaway', () => { 
  
  test('should create a giveaway', () => {
   
    const giveaway = new CreateGiveaway().createGiveaway(8)
    
    expect(giveaway.minscore).toBe(8)
  })

})