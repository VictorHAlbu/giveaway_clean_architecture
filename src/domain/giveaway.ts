import { Participant } from './participant';

export class GiveAway {
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
    return this.participants[Math.floor(Math.random() * this.participants.length)]
  }
}