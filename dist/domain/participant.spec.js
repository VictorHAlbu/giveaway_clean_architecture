"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const participant_1 = require("./participant");
describe('Participant', () => {
    test('should create participant', () => {
        const participant = new participant_1.Participant('otavio', 'otavio@mail.com', 10);
        expect(participant.name).toBe('otavio');
        expect(participant.email).toBe('otavio@mail.com');
        expect(participant.score).toBe(10);
    });
});
//# sourceMappingURL=participant.spec.js.map