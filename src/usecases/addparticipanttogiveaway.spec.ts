import { CreateGiveaway } from './creategiveaway';
import { AddParticipantToGiveaway } from './addparticipanttogiveaway';
import { Participant } from '../domain/participant';
import { ParticipantRepository } from './port/participantrepository';
import { InMemoryParticipantRepository } from '../adapter/repository/inmemoryparticipantrepository'

describe('Add participant to giveaway', () => {
  test('should add a participant with adequate score', () => {
    const giveaway = new CreateGiveaway().createGiveaway(8)

    const participant1 = new Participant('hugo', 'hugo@gmail.com', 10)
    const participant2 = new Participant('victor', 'victor@gmail.com', 9)
    const participant3 = new Participant('albuquerque', 'albuquerque@gmail.com', 8)

    var participantList: Participant[] = []

    participantList.push(participant1)
    participantList.push(participant2)
    participantList.push(participant3)

    const participantRepo: ParticipantRepository = new InMemoryParticipantRepository(participantList)
    const addParticipantToGiveaway = new AddParticipantToGiveaway(giveaway, participantRepo)
    addParticipantToGiveaway.addParticipatsToGiveaway()

    expect(addParticipantToGiveaway.giveaway.participants).toContain(participant1)
  })

})