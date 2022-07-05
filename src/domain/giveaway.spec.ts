import { Participant } from './participant';
import { Giveaway } from './giveaway';

describe('Giveaway', () => {
  test('should add participant with min score to giveaway', () => {
    
    const participant = new Participant('otavio', 'otavio@mail.com', 10)
    const giveAway = new Giveaway(8)
    giveAway.addParticipant(participant)
  
    expect(giveAway.participants).toContain(participant)
  })


  test('should not add participant with score less than the min score to giveaway', () =>{

    const participant = new Participant('victor', 'victor@mail.com', 7)
    const giveaway = new Giveaway(8)

    giveaway.addParticipant(participant)
    expect(giveaway.participants).not.toContain(participant)
  })


  test('should draw random participant', () => {

    const participant1 = new Participant('otavio', 'otavio@mail.com', 10)
    const participant2 = new Participant('hugo', 'hugo@mail.com', 9)
    const participant3 = new Participant('victor', 'victor@mail.com', 8)

    const giveaway = new Giveaway(8)

    giveaway.addParticipant(participant1)
    giveaway.addParticipant(participant2)
    giveaway.addParticipant(participant3)

    const drawn = giveaway.draw()
    expect(drawn === participant1 || drawn === participant2 || drawn === participant3).toBeTruthy()
    console.log(drawn)
  })


})