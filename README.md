# Roleta de Domínios de Negócio



Uma aplicação web interativa que sorteia domínios de negócio para auxiliar na modelagem de aplicações. Desenvolvida para o **Clube de Estudos by Elemar JR**.

## Sobre o Projeto

A Roleta de Domínios de Negócio é uma ferramenta educacional que apresenta 12 diferentes domínios de negócio de forma interativa e divertida. Ao girar a roleta, um domínio é sorteado e são exibidas informações detalhadas incluindo:

- **Descrição** do domínio de negócio

- **Entidades Principais** que compõem o sistema

- **Funcionalidades-Chave** essenciais

- **Tecnologias** recomendadas

- **Desafios Técnicos** a serem considerados

## Instalação

### Pré-requisitos

- Node.js 22.x ou superior

- pnpm 10.x ou superior

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/fernandoeximia/roleta-dominios.git
cd roleta-dominios
```

1. Instale as dependências:

```bash
pnpm install
```

1. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

1. Acesse a aplicação em `http://localhost:3000`

## Testes

Execute os testes unitários:

```bash
pnpm test
```

Execute os testes em modo watch:

```bash
pnpm test:watch
```

## Build para Produção

Para criar uma build otimizada para produção:

```bash
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Estrutura do Projeto

```
roleta-dominios/
├── client/
│   ├── public/              # Arquivos estáticos
│   │   └── logo-clube-estudos.png
│   └── src/
│       ├── components/      # Componentes React
│       │   ├── ui/         # Componentes shadcn/ui
│       │   ├── Wheel.tsx   # Componente da roleta
│       │   └── DomainResult.tsx
│       ├── data/           # Dados dos domínios
│       │   └── domains.ts
│       ├── pages/          # Páginas da aplicação
│       │   └── Home.tsx
│       ├── App.tsx         # Componente raiz
│       ├── index.css       # Estilos globais
│       └── const.ts        # Constantes
├── todo.md                 # Lista de tarefas
├── package.json
└── README.md
```

## Funcionalidades

### Roleta Interativa

- Animação suave de rotação com desaceleração progressiva

- 12 segmentos coloridos representando cada domínio

- Ponteiro indicador vermelho no topo

- Sorteio aleatório com múltiplas voltas completas

### Exibição de Resultados

- Card destacado com a cor do domínio sorteado

- Badge "Sorteado" para identificação visual

- Organização clara das informações em cards separados

- Ícones visuais para funcionalidades (✓ ) e desafios (⚠)

## Próximas Funcionalidades

- [ ] Adicionar sons e efeitos sonoros

- [ ] Modo de apresentação fullscreen

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.[](https://elemar.io)

