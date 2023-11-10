# Desafio Guide Investimento

# [Variação do Ativo](https://github.com/guideti/variacao-ativo#varia%C3%A7%C3%A3o-do-ativo)

**(Leia até o final)**

Este desafio consiste em consultar a variação do preço de um ativo a sua escolha nos últimos 30 pregões. Você deverá apresentar o percentual de variação de preço de um dia para o outro e o percentual desde o primeiro pregão apresentado.

| Dia | Data       | Valor    | Variação em relaçào a D-1 | Variação em relação a primeira data |
| --- | ---------- | -------- | ------------------------- | ----------------------------------- |
| 2   | 01/01/2021 | R\$ 1,00 | -                         | -                                   |
| 3   | 02/01/2021 | R\$ 1,10 | 10%                       | 10%                                 |
| 4   | 03/01/2021 | R\$ 1,05 | -4,54%                    | 5%                                  |
| 5   | 04/01/2021 | R\$ 1,90 | 80,95%                    | 90%                                 |

Para este desafio, iremos utilizar a API do Yahoo Finance https://finance.yahoo.com/

## [Web](https://github.com/guideti/variacao-ativo#web)

1. Consultar o preço do ativo na API do Yahoo Finance (este é um exemplo da consulta do ativo PETR4 https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA)
2. Implementar uma página em Angular que apresente o valor do ativo nos últimos 30 pregões e mostre a variação do preço no período. Você deverá considerar o valor de abertura (_chart.result.indicators.quote.open_)
3. Inclua um gráfico apresentando o resultado da variação.
4. Disponibilizar seu código aqui no Github

## [Sobre a avaliação](https://github.com/guideti/variacao-ativo#sobre-a-avalia%C3%A7%C3%A3o)

‼️ ‼️ Utilize os recursos disponíveis na linguagem que você está se candidatando:

- Padrões de projetos
- Arquiteturas
- Testes unitários
- Configuração de deploy

Seja criativo. Esperamos proatividade no desenvolvimento da solução. Tudo isso será levado em consideração na avaliação da sua prova, assim como a disponibilização do seu código fonte e o tempo necessário para a realização da prova.

## Instruções para execução

1. Baixar o projeto e descompactar
2. Abria o terminal na pasta do projeto
3. Executar o comando npm install
4. Executar o comando npm run start
