# 👩‍💻 Validação de cartão crédito 💳 Card-validation

🚀 Projeto nº 1: criado em parceria ao bootcamp da <Laboratória>, com o objetivo de verificar cartões de crédito na tela inicial para preenchimento simulando uma compra.

🔗 [Clique aqui para acessar](https://github.com/THALINascimento)

## Índice

- [1. Introdução](#1-Introdução)
- [2. Projeto](#2-Projeto)
- [3. Interações](#3-Interações)
- [4. Implementações futuras](#4-Implementações-futuras)
- [5. Ferramentas utlizadas](#5-Ferramentas-utlizadas)
- [6. Contato](#6-Contato)
- [7. Criadora/desenvolvedora](#7-Criadora/desenvolvedora)

---

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), ou módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo obtém o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Projeto

Neste projeto, a criação Web que permite ao usuário uma experiencia pratica, intuitiva

- Não deve inserir um campo vazio.
- Inserir o número que desejamos validar. Use apenas caracteres
  numéricos (dígitos) no cartão para validar [0-9].
- essa numeração passa pelo processo de validação onde retorna se o resultado é válido ou não.
- Oculta todos os dígitos do número do cartão, excetuando os últimos 4
  caracteres.
- incluindo testes unitários dos métodos
  `validator` (`isValid` e `maskify`).

## 3. Interações

Criada tela de interação experiência e interface.

**1. Uma interface que informa ao usuário para inserir os digitos do cartão: **

![exige preenchimento do número do cartão](https://user-images.githubusercontent.com/114299360/217397401-fc428124-59df-4f1c-883d-505303595aa4.jpeg)

**1. Uma interface que deve permitir ao usuário saber que seu cartão não foi válido:**
![embranco](https://user-images.githubusercontent.com/114299360/217397405-085fce46-ff28-48b5-81e6-f2c3e71bd211.jpeg)

**2. Uma interface que deve permitir ao usuário saber que o cartão foi validado com sucesso, onde visualiza também os númeos mascarados:**
![valido](https://user-images.githubusercontent.com/114299360/217397407-477c769e-ca64-4078-8b99-ca69fe682c47.jpeg)

**3. Instalações Testes unitários dos métodos.**
**Git/Github**
**Node.js** [Node.js](https://nodejs.org/en/)
<img  height="40" widtht="40" style="border-radius:5px;" src="https://user-images.githubusercontent.com/114299360/217401219-69d656d5-0718-442b-a71e-700930e356a4.jpg">

## 4. 🚧 Implementações futuras 🚧

[ ] criação de logo para assinatura de projeto
[ ] criação de tela de pré venda
[ ] criar ilustração de cartão realista
[ ] clonar as informações inseridas no campos da ilustração
[ ] validar se o número do
cartão é válido, mostre a [franquia](https://es.wikipedia.org/wiki/N%C3%BAmero_de_programa_bancaria)
do cartão (por exemplo, Visa, MasterCard, etc) usando estas [regras de validação](https://stevemorse.org/ssn/cc.html).
Se você escrever um novo método para isso, terá que fazer testes de unidade.

## 5. Ferramentas utlizadas

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

## 6. Contato

<a href="https://www.linkedin.com/in/thalita-nascimento-3b087a98/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">

</a><a href = "mailto:thalita.secre@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">

## 7. Criadora/desenvolvedora 💛

![thali](https://user-images.githubusercontent.com/114299360/217400840-130aba7d-06a4-41e7-860b-84db5d00ed03.jpeg)
