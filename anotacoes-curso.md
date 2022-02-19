# Curso de Angular: Avançando com testes automatizados

- para instalar as dependencias → npm i
- para rodar o projeto → npm run all
- ao rodar o projeto → localhost:4200
- backend → localhost:3000/photos

O que é um debounce?

Para que serve o fakeAsync?
Serve para controlar na mão, sincronizar o que eu quero fazer no código

Para que serve a função tick?
Serve para controlar o tempo, muito usado quando alguma função é disparada somente após algum tempo.
Toda vez que precisar controlar o tempo do código, será necessário colocar fakeAsync + tick.
