# 🏦 Banco Cucumber - Testes Automatizados

[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![Cucumber](https://img.shields.io/badge/Cucumber-12.1.0-brightgreen.svg)](https://cucumber.io/)
[![Selenium](https://img.shields.io/badge/Selenium-4.34.0-blue.svg)](https://selenium.dev/)
[![Tests](https://github.com/Gdagostin/banco-cucumber/actions/workflows/tests.yml/badge.svg)](https://github.com/Gdagostin/banco-cucumber/actions/workflows/tests.yml)

Projeto de testes automatizados end-to-end para aplicação bancária utilizando **Cucumber** (BDD) e **Selenium WebDriver**.

> 📚 *Desenvolvido durante o curso "Mentoria de Testes de Software 2.0" com Julio de Lima e Adam Vinícius*

## 🚀 Funcionalidades

- ✅ Testes BDD com Cucumber.js
- ✅ Automação de interface com Selenium WebDriver
- ✅ Cenários de login e navegação
- ✅ Relatórios HTML e JSON
- ✅ Integração com CI/CD (GitHub Actions)
- ✅ Cross-browser testing ready

## 📋 Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **Google Chrome** (versão mais recente)
- **ChromeDriver** (será instalado automaticamente)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Gdagostin/banco-cucumber.git
cd banco-cucumber
```

2. Instale as dependências:
```bash
npm install
```

## 🏗️ Estrutura do Projeto

```
banco-cucumber/
├── features/                    # Arquivos de features (Gherkin)
│   ├── login.feature           # Cenários de teste de login
│   └── step_definitions/       # Implementação dos steps
│       └── loginSteps.js       # Steps para login
├── reports/                    # Relatórios de execução
├── cucumber.js                 # Configuração do Cucumber
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

## 🧪 Executando os Testes

### 🎯 Comandos Principais:

```bash
# Executar todos os testes
npm run test

# Executar apenas validação (dry-run)
npm run test:dry-run

# Gerar relatório HTML
npm run test:html

# Gerar relatório JSON
npm run test:json
```

### 📊 Scripts NPM:

| Script | Comando | Descrição |
|--------|---------|-----------|
| Executar testes | `npm run test` | Roda todos os cenários de teste |
| Validação | `npm run test:dry-run` | Valida cenários sem executar |
| Relatório HTML | `npm run test:html` | Gera relatório visual |
| Relatório JSON | `npm run test:json` | Gera dados estruturados |

## 📝 Cenários de Teste

### 🔐 Feature: Login
```gherkin
Scenario Outline: Login com sucesso
  Given que eu estou na pagina de login
  When realizo login com as seguintes credenciais
    | usuario | <usuario> |
    | senha   | <senha>   |
  Then devo ser redirecionado para a pagina inicial

Examples:
  | usuario      | senha   |
  | julio.lima   | 123456  |
  | junior.lima  | 123456  |
```

## ⚙️ Configuração Técnica

### 🔧 Cucumber.js
```javascript
module.exports = {
  default: '--require features/step_definitions/*.js --format progress'
};
```

### 🌐 Selenium WebDriver
- **Browser**: Chrome (headless opcional)
- **Timeout**: 10s para elementos, 60s para steps
- **Resolução**: Maximizada automaticamente

### 🎯 Seletores de Elementos
| Elemento | Seletor |
|----------|---------|
| Campo Usuário | `#username` |
| Campo Senha | `#senha` |
| Botão Login | `//button[text()='Entrar']` |
| Dashboard | `#app-section h4` |

## 📊 Relatórios

Os relatórios são automaticamente gerados em `reports/`:
- **📄 HTML**: Visualização interativa dos resultados
- **📋 JSON**: Dados estruturados para integração

### 📸 Screenshots
Capturas automáticas em caso de falha (implementação futura).

## 🔧 Troubleshooting

| Problema | Solução |
|----------|---------|
| `no such element` | Verificar se app roda em `localhost:4000` |
| `chrome not found` | Instalar Google Chrome atualizado |
| `timeout` | Aumentar valores no `cucumber.js` |
| `connection refused` | Verificar se aplicação está online |

### 🚀 Aplicação de Teste
```bash
# A aplicação deve estar rodando em:
http://localhost:4000/
```

## 📦 Dependências

```json
{
  "@cucumber/cucumber": "^12.1.0",
  "selenium-webdriver": "^4.34.0"
}
```

## 🤝 Contribuindo

1. 🍴 Fork o projeto
2. 🌿 Crie sua branch (`git checkout -b feature/nova-feature`)
3. 📝 Commit suas mudanças (`git commit -am 'Add: nova feature'`)
4. 📤 Push para branch (`git push origin feature/nova-feature`)
5. 🔃 Abra um Pull Request

## 💡 Próximas Implementações

- [ ] Page Object Model
- [ ] Screenshots automáticos
- [ ] Testes em múltiplos browsers
- [ ] Integração com Allure Reports
- [ ] Docker para ambiente isolado
- [ ] Testes de API
- [ ] Performance testing

## 🙏 Créditos

**Desenvolvido durante:**
- 📚 **Curso**: Mentoria de Testes de Software 2.0
- 👨‍🏫 **Mentor**: Julio de Lima
- 👨‍💻 **Instrutor**: Adam Vinícius

## 📞 Suporte

- 🐛 [Issues](https://github.com/Gdagostin/banco-cucumber/issues)
- 📖 [Documentação Cucumber](https://cucumber.io/docs)
- 🔧 [Selenium WebDriver](https://selenium.dev/documentation/)

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/Gdagostin/banco-cucumber?style=social)](https://github.com/Gdagostin/banco-cucumber/stargazers)

</div>
