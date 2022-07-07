import { Giveaway } from '../domain/giveaway';
import { ParticipantRepository } from './port/participantrepository';
import { Participant } from '../domain/participant';

export class AddParticipantToGiveaway{

  giveaway: Giveaway
  participantRepo: ParticipantRepository

  constructor(giveAway: Giveaway, participantRepo: ParticipantRepository){
    this.giveaway = giveAway
    this.participantRepo = participantRepo
  }

  addParticipantsToGiveaway (): void{
    const participantList: Participant[] = this.participantRepo.findAllParticipants()
    participantList.forEach(element => {
      this.giveaway.addParticipant(element)
    })
  }

}