# 🧮 Calculadora Científica

Uma calculadora científica moderna e responsiva construída com **React**, **TypeScript** e **Tailwind CSS**. Perfeita para treinar lógica de programação e boas práticas de desenvolvimento frontend.

## ✨ Funcionalidades

### Operações Básicas
- ➕ Adição
- ➖ Subtração
- ✖️ Multiplicação
- ➗ Divisão

### Funções Científicas
- **x²** - Elevar ao quadrado
- **√x** - Raiz quadrada
- **1/x** - Recíproco (inverso)
- **%** - Módulo (resto da divisão)
- **+/-** - Inverter sinal

### Controles
- **⌫** - Backspace (apagar último dígito)
- **CE** - Limpar entrada
- **C** - Limpar tudo
- **=** - Calcular resultado

### Recursos Extras
- 📱 Design responsivo
- 🎨 Interface moderna com Tailwind CSS
- 🔢 Formatação inteligente de decimais (até 2 casas)
- ⚠️ Tratamento de erros
- 🎯 Largura máxima para melhor UX

## 🛠️ Tecnologias

- **React 18+** - Framework frontend
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Next.js** - Framework React (full-stack)

## 🚀 Como Usar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pedroheinrich91/Calculator.git

# Entre na pasta do projeto
cd Calculator

# Entre na pasta da aplicação
cd my-app

# Instale as dependências
npm install
```

### Rodar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura de Pastas

```
Calculator/
├── my-app/
│   ├── app/              # Configurações Next.js
│   ├── components/
│   │   ├── Calculator.tsx    # Componente principal
│   │   └── Button.tsx        # Componente de botão reutilizável
│   └── package.json
└── README.md
```

## 💻 Componentes

### Calculator.tsx
Componente principal que gerencia:
- Estado do display
- Handlers para operações matemáticas
- Formatação de números decimais
- Grid de layout dos botões

### Button.tsx
Componente reutilizável para os botões com:
- Styling customizável
- Props de onClick
- Suporte a diferentes caracteres

## 🧠 Principais Aprendizados

✅ **Manipulação de State** - Uso de `useState` do React
✅ **Lógica Matemática** - Operadores JavaScript e Math
✅ **Formatação de Números** - `toFixed()` e `parseFloat()`
✅ **Componentização** - Reutilização de componentes
✅ **Boas Práticas** - Código limpo e legível
✅ **Design Responsivo** - Tailwind CSS e max-width

## 🐛 Tratamento de Erros

A calculadora trata erros usando `try-catch` para operações inválidas:

```javascript
const handleResult = () => {
  try {
    const result = eval(display)
    setDisplay(formatDisplay(result))
  } catch (error) {
    setDisplay("erro")
  }
}
```

## 📊 Exemplo de Uso

1. Digite um número (ex: `5`)
2. Selecione uma operação (ex: `x²`)
3. Veja o resultado (ex: `25`)
4. Use `+` para continuar operando

## 🎯 Casos de Uso

- 📚 Aprender React e TypeScript
- 🎓 Entender estado e hooks
- 💡 Praticar lógica de programação
- 🎨 Explorar Tailwind CSS
- 🚀 Base para projetos mais complexos

## 📝 Commits Importantes

- `feat: add calculator layout with grid and buttons` - Layout inicial
- `feat: implement display concatenation` - Exibição de números
- `feat: implement result in display` - Cálculo de expressões
- `feat: implement button delete for clean display` - Backspace
- `feat: implement scientific calculator functions with decimal formatting` - Funções científicas

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

## 👤 Autor

**Pedro Heinrich**
- GitHub: [@pedroheinrich91](https://github.com/pedroheinrich91)
- LinkedIn: [linkedin](https://www.linkedin.com/in/pedro-heinrich-alves-dias-a52377314/)

---

**Desenvolvido com ❤️ para praticar React e boas práticas de desenvolvimento frontend**
