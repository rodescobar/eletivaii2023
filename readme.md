## Aula 01 14/02/2023
- Entendendo o funcionamento do JavaScript.
    - Trabalhando com alert
    - Trabalhando com prompt
    - Trabalhando com DOM
    - Trabalhando com variáveis
    - Exercício
        1 - Entre com dois números faça a some e retorne no DOM o resultado.
        2 - Entre com dois números, faça a soma e a subtração e retorno no DOM os dois resultados.
## Carnaval 21/02/2023

## Aula02 28/02/2023
- Trabalhando com elementos HTML
- getdocument.getElementByID

## Aula03 07/03/2023
- FOR
- Utilizando JavaScript para criação de itens HTML

## Aula04 14/03/2023
- Trabalhando com AJAX

## Aula05 21/03/2023
- Trabalhando com *localstorage*
- Trabalho CEP (inicio)

## Aula06 28/03/2023
- Trabalho CEP (entrega)

## Aula07 04/04/2023
- Trabalhando com jQuery

## Aula08 11/04/2023
- Array
- Criando Chat-bot

## Aula09 18/04/2023
- Continuação de Chat-bot

## TecnoITE 25/04/2023

## Aula 10 02/05/2023
- Finalizando jQuery e Chat-Bot

## Aula11 - 09/05/2023
- Conhecendo VUE
- Utilizando Vue em site legado
- Criando uma nova aplicação em VUE

## Aula12 - 16/05/2023
- Trabalhando com v-if
- Trabalhando com v-for
- Axios
- Trabalhando com Axios

## Aula13 - 23/05/2023
- Trabalhando com Vue-Router
- Criando um template

## Marvel API
ca05a2b3710cdff08831d637eea049c3

PublicKey: f8727091d2f4d1c2bc696790a9841775
PrivateKey: 063fd08d38657173958c3108485a150556e3fcf0

http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=


`html
<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>
<script>
   var timestamp = new Date().getTime();

   var hash = CryptoJS.MD5(timestamp + "063fd08d38657173958c3108485a150556e3fcf0" + "f8727091d2f4d1c2bc696790a9841775");
    alert(hash);
</script>
    </head>
</html>
`