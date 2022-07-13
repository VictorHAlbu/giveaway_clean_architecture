import { CsvParticipantRepository } from './adapter/repository/csvparticipantrepository'
import { AddParticipantToGiveaway } from './usecases/addparticipanttogiveaway';
import { DrawWinnersFromGiveaway } from './usecases/drawwinners';
import { CreateGiveaway } from './usecases/creategiveaway';
import { Participant } from './domain/participant';
import { InMemoryParticipantRepository } from './adapter/repository/inmemoryparticipantrepository';
import { ParticipantRepository } from './usecases/port/participantrepository';

export class Main {
  main (): void {
    const giveaway = new CreateGiveaway().createGiveaway(8)
    // const csvRepo = new CsvParticipantRepository('test1.csv')
    
    const p1 = new Participant('otavio', 'otavio@mail.com', 10)
    const p2 = new Participant('john', 'john@mail.com', 9)
    const p3 = new Participant('junior', 'junior@mail.com', 8)
    const p4 = new Participant('hugo', 'hugo@mail.com', 9)
    const p5 = new Participant('victor', 'victor@mail.com', 10)
    const p6 = new Participant('victorhugo', 'victorhugo@mail.com', 10)
    const p7 = new Participant('albuquerque', 'albuquerque@mail.com', 10)

    var plist: Participant[] = []

    plist.push(p1)
    plist.push(p2)
    plist.push(p3)
    plist.push(p4)
    plist.push(p5)
    plist.push(p6)
    plist.push(p7)
    const pr: ParticipantRepository = new InMemoryParticipantRepository(plist)

    const addParticipants = new AddParticipantToGiveaway(giveaway, pr)
    addParticipants.addParticipantsToGiveaway()
    const drawWinners = new DrawWinnersFromGiveaway(giveaway)
    const winners = drawWinners.drawWinners(4)
    console.table(winners)
    
    const fs = require('fs')
    var util = require('util')
    fs.writeFile('winners.txt', util.inspect(winners), (err: Error) => {
      if (err != null) throw err
    })
  }

}