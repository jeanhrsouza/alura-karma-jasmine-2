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

Quando é feito o teste no DOM?
Geralmente para garantir o acesso à acessibilidade.

### Padrão descrição em teste de DOM

Os testes realizados que utilizam DOM, dependendo do que for testado, podem deixar a execução dos testes mais lentos. </br>
Por isso, para os testes que utilizam o DOM, é recomendado adotar o padrão de utilizar o (D) no inicio do IT. Desta forma, esses testes são identificados rapidamente.

Exemplo:

```typescript
it(`(D) Should have aria-label with 0 (@Input likes)`, () => {
  fixture.detectChanges();
  const element: HTMLElement = fixture.nativeElement.querySelector("span");
  expect(element.getAttribute("aria-label")).toBe("0: people liked");
});
```
