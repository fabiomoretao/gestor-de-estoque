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

---

## Modelo de Dados

```json
{
  "name": "string",
  "quantity": 3,           
  "price": 399.90,          
  "category": "string",
  "description": "string",
  "createdAt": "ISO8601",
  "updatedAt": "ISO8601"
}
```

---

## Estrutura do projeto

```
src/
├─ components/
│  ├─ Dashboard/
│  ├─ ItemTable.jsx
│  ├─ ItemForm.jsx
│  └─ ModalConfirm.jsx
├─ pages/
│  ├─ DashboardPage.jsx
│  ├─ ItemsPage.jsx
│  ├─ ItemDetailsPage.jsx
│  └─ ItemFormPage.jsx
├─ hooks/
│  └─ useLocalStorage.js
├─ utils/
│  └─ date.js
├─ App.jsx
└─ main.jsx
```

---

## Padrões e decisões técnicas

* **Persistência local (localStorage)**: escolha prática para MVPs e testes locais; permite demonstração de funcionalidades sem servidor. Em ambiente de produção substituir por API e banco de dados.
* **Custom hook `useLocalStorage`**: encapsula leitura/escrita e tratamento de erros do localStorage.
* **Cálculos com `useMemo`**: evitar recomputações caras ao renderizar o dashboard.
* **Imutabilidade do estado**: todas atualizações de coleção usam cópias (`map`, `filter`, `concat`) para garantir previsibilidade.
* **Formulários controlados**: validação simples no front-end e prevenção de valores inválidos.

---

### Rotas

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path='/' element={<DashboardPage />} />
    <Route path='/items' element={<ItemsPage />} />
    <Route path='/items/new' element={<ItemFormPage />} />
    <Route path='/items/:id' element={<ItemDetailsPage />} />
    <Route path='/items/:id/edit' element={<ItemFormPage editMode />} />
  </Routes>
</BrowserRouter>
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

Build para produção:

```bash
npm run build
npm run preview
```

---

## Scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint . --ext .js,.jsx"
  }
}
```

---

## Contato

Nome: \[Fábio Moretão]
E-mail: \[[fabiojosemoretaodesouza@gmail.com](mailto:fabiojosemoretaodesouza@gmail.com)]
GitHub: \[github.com/fabiomoretao]
