Test company NTTDATA


Informações:

- O projeto contem confugurações extras no arquivo cypress.env.json

- O arquivo cypress.config.json foi alterado para adição da pasta 'cypress/api'

- O id do usuario1 informado no arquivo cypress.env.json é um código meramente
  ilustrativo. Foi adicionado para apresentar a estrutura de obtenção de sessão
  geralmente utilizada por este Candidato (Charlles Santana). Essa estrutura permite
  a realização de testes com usuários em paralelos.

- O produto1 informado no arquivo cypress.env.json também está presente no arquivo
  de forma meramente ilustrativa, para representar cadeias de chamadas com arquivos
  json que são comumente utilizada nos projetos criados por este Candidato.

- Ao projeto foi criado o arquivo commands_api.js, que contém o Comando getSession(), 
  criado para realizar o login via API. Esta solução permite acessar o sistema sem a
  necessidade de realizar o login via interface gráfica.

- O projeto utiliza ainda recursos como: 
  1. Criação de dados mocados com o plugin Faker; uso
  2. Uso do comando intercept() para aguardar o carregamento de páginas em projetos assincronos;
  3. Chamadas de requisições para os endpoint para testes de API
  4. Estruturação de projeto para permitir o acesso ao sistema sem utilizar a interface gráfica


