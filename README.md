<img alt="Quiz Challenge" src="https://cna.com.br/Content/uploads/blogposts/quizvocesabetudosobrepresentperfect.jpg" />

<h3 align="center">
  Quiz Challenge - ReactJS
</h3>

<blockquote align="center">“Dê o seu melhor”!</blockquote>

## :rocket: Sobre o desafio

Este **Desafio** de frontend consiste em consumir as questões via **API**, renderizar um **Quiz** com as questões recuperadas do backend e calcular o percentual de acertos ao final. 

## :rocket: Requisitos

- Renderizar uma **QUESTION** por vez;
  
- Guardar as informações da **QUESTION** atual em um gerenciador de estados (contextApi ou Redux);
  
- Não permitir o avanço para a próxima **QUESTION** sem ter respondido a atual;
  
- Calcular a porcentagem de acertos ao final do **Quiz**;


### :floppy_disk: A Estrutura

O **BACKEND** possui 1 endpoint descrito abaixo:

- Method: **GET**
- Endpoint: `http://localhost:3001/questions`
- Function: Retorna todas as **QUESTIONS** cadastradas no banco de dados

A resposta dessa requisição é devolvida com a seguinte estrutura:

```
[
  {
    "category": "Entertainment%3A%20Video%20Games",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F",
    "correct_answer": "Dirk%20the%20Daring",
    "incorrect_answers": [
      "Arthur",
      "Sir%20Toby%20Belch",
      "Guy%20of%20Gisbourne"
    ]
  },
  ...
]
```
 
#### Subindo o servidor backend
  1. Clone/Baixe este repositório na sua máquina;
  2. Abrir o terminal, navegar até a pasta "quiz-challenge/backend" e rodar "yarn" ou "npm i" para baixar as dependências do projeto;
  3. Após baixar as dependências, ainda no terminal e dentro da pasta "quiz-challenge/backend", rodar o comando "yarn start" ou "npm run start";
  4. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:3001".
  
  
  Utilize o endpoint informado acima para fazer as operações.

## :rocket: Entrega

Clone este repositório em sua máquina, construa seu frontend e forneça o link do repo para entrega do desafio;

Boa sorte!
