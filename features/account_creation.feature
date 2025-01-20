Feature: Account Creation |Funcionalidade: Criação de Conta

Scenario: Create account successfully |Cenário: Criar conta com sucesso
Given I am on the account creation page |Dado que estou na página de criação de conta
When I enter '' in the email field |Quando eu digito '' no campo de email
Then I enter ' ' in the password field |Então eu digito ' ' no campo de senha
Then I enter ' ' in the confirm password field | Então eu digito ' ' no campo de confirmação de senha
Then I click on the 'Sign up' button |Então eu clico no botão 'Sign up'
And I see the home page |E eu vejo a página inicial

Preencher todos os campos obrigatórios corretamente
Validar redirecionamento após a criação da conta

Scenario: | Cenário: Validar campos obrigatórios
Deixar campos obrigatórios em branco e verificar mensagens de erro

Feature: |Funcionalidade: Formulário de Criação de Organização e Projeto Etapa 1
Scenario: |Cenário: Preenchimento correto de todos os campos obrigatórios(Organization Name, Description e Project Name)
Validar que o botão Next é habilitado após preencher os campos

Campos obrigatórios não preenchidos
Verificar mensagens de erro para cada campo obrigatório vazio

Feature: |Funcionalidade: Formulário de Criação de Organização e Projeto Etapa 2
Scenario: |Cenário: Preenchimento correto dos campos obrigatórios Name e Goal
Validar que o botão Create é habilitado após preencher corretamente.

Campos obrigatórios vazios / não preenchidos
Testar se é possível deixar o campo opcional Content vazio

Feature: |Funcionalidade: Fluxo de Sucesso na Criação de Organização e Projeto
Criação bem sucedida: preencher todos os campos obrigatórios e validar que o sistema redireciona para a área de Artificial Intelligence

Fluxo interrompido: sair do formulário antes de completar as duas etapas e verificar se o progresso é salvo

validação de comporamento ao clicar no botão Back

Feature: Redirecionamento e Visualização de Dados
Redirecionamento correto para a área de Artificial Intelligence
Visualização das informações do agente - validar que as informações preenchidas (organization name, description, project name, name, goal e content)


clicar em cancelar ou fechar o formulário antes de finalizar e verificar o comportamento esperado