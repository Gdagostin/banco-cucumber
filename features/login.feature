Feature: Login

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