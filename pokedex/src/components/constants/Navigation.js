export const goToHomePage = (navigate) => {
    navigate("/");
  };

export const goToPokedex = (navigate) => {
    navigate("/pokedex");
};

export const goToPokemonDetails = (navigate) => {
    navigate("/pokemon/detail");
};

export const goBack = (navigate) => {
    navigate(-1);
};