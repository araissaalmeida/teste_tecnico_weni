# Cypress E2E Testing with BDD

## Objetivo do Repositório
Este repositório foi criado como parte de um teste técnico em um processo seletivo, com o objetivo de demonstrar habilidades na escrita de cenários e casos de teste para um sistema, bem como na automação de alguns desses cenários utilizando Cypress e JavaScript no modelo End-to-End (E2E) com o suporte ao formato BDD.

---

## Como os Cenários Foram Escritos
Os cenários de teste foram desenvolvidos seguindo as práticas de **Behavior-Driven Development (BDD)**, utilizando a estrutura `Given-When-Then` para descrever comportamentos esperados de maneira clara e acessível.

Os cenários priorizam:
- **Cobertura funcional:** Testam os fluxos principais e alternativos da aplicação.
- **Clareza:** Escrita simples para facilitar a compreensão e manutenção.
- **Reutilização:** Passos comuns foram abstraídos para evitar duplicação e promover reuso.

---

## Estrutura do Repositório
A organização do repositório segue a estrutura abaixo:

```
.
├── cypress/
│   ├── e2e/               # Cenários de teste escritos em formato BDD
│   ├── support/           # Arquivos de suporte e comandos customizados
│   ├── fixtures/          # Dados mockados usados nos testes
│   └── screenshots/       # Capturas de tela geradas após a execução
├── features/              # Arquivos .feature contendo os cenários em formato Gherkin
├── load_tests/            # Scripts, configuração e relatório dos testes de performance
├── README.md              # Documentação do repositório
├── package.json           # Configurações e dependências do projeto
└── cypress.config.js      # Configurações do Cypress
```

---

## Cenários de Teste Automatizados
Os seguintes cenários foram automatizados:

1. **Create account successfully**
2. **Step About the company filled out correctly**
3. **Step About the company filled out correctly**
4. **Step Start of the Project with successful creation with Agent**
5. **Login with successful**

---

## Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/):** Framework de testes E2E.
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** Linguagem principal.
- **[k6](https://k6.io/):** Ferramenta de teste de performance.
---

## Como Clonar e Executar os Testes Localmente

### Pré-requisitos
- **Node.js** (v16 ou superior)
- **npm**
- **Visual Studio Code** (ou outra IDE)
- **Cypress**
- **k6**

### Passos para executar os testes

1. Clone este repositório:
   ```bash
   git clone https://github.com/araissaalmeida/teste_tecnico_weni
   cd teste_tecnico_weni
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Instale o k6(Windows):
   - Se você usa o pacote gerenciador Chocolatey, você pode instalar o pacote k6 extraoficial com:
   ```bash
    choco install k6
   ```
   - Se você usa o Windows Package Manager, pode instalar o pacote oficial do k6 com:
   ```bash
    winget install k6 --source winget
   ```
   - Você também pode fazer o  download da versão LTS e rodar com o instalador oficial.

4. Execute os testes E2E:
   ```bash
   - npx cypress open
   ```
   - Ou execute no modo headless:
   ```bash
   npx cypress run
   ```
   - Ou execute os testes um a um:
   ```bash
   npx cypress run --spec "cypress/e2e/account_creation.cy.js"
   ```
   ```bash
   npx cypress run --spec "cypress/e2e/organization_creation.cy.js"
   ```
   ```bash
   npx cypress run --spec "cypress/e2e/login.cy.js"
   ```
   

5. Para executar os testes de performance:
   - Execute o script do k6:
   ```bash
   k6 run teste_tecnico_weni/load_tests/load_tests.js
   ```

   - Execute o script do k6 e gere o relatório:
   ```bash
   k6 run load_tests\load_tests.js --out json=results.json
   ```

---

## Teste de Performance

Os testes de performance foram configurados utilizando **k6**, com os seguintes objetivos:
   - 100 VUs (30 segundos): Teste inicial para verificar o comportamento do sistema sob carga moderada.
   - 500 VUs (30 segundos): Carga intermediária para avaliar estabilidade.
   - 1000 VUs (30 segundos): Estresse com alta carga simultânea.

As métricas podem ser visualizadas no **results.json**.

---

## Dados Mockados

Os dados utilizados nos testes estão localizados no arquivo `cypress/fixtures/users.json`. Esses dados foram criados para simular usuários, garantindo testes confiáveis e independentes de sistemas externos.

---

## Considerações Finais
Este repositório demonstra a aplicação de boas práticas na escrita de cenários de teste e na automação de testes E2E, utilizando tecnologias modernas e abordagens como BDD. Ele também explora a importância de testes de performance para assegurar a robustez do sistema.

## 📌 LinkedIn
📧 [Raíssa Almeida dos Anjos 🐞](https://www.linkedin.com/in/raissaalmeidadosanjos/)

## 🌟Contribuições e sugestões são bem-vindas!