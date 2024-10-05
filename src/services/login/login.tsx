export const login = () => {
    const elementEmail = window.document.getElementById('email');
    const elementSenha = window.document.getElementById('senha');
    const login = {
        email: elementEmail,
        senha: elementSenha
    }
    alert('Bem vindo ao DioBank')
    return login;
}
export const loginFacebook = (): void => {
    alert('Login Realizado com o Facebook')
}
export const loginGoogle = (): void => {
    alert('Login Realizado com a Conta do Google')
}
export const RecuperarSenha = (): void => {
    alert('Enviado E-mail para Recuperar Senha')
}
