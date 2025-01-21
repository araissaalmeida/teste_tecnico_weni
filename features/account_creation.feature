Feature: Account Creation and Login |Funcionalidade: Criação de Conta

Scenario: Create account successfully |Cenário: Criar conta com sucesso
Given I am on the account creation page |Dado que estou na página de criação de conta
When I enter '' in the Email field |Quando eu digito '' no campo de email
Then I enter ' ' in the password field |Então eu digito ' ' no campo de senha
Then I enter ' ' in the confirm password field | Então eu digito ' ' no campo de confirmação de senha
Then I click on the Sign up button |Então eu clico no botão 'Sign up'
And I see the text: "E-mail não confirmado! Acesse a mensagem que enviamos para a sua caixa de entrada e confirme."
And after confirming my account, I see the system home screen

Scenario: Login with account Create
Given I am on the Login page
When I enter '' in the Email field
Then I enter '' in the Password field
Then I click on the Log In button



Scenario: | Cenário: Validar campos obrigatórios
Deixar campos obrigatórios em branco e verificar mensagens de erro



Feature: |Funcionalidade: Fluxo de Sucesso na Criação de Organização e Projeto
Criação bem sucedida: preencher todos os campos obrigatórios e validar que o sistema redireciona para a área de Artificial Intelligence

Fluxo interrompido: sair do formulário antes de completar as duas etapas e verificar se o progresso é salvo

validação de comporamento ao clicar no botão Back

Feature: Redirecionamento e Visualização de Dados
Redirecionamento correto para a área de Artificial Intelligence
Visualização das informações do agente - validar que as informações preenchidas (organization name, description, project name, name, goal e content)


clicar em cancelar ou fechar o formulário antes de finalizar e verificar o comportamento esperado