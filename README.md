# Expense system API Documentação
Essa é uma api de sistema de despesas que foi feita para ser usada no projeto __Senun__, que será feito para controlar e gerenciar despesas e metas. O projeto foi desenvolvido com o intuito de ajudar pessoas tanto a gerenciar com mais eficiência e agilidade suas despesas mensais, quanto suas metas para guardar seu dinheiro.

### Funcionalidades
- __CRUD Expense__: Usuário pode registrar uma nova despesa, obter todas as despesas registradas, também atualizar e deleta-las.
- __CRUD Meta__: Usuário pode registrar novas metas, obter todas as metas registradas e também atualizar e deletar alguma meta desejada.

### Tecnologias ultilizadas
- Typescript 
- Prisma
- Fastify
- MongoDB

# Como posso usar?

1. Clone o repositório
```
git clone https://github.com/NuneszG/Expense-management.git
```

2. Run
```
npm run dev
```
>[!TIP]
>se você tiver o Make instalado na sua maquina, você pode rodar com o código
>```
>make dev
>```

### Endpoints para cada requisição HTTP de despesas
- __CREATE Expense__: /auth/expense/create/
- __READ Expenses__: /auth/expense/get-all/
- __UPDATE Expense__: /auth/expense/update/
- __DELETE Expense__: /auth/expense/delete/

### Endpoints para cada requisição HTTP de metas
- __CREATE Meta__: /auth/meta/create/
- __READ Metas__: /auth/meta/get-all/
- __UPDATE Meta__: /auth/meta/update/
- __DELETE Meta__: /auth/meta/delete/


### Onde posso testar?
- Insomnia
- Postman

### Content-Type: application/json (Expense)
```
{
    "name": "Nome da despesa",
    "price": "Valor da despesa",
    "amount": "Quantidade de despesas",
    "data": "Validade da despesa",
    "description": "Breve descrição sobre ela"
}
```

### Content-Type: application/json (Meta)
```
{
    "value": "Valor da meta",
    "description": "Breve descrição sobre ela"
}
```

A api estará disponivel em ```http://localhost:8000```
