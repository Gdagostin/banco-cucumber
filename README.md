# ?? Banco Cucumber - Testes Automatizados

[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![Cucumber](https://img.shields.io/badge/Cucumber-12.1.0-brightgreen.svg)](https://cucumber.io/)
[![Selenium](https://img.shields.io/badge/Selenium-4.34.0-blue.svg)](https://selenium.dev/)

Projeto de testes automatizados end-to-end para aplica��o banc�ria utilizando **Cucumber** (BDD) e **Selenium WebDriver**.

> ?? *Desenvolvido durante o curso "Mentoria de Testes de Software 2.0" com Julio de Lima e Adam Vin�cius*

## ?? Funcionalidades

- ? Testes BDD com Cucumber.js
- ? Automa��o de interface com Selenium WebDriver
- ? Cen�rios de login e navega��o
- ? Relat�rios HTML e JSON
- ? Integra��o com CI/CD (GitHub Actions)
- ? Cross-browser testing ready

## ?? Pr�-requisitos

- **Node.js** (vers�o 14 ou superior)
- **Google Chrome** (vers�o mais recente)
- **ChromeDriver** (ser� instalado automaticamente)

## ?? Instala��o

1. Clone o reposit�rio:
```bash
git clone https://github.com/Gdagostin/banco-cucumber.git
cd banco-cucumber
```

2. Instale as depend�ncias:
```bash
npm install
```

## ??? Estrutura do Projeto

```
banco-cucumber/
??? features/                    # Arquivos de features (Gherkin)
?   ??? login.feature           # Cen�rios de teste de login
?   ??? step_definitions/       # Implementa��o dos steps
?       ??? loginSteps.js       # Steps para login
??? reports/                    # Relat�rios de execu��o
??? cucumber.js                 # Configura��o do Cucumber
??? package.json               # Depend�ncias e scripts
??? README.md                  # Este arquivo
```

## ?? Executando os Testes

### ?? Comandos Principais:

```bash
# Executar todos os testes
npm run test

# Executar apenas valida��o (dry-run)
npm run test:dry-run

# Gerar relat�rio HTML
npm run test:html

# Gerar relat�rio JSON
npm run test:json
```

### ?? Scripts NPM:

| Script | Comando | Descri��o |
|--------|---------|-----------|
| Executar testes | `npm run test` | Roda todos os cen�rios de teste |
| Valida��o | `npm run test:dry-run` | Valida cen�rios sem executar |
| Relat�rio HTML | `npm run test:html` | Gera relat�rio visual |
| Relat�rio JSON | `npm run test:json` | Gera dados estruturados |

## ?? Cen�rios de Teste

### ?? Feature: Login
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

## ?? Configura��o T�cnica

### ?? Cucumber.js
```javascript
module.exports = {
  default: '--require features/step_definitions/*.js --format progress'
};
```

### ?? Selenium WebDriver
- **Browser**: Chrome (headless opcional)
- **Timeout**: 10s para elementos, 60s para steps
- **Resolu��o**: Maximizada automaticamente

### ?? Seletores de Elementos
| Elemento | Seletor |
|----------|---------|
| Campo Usu�rio | `#username` |
| Campo Senha | `#senha` |
| Bot�o Login | `//button[text()='Entrar']` |
| Dashboard | `#app-section h4` |

## ?? Relat�rios

Os relat�rios s�o automaticamente gerados em `reports/`:
- **?? HTML**: Visualiza��o interativa dos resultados
- **?? JSON**: Dados estruturados para integra��o

### ?? Screenshots
Capturas autom�ticas em caso de falha (implementa��o futura).

## ?? Troubleshooting

| Problema | Solu��o |
|----------|---------|
| `no such element` | Verificar se app roda em `localhost:4000` |
| `chrome not found` | Instalar Google Chrome atualizado |
| `timeout` | Aumentar valores no `cucumber.js` |
| `connection refused` | Verificar se aplica��o est� online |

### ?? Aplica��o de Teste
```bash
# A aplica��o deve estar rodando em:
http://localhost:4000/
```

## ?? Depend�ncias

```json
{
  "@cucumber/cucumber": "^12.1.0",
  "selenium-webdriver": "^4.34.0"
}
```

## ?? Contribuindo

1. ?? Fork o projeto
2. ?? Crie sua branch (`git checkout -b feature/nova-feature`)
3. ?? Commit suas mudan�as (`git commit -am 'Add: nova feature'`)
4. ?? Push para branch (`git push origin feature/nova-feature`)
5. ?? Abra um Pull Request

## ?? Pr�ximas Implementa��es

- [ ] Page Object Model
- [ ] Screenshots autom�ticos
- [ ] Testes em m�ltiplos browsers
- [ ] Integra��o com Allure Reports
- [ ] Docker para ambiente isolado
- [ ] Testes de API
- [ ] Performance testing

## ?? Cr�ditos

**Desenvolvido durante:**
- ?? **Curso**: Mentoria de Testes de Software 2.0
- ????? **Mentor**: Julio de Lima
- ????? **Instrutor**: Adam Vin�cius

## ?? Suporte

- ?? [Issues](https://github.com/Gdagostin/banco-cucumber/issues)
- ?? [Documenta��o Cucumber](https://cucumber.io/docs)
- ?? [Selenium WebDriver](https://selenium.dev/documentation/)

---

<div align="center">

**? Se este projeto te ajudou, deixe uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/Gdagostin/banco-cucumber?style=social)](https://github.com/Gdagostin/banco-cucumber/stargazers)

</div>
