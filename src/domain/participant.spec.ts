import { Participant } from './participant';

describe('Participant', () => {
  test('should create participant', () =>{
    const participant = new Participant('otavio', 'otavio@mail.com', 10)
    
    expect(participant.name).toBe('otavio')
    expect(participant.email).toBe('otavio@mail.com')
    expect(participant.score).toBe(10)
  })

})