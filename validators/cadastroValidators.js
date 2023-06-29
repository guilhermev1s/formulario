const cadastroValidators = {
    nome: {
        required: "Nome obrigatório ",
        minLength: {
          value: 1,
          message: "Mínimo de 1 caractere ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
      cpf: {
        required: "CPF obrigatório ",
        maxLength: {
          value: 14,
          message: "Máximo de 14 caracteres ",
        },
        pattern: {
          value: /[0-9]+$/,
          message: "Apenas números ",
        },
      },
      codigodebarra: {
        minLength: {
          value: 2,
          message: "Mínimo de 2 caracteres ",
        },
        maxLength: {
          value: 12,
          message: "Máximo de 12 caracteres ",
        },
        pattern: {
          value: /[0-9]+$/,
          message: "Apenas números ",
        },
      },
      email: {
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
    
      telefone: {
        maxLength: {
          value: 15,
          message: "Máximo de 15 caracteres ",
        },
        pattern: {
          value: /[0-9]+$/,
          message: "Apenas números ",
        },
      },
      cep: {
        minLength: {
          value: 4,
          message: "Mínimo de 4 caracteres ",
        },
        maxLength: {
          value: 11,
          message: "Máximo de 11 caracteres ",
        },
        pattern: {
          value: /[0-9]+$/,
          message: "Apenas números ",
        },
      },
      logradouro: {
        minLength: {
          value: 3,
          message: "Mínimo de 3 caracteres ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
      complemento: {
        minLength: {
          value: 2,
          message: "Mínimo de 2 caracteres ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
      numero: {
        minLength: {
          value: 1,
          message: "Mínimo de 1 caractere ",
        },
        maxLength: {
          value: 20,
          message: "Máximo de 20 caracteres ",
        },
        pattern: {
          value: /[0-9]+$/,
          message: "Apenas números ",
        },
      },
      bairro: {
        minLength: {
          value: 2,
          message: "Mínimo de 2 caracteres ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
      funcao: {
        required: "Função obrigatório",
        minLength: {
          value: 2,
          message: "Mínimo de 2 caracteres ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
      materiaprima: {
        minLength: {
          value: 10,
          message: "Mínimo de 2 caracteres ",
        },
        maxLength: {
          value: 30,
          message: "Máximo de 100 caracteres ",
        },
      },
      fornecedor: {
        required: "Fornecedor obrigatório ",
        minLength: {
          value: 1,
          message: "Mínimo de 1 caractere ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 100 caracteres ",
        },
      },
      quantidade: {
        required: "Quantidade obrigatória ",
        minLength: {
          value: 1,
          message: "Mínimo de 1 caractere ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 50 caracteres ",
        },
        pattern: {
            value: /[0-9]+$/,
            message: "Apenas números ",
          },
      },
      cnpj: {
        required: "CNPJ obrigatório ",
        minLength: {
          value: 1,
          message: "Mínimo de 1 caractere ",
        },
        maxLength: {
          value: 100,
          message: "Máximo de 50 caracteres ",
        },
        pattern: {
            value: /[0-9]+$/,
            message: "Apenas números ",
          },
      },
    };
    
    
export default cadastroValidators