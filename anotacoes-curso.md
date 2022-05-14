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

## Cobertura de testes e teste de integração com o DOM

Se for se aprofundar em testes de integração com o DOM, o reporter não consegue identificar se foi contemplado ou não.

## Como trabalhar com eventos do teclado

Para trabalhar com interações do DOM + eventos de teclados, é necessário criar eventos

```typescript
const event = new KeyboardEvent("keyup", { key: "Enter" });
```

---

## Testes em diretivas

A ideia é criar um 'Dummy component' (componente que não faça parte da aplicação), aplicar a diretiva e testar;
O comportamento da diretiva tem que ser independente do comportamento do componente que faz parte.

---

## Quando usar async/await ou não em beforeEach

Quando o arquivo que for testar for um template, é recomendado utilizar o async/await. Caso contrário não é necessário.

Porém, por convenção, pode-se adicionar async/await quando o beforeEach for tratar de configurar o módulo de teste.

```typescript
describe(ActionDirective.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionDirectiveModule],
    }).compileComponents();
  });
});
```

---



