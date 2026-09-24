# Campeonato de Gamer

## Situação-problema

Nossa turma vai organizar partidas de jogos. Queremos resgistrar **Jogo**, **Time A**, **Time B**, **Placar** e **Status**. Uma partida começa `agendada` com placar `0 x 0`, depois podemos atualizar o resulatado pra `finalizada`.

Ao final, a API terá estas rotas:

| Métodos | Rota            | O que faz                           |
| ------- | --------------- | ----------------------------------- |
| GET     | `/`             | Comfirma que a API está funcionando |
| GET     | `/patidas`      | Lista e filtra partidas             |
| GET     | `/partidas/:id` | Busca uma partida                   |
| POST    | `/partidas`     | Cadastra uma partida                |
| PUT     | `/partidas`     | Altera uma partida e o placar       |
| DELETE  | `partidas`      | Exclui uma partida                  |

## Etapa 1 - Criar o Projeto

No terminal, digite **Uma linha por vez**:

```bash
    mkdir campeonatoGamer
    cd campenoatoGamer
    npm init -y
    npm i express cors
    code .
```
