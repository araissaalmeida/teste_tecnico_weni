Feature: Organization and Project Creation Form |Funcionalidade: Formulário de Criação de Organização e Projeto

Scenario: Step About you |Cenário: 
Given I am on the Organization creation form page
When I enter '' in the First Name field
When I enter '' in the Surname field
When I enter '' in the WhatsApp Number field
Then I select an option in the Organization Position field
And I click on the Next button 

Scenario: Step About the company
Given I am on the Organization creation form page 
When I enter '' in the Company Name field
When I select an option in the Company Size field
When I select an option in the Segment of Activity field
Then I enter '' in the Project Name field
And I click on the Next button

Scenario: Step Start of the project
Given I am on the Organization creation form page
When I enter '' in the Name Agent field
When I enter '' in the Goal field
Then I click on the Finish button
And I see the text: "Project successfully created"
And I click on the Start button




Validar que o botão Next é habilitado após preencher os campos

Campos obrigatórios não preenchidos
Verificar mensagens de erro para cada campo obrigatório vazio

Feature: |Funcionalidade: Formulário de Criação de Organização e Projeto Etapa 2
Scenario: |Cenário: Preenchimento correto dos campos obrigatórios Name e Goal
Validar que o botão Create é habilitado após preencher corretamente.

Campos obrigatórios vazios / não preenchidos
Testar se é possível deixar o campo opcional Content vazio

Depois de criar uma conta e fazer login

Scenario: About you
Dado que estou na página de criação da Organização
Então eu digito '' no campo de primeiro nome
Então eu digito '' no campo de sobrenome
Então eu digito '' no campo de número de WhatsApp
Então eu seleciono '' no campo de posição da Organização
E seleciono Next

Scenario: About the company

Scenario: Start of the project

