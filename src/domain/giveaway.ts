import { Participant } from './participant';

export class Giveaway {
  minscore: number = 0
  participants: Participant[] = []

  constructor(minscore: number){
    this.minscore = minscore
  }


  addParticipant(participant: Participant): void{
    if(participant.score >= this.minscore){
      this.participants.push(participant)
    }
  }

  draw (): Participant {
    const n = Math.floor(Math.random() * this.participants.length)
    const participant = this.participants[n]
    this.participants.splice(n, 1)
    return participant
  }
}