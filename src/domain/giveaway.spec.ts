import { Participant } from './participant';
import { GiveAway } from './giveaway';

describe('Giveaway', () => {
  test('should add participant with min score to giveaway', () => {
    
    const participant = new Participant('otavio', 'otavio@mail.com', 10)
    const giveAway = new GiveAway(8)
    giveAway.addParticipant(participant)
  
    expect(giveAway.participants).toContain(participant)
  })


  test('should not add participant with score less than the min score to giveaway', () =>{

    const participant = new Participant('victor', 'victor@mail.com', 7)
    const giveaway = new GiveAway(8)

    giveaway.addParticipant(participant)
    expect(giveaway.participants).not.toContain(participant)
  })
})