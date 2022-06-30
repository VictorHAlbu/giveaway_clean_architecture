import { Participant } from './participant';

export class GiveAway {
  minscore: number
  participants: Participant[] = []

  constructor(minscore: number){
    this.minscore = minscore
  }


  addParticipant(participant: Participant): void{
    if(participant.score >= this.minscore){
      this.participants.push(participant)
    }
  }
}