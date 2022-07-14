### Giveaway Clean Architecture

#### Essa aplicação de sorteio tem como objetivo aplicar os conceitos em prática de Clean Architeture, TDD e SOLID.

As tecnologias usadas nesse projetos são node.js e Typescript

Os objetivos de aplicar os conceitos de Arquitetura Limpa no Software são:

- Proporcionar um software mais flexível;
- Aumentar a reusabilidade do código;
- Diminuir a complexidade do software;
- Tornar o software mais fácil de manter e evoluir.

Para rodar todas depedências execute:
```
npm install
```
Execute a classe principal do projeto com:
```
npx jest main.spec.ts
```
Obs:
Para usar a importação de um arquivo csv, você deve criar um arquivo csv(com dados de Participant) ou usar um que já está no repositório,
e assim passar o mesmo como parametro para Class CsvParticipantRepository, em sequência utilizar a instância de csv e passar como parâmetro para class AddParticipantToGiveaway e seguir a lógica do exemplo da class Main


Nesse projeto para realizar testes usei o Jest
para executar os testes:
```
npm run test
```
para executar um arquivo especifico :
```
npx jest nome_do_arquivo.spec.ts
```
