# MyPokedex

![image](https://github.com/fabriciosilvaJr/mypokedex/assets/17913188/f7dd19ab-19ca-474c-b26a-531de96e9a0c)

MyPokedex é uma aplicação Ionic com Angular que lista Pokémon e permite que você adicione-os como favoritos.

## Funcionalidades

- **Pesquisa e Limpeza**: Implementei a funcionalidade de pesquisa, permitindo que os usuários pesquisem Pokémon pelo nome. A pesquisa só é confirmada após o clique no botão "Confirmar". A pesquisa pode ser cancelada ao clicar no botão "Limpar", que restaura a lista original de Pokémon.

- **Carregamento Infinito**: Optei pelo carregamento infinito em vez da paginação convencional para proporcionar uma experiência mais suave em dispositivos móveis, como smartphones. Isso permite que os usuários rolem para baixo na lista e carreguem mais Pokémon de forma contínua, eliminando a necessidade de navegar entre páginas.

- **Formato de Lista em Grid**: Optei por exibir a lista de Pokémon no formato de grid, pois facilita a visualização em dispositivos móveis. Isso proporciona uma experiência mais amigável para os usuários que acessam o aplicativo em smartphones.

- **Favoritos**: Os usuários podem marcar Pokémon como favoritos, e essa informação é salva no armazenamento local.

## Estilo de Codificação

- Adotei um estilo de codificação limpo e organizado, seguindo as melhores práticas do Angular e TypeScript.

- Separei o código em funções e métodos reutilizáveis para manter o código limpo e legível.

## Componentização

- Dividi o aplicativo em componentes reutilizáveis, como o componente da Pokedex e o componente de detalhes do Pokémon, para facilitar a manutenção e expansão futura.

## Gerenciamento de Estado

- Utilizei variáveis de estado para controlar o comportamento da pesquisa e da lista de Pokémon.

## Serviço e Injeção de Dependência

- Utilizei um serviço para consumir a API PokeAPI e tratar os dados. Esse serviço é injetado nos componentes para que os dados sejam prontamente disponíveis para uso.

## Executando o Projeto

A aplicação está hospedada na plataforma Netlify e pode ser acessada através do seguinte link: [MyPokedex](https://fabriciopokedex.netlify.app/).

Para executar o projeto localmente, siga os passos abaixo:

1. Instale o Ionic globalmente em sua máquina com o comando: `npm install -g @ionic/cli`.
2. Execute `npm install` na raiz do projeto para instalar todas as dependências.
3. Após instalar as dependências, inicie o projeto com o comando `ionic serve`.
4. Abra seu navegador e acesse `http://localhost:8100/pokedex` para usar o aplicativo.



## Demonstração

![Demonstração do Aplicativo](https://github.com/fabriciosilvaJr/mypokedex/blob/master/src/assets/MyPokedex.gif)

*GIF demonstrando o aplicativo em execução em um dispositivo Android.*




