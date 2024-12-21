# EM API README
this is an api made to be used in EMS (Expense management System) project. It's a project made to help people to manage and controll their expenses more easily.

### Features
- __CRUD Expense__: User can create new expenses, get all expenses, also update and delete some expense he wants.
- __CRUD Meta__: User also can create new metas to save his cash. Get all metas, update and delete some meta.

### Technologies
- Typescript 
- Prisma
- Fastify
- MongoDB

### How i use it?

1. Clone repository
```
git clone https://github.com/NuneszG/Expense-management.git
```

2. Run
```
npm run dev
```
>[!TIP]
>if you have Make installed in your machine, you can run api with code
>```
>make dev
>```

### Endpoints to each HTTP request
- __CREATE Expense__: /auth/expense/create/
- __READ Expenses__: /auth/expense/get-all/
- __UPDATE Expense__: /auth/expense/update/
- __DELETE Expense__: /auth/expense/delete/

### How can i test it?
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
