export const login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      {
        resolve({
          user: {
            nome: "Fulano",
            email: "fulano@gmail.com",
          },
          token: "skldjfdsjklh23962579oashlasflhfl20382fslkdfskdf",
        });
      }
    }, 1500);
  });
};
