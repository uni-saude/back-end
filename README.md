# UniSaude

É uma API para armazenar o prontuário do paciente de forma unificada de forma que possa ser acessado de qualquer clínica ou hostipal, facilitando assim diagnósticos, marcação de consultas, exames, além de outras funcionalidades.

<br>

# **Inicializando a instalação**

Para inicializar este projeto, é necessário utilizar o comando abaixo para instalar todas as dependências:

```
yarn install
```

<br>

**Configure as variáveis de ambiente no arquivo .env**, passando suas credenciais para se conectar ao seu banco de dados local.

Tendo feito isso, basta executar o comando abaixo para inicializar a aplicação:

```
yarn dev
```

<br>

## 🛠️ Principais tecnologias utilizadas

- Node.js
- Express.js
- TypeScript
- Typeorm
- PostgreSQL
- Bcrypt
- Jsonwebtoken
- Yup

<br>

## 📌 Features

- [x] Cadastro de paciente
- [x] Cadastro de endereço
- [x] Cadastro de tutor
- [x] Cadastro de consulta
- [x] Cadastro de tratamento
- [x] Cadastro de exames
- [x] Cadastro de vacinas
- [x] Cadastro de medicação
- [x] Cadastro de diagnóstico
- [x] Cadastro de Hospital/Clínica
- [x] Cadastro de Médicos
- [x] Cadastro de especialização médica
- [x] Consulta ao prontuário do paciente
- [x] Login

<br>

# **Sobre os testes**

Texto sobre os testes aqui...
Texto sobre os testes aqui...
Texto sobre os testes aqui...
Texto sobre os testes aqui...

<br>

# **Diagrama de entidades e relacionamentos**

![api-Unisaude](https://i.imgur.com/6IGD7tQ.png)

Link externo para o diagrama: https://drive.google.com/file/d/1WaVQXjuVh6DKbJMOE377DYT39DVKPA_6/view?usp=sharing

<br>

# 📋 Documentação

## Base url: https://api-unisaude-j9ma.onrender.com

---

## Cadastro de usuários

- ### POST /patients

Body

```json
{
  "name": "Steiner",
  "cpf": "12345678900",
  "age": 21,
  "email": "steiner@mail.com",
  "genre": "Masculino",
  "phone": "2199999-9999",
  "password": "123456",
  "father": "Pai",
  "mother": "Mãe",
  "blood_type": "A+",
  "addressId": "27feeea3-4913-4f28-9ab9-12d137e39fd7"
}
```

Retorno esperado - 201

```json
{
  "email": "steiner@mail.com",
  "id": "5811c0c7-c8e8-41b8-9405-fa0bb74388fb"
}
```

Possíveis error

status - 400

```json
{
  "message": "Patient is alredy exist"
}
```

```json
{
  "message": ["email is a required field", "password is a required field"]
}
```

- ### POST /doctors

Body

```json
{
  "name": "Steiner",
  "crm": "52889900",
  "email": "sd@mail.com",
  "password": "123456",
  "specializationId": "41244de7-e36b-4c14-b2be-f991bc807873"
}
```

Retorno esperado - 201

```json
{
  "name": "Steiner",
  "email": "sd@mail.com",
  "crm": "52889900",
  "specialization": "Clínico Geral"
}
```

Possíveis erros

Status - 400

```json
{
  "message": [
    "email is a required field",
    "crm is a required field",
    "password is a required field",
    "specializationId is a required field"
  ]
}
```

Status - 401

```json
{
  "message": "patient is a minor and has not registered guardians"
}
```

## Login de usuários

- ### POST /patients/login

Body

```json
{
  "email": "steiner8@mail.com",
  "password": "123456"
}
```

Retorno esperado - 200

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMmJlNjgtYzA2Ny00Y2FlLWI0NTAtZmFmMWRiZTlhNDQzIn0sImlhdCI6MTY3NDA2MjY4MSwiZXhwIjoxNjc0MTQ5MDgxLCJzdWIiOiI2NGUyYmU2OC1jMDY3LTRjYWUtYjQ1MC1mYWYxZGJlOWE0NDMifQ.hGY2TfRKLh3FWvJy9AksOG_W3_mWJNPiEzBpg07yxJo"
}
```

Possíveis erros

Status - 400

```json
{
  "message": ["email required field", "password required field"]
}
```

- ### POST /doctors/login

Body

```json
{
  "email": "steiner8@mail.com",
  "password": "123456"
}
```

Retorno esperado - 200

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMmJlNjgtYzA2Ny00Y2FlLWI0NTAtZmFmMWRiZTlhNDQzIn0sImlhdCI6MTY3NDA2MjY4MSwiZXhwIjoxNjc0MTQ5MDgxLCJzdWIiOiI2NGUyYmU2OC1jMDY3LTRjYWUtYjQ1MC1mYWYxZGJlOWE0NDMifQ.hGY2TfRKLh3FWvJy9AksOG_W3_mWJNPiEzBpg07yxJo"
}
```

