# Sistema de Gerenciamento de Estoque

Aplicação SPA (Single Page Application) construída com **React** e **React Router**, destinada ao gerenciamento completo de um inventário local. Os dados são persistidos no `localStorage` do navegador, permitindo uso offline e preservação de estado sem infraestrutura de backend.

---

## Funcionalidades

* **Dashboard** com métricas e listas:

  * Quantidade total de tipos distintos de itens.
  * Quantidade total de unidades em estoque (soma das quantidades).
  * Quantidade de itens adicionados nos últimos 10 dias e lista desses itens.
  * Quantidade e lista dos itens com estoque menor que 10 unidades.
* **Listagem completa** de itens em tabela com ações: Ver / Editar / Excluir.
* **Detalhes do item**: página que exibe todas as propriedades do item com ações de editar e excluir.
* **Formulário de criação** de novos itens (campos mínimos: nome, quantidade, preço, categoria, descrição).
* **Formulário de edição** com o mesmo layout do de criação.
* **Navegação client-side** (React Router) sem recarregamento de página.
* **Persistência em localStorage** para manter os dados entre atualizações de página e fechamentos do navegador.
* Validações básicas nos formulários e confirmações para operações destrutivas (ex: exclusão).

---

## Tecnologias

* React (functional components + hooks)
* react-router-dom
* Vite (dev server / build)
* localStorage (persistência local)
* CSS Modules / Styled Components
* TypeScript

---

## Modelo de Dados

```typescript
{
    id: string,
    name: string,
    category: string,
    quantity: number,
    price: number,
    details: string,
    date: Date,
    lastUpdate: Date | undefined
}
```

---

# Estrutura do projeto

Abaixo está a estrutura de pastas e arquivos do projeto **gestor-de-estoque**.

```bash
root/
├── design/
│   └── Gerenciador de estoque.png
├── node_modules/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Index.tsx
│   │   │   └── styles.module.css
│   │   ├── Card/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Dropdown/
│   │   │   ├── DropdownButton.tsx
│   │   │   ├── DropdownContainer.tsx
│   │   │   ├── DropdownContent.tsx
│   │   │   ├── DropdownItem.tsx
│   │   │   └── styles.module.css
│   │   ├── Form/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Input.tsx
│   │   ├── style.module.css
│   │   └── Title/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── hooks/
│   │   └── useProducts.tsx
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ItemDetails/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ItemsList/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── NewItemForm/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── UpdateItem/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── categories.ts
│   ├── index.css
│   ├── layout.module.css
│   ├── Layout.tsx
│   ├── main.tsx
│   ├── router.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Padrões e decisões técnicas

* **Persistência local (localStorage)**: escolha prática para MVPs e testes locais; permite demonstração de funcionalidades sem servidor. Em ambiente de produção substituir por API e banco de dados.
* **Custom hook `useLocalStorage`**: encapsula leitura/escrita e tratamento de erros do localStorage.
* **Formulários controlados**: validação simples no front-end e prevenção de valores inválidos.

---

### Rotas

```jsx
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "new-product", element: <NewProduct />, },
            { path: "products-list", element: <ProductsList />, },
            { path: "product-details/:productId", element: <ProductDetails />, },
            { path: "update-product/:productId", element: <UpdateProduct />, }
        ]
    },
])
```

---

## Instalação e execução

Pré-requisitos: Node.js (>=16), npm ou Yarn.

```bash
# clonar repositório
git clone https://github.com/fabiomoretao/gestor-de-estoque.git
cd gestor-de-estoque

# instalar dependências
npm install

# executar em modo de desenvolvimento
npm run dev

```

## Scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
}
```

---

## Contato

- **Email:** <fabiojosemoretaodesouza@gmail.com>  
- **GitHub:** [fabiomoretao](https://github.com/fabiomoretao)  
- **LinkedIn:** [fabiomoretao](https://www.linkedin.com/in/fabiomoretao)  
- **Instagram:** [@fabio_moretao](https://instagram.com/fabio_moretao)  
