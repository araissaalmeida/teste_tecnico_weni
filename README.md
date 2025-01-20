# teste_tecnico_weni
O teste consiste em passar pelas etapas de um ciclo de vida de um teste (Análise de requisitos, fase de planejamento,
integração do caso de teste, configuração do ambiente, fase de implementação e encerramento).
O principal requisito que vamos testar aqui
é a etapa onde após criar sua conta na
Plataforma, é necessário criar uma
organização e projeto, com o intuito de
definir seu agente.
No formulário de criar organização e
projeto, é necessário preencher um
formulário de duas etapas, onde na primeira
etapa possui 3 campos (Organization Name,
Description e Project name), todos os
campos desta etapa são obrigatórios, como
você pode ver na imagem a seguir
Após o primeiro passo, clicando
em Next, você irá preencher o
formulário com mais 3 itens
(name, goal e content), apenas o
campo Name e Goal são
obrigatórios como é possível ver
na imagem a seguir.
Após preencher esses itens, a sua
organização e projeto devem ser
criados com sucesso, você será
redirecionado para dentro da
plataforma na área de Artificial
Intelligence, possuindo as
informações que você definiu para
o Agente como mostra a imagem a
seguir:
1 - Defina os cenários de teste críticos que você acredita que deve testar para os formulários citados nas páginas anteriores, e
para cada cenário escreva os casos de teste.
2 - Para cada cenário crítico definido acima, escolha um caso de teste de cada cenário e crie um script de automação. Fique a
vontade para usar a tecnologia que você se sente mais seguro e confortável.
3 - Crie um relatório dos resultados do seu teste no formato que achar mais interessante e claro para comunicar aos principais
interessados os resultados.
4 - Como você poderia utilizar IAs generativas para melhorar a eficiência do ciclo de vida do teste?

Performance
Contexto: Usando a API do JSONPlaceholder, você deverá medir o tempo de resposta e a carga que a API consegue suportar
com diferentes volumes de requisições.
Requisitos e execução:
Realize um teste de carga com 100, 500 e 1000 requisições simultâneas ao endpoint /posts., após isso registre o tempo médio
de resposta, taxa de erro e qualquer comportamento anômalo que você encontrar. Fique à vontade para utilizar a tecnologia
que você é mais familiarizado e se sente mais confortável em realizar testes de performance (ex: JMeter, K6, script em python
com a biblioteca locust e etc).
Análise dos resultados e Relatório:
Crie um relatório com os resultados do teste contendo as seguintes informações:
● Quais foram os resultados do teste de carga para cada volume de requisições
● Houve algum erro ou comportamento inesperado durante o teste?
● Como você analisaria a capacidade da API de suportar maior tráfego?