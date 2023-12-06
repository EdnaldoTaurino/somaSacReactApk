const signIn = (username, password) => {
  // Colocar lógica de login aqui
  const somasacLogin = "https://dev2.somasac.com.br:8443/api/login"; // URL API authentication

  return new Promise((resolve, reject) => {
    fetch(somasacLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
        forceLogout: true, // se der ero mandar o forceLogaut como true
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.json());
        } else {
          // Tratar os erros de autenticação ou outros erros específicos aqui
          reject(new Error("credenciais incorretas"));
        }
      })
      .catch((error) => {
        reject(new Error("Erro na solicitação de login: "));
      });
  });
};

export const authService = {
  signIn,
};