Possíveis erros

Status - 400

```json
{
  "message": ["email required field", "password required field"]
}
```

## Cadastro de endereços

- ### POST /address

Body

```json
{
  "street": "Rua R",
  "number": 190,
  "district": "Recreio dos Bandeirantes",
  "zip_code": 12345678,
  "city": "Rio de Janeiro",
  "state": "RJ",
  "complement": "Casa sem portão"
}
```

Retorno esperado - 201

```json
{
  "state": "CE",
  "city": "Fortaleza",
  "zip_code": 12344321,
  "district": "Sao Joao",
  "complement": "Casa do portao azul",
  "number": 12,
  "street": "rua 123"
}
```

## Cadastro de consultas

- ### POST /appointments

Body

```json
{
  "appointment_date": "2022-08-19T17:13:22.646Z",
  "appointment_date_type": "Online",
  "specialization": "Clínico Gera2ls",
  "patient_id": "39a0d5c4-0fdf-4583-90ab-7532d653ace5",
  "doctor_id": "0f680075-627e-4994-88a1-cb2ef864d88f",
  "hospital_id": "b8418f77-110b-405c-9701-e44b37f3b4f1"
}
```

Retorno esperado - 201

```json

```

Possíveis error

Status - 400

```json

```

## Buscar todos pacientes

- ### GET /patients

Body

Retorno esperado - 200

```json
[
  {
    "name": "Steiner",
    "cpf": "12345678909",
    "age": 21,
    "email": "steiner9@mail.com",
    "genre": "Masculino",
    "phone": "2199999-9999",
    "father": "Pai",
    "mother": "Mãe",
    "blood_type": "A+",
    "addressId": "27feeea3-4913-4f28-9ab9-12d137e39fd7"
  }
]
```

- ### GET /patients/:id

Body

Retorno esperado - 200

```json
{
  "name": "Steiner",
  "cpf": "12345678909",
  "age": 21,
  "email": "steiner9@mail.com",
  "genre": "Masculino",
  "phone": "2199999-9999",
  "father": "Pai",
  "mother": "Mãe",
  "blood_type": "A+",
  "addressId": "27feeea3-4913-4f28-9ab9-12d137e39fd7"
}
```

Possíveis erros

Retorno esperado - 404

```json
{
  "message": "Patients is not exists"
}
```

## Buscar todos os endereços

- ### GET /address

Body

Retorno esperado - 200

```json
[
  {
    "id": "7e0e9e70-9e31-4085-9c0f-7a2eb11f7a7e",
    "street": "rua 123",
    "number": 12,
    "complement": "Casa do portao azul",
    "district": "Sao Joao",
    "zip_code": 12344321,
    "city": "Fortaleza",
    "state": "CE"
  }
]
```

- ### GET /address/:id

Body

Retorno esperado - 200

```json
[
  {
    "id": "7e0e9e70-9e31-4085-9c0f-7a2eb11f7a7e",
    "street": "rua 123",
    "number": 12,
    "complement": "Casa do portao azul",
    "district": "Sao Joao",
    "zip_code": 12344321,
    "city": "Fortaleza",
    "state": "CE"
  }
]
```

Possíveis erros

Retorno esperado - 404

```json
{
  "message": "Address is not exists"
}
```

## As rotas a seguir requerem autenticação

Bearer token

```JavaScript
{
  headers : {"Authorization": `Bearer ${token}`}
}
```

## Atualizar pacientes

- ### Patch /patients/:id

Body

Retorno esperado - 200

```json
{
  "name": "Steiner",
  "cpf": "12345678909",
  "age": 21,
  "email": "steiner9@mail.com",
  "genre": "Masculino",
  "phone": "2199999-9999",
  "father": "Pai",
  "mother": "Mãe",
  "blood_type": "A+",
  "addressId": "27feeea3-4913-4f28-9ab9-12d137e39fd7"
}
```

Possíveis erros

Retorno esperado

Status - 401

```json
{
  "message": "Don't is permission update outhers acconts"
}
```

Status - 403

```json
{
  "message": "Token invalid"
}
```

Status - 404

```json
{
  "message": "User not found"
}
```

## Deletar pacientes

- ### Delete /patients/:id

Body

Retorno esperado - 204

```json

```

Possíveis erros

Retorno esperado

Status - 401

```json
{
  "message": "Don't is permission delete outhers acconts"
}
```

Status - 403

```json
{
  "message": "Token invalid"
}
```

Status - 404

```json
{
  "message": "User not found"
}
```
