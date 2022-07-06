import { Giveaway } from '../domain/giveaway';
import { Participant } from '../domain/participant';

export class DrawWinnersFromGiveaway {
  giveaway: Giveaway
  
  constructor(giveaway: Giveaway){
    this.giveaway = giveaway
  }

  draWinners(number: number): Participant[] {
    var winners: Participant[] = []
    for (let index = 0; index < number; index++) {
      winners.push(this.giveaway.draw())
    }

    return winners
  }
  
}