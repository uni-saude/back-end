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

```JSON
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

```Json
{
	"email": "steiner@mail.com",
	"id": "5811c0c7-c8e8-41b8-9405-fa0bb74388fb"
}
```

Possíveis error

status - 400

```JSON
{
	"message": "Patient is alredy exist"
}
```

```JSON
{
	"message": [
		"email is a required field",
		"password is a required field"
	]
}
```
