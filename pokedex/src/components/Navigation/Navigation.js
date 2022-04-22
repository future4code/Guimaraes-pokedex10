export const goToHomePage = (navigate) => {
    navigate("/");
  };

export const goToPokedex = (navigate) => {
    navigate("/pokedex");
};

export const goToPokemonDetails = (navigate, id) => {
    navigate(`/pokemon/details/${id}`);
};

export const goBack = (navigate) => {
    navigate(-1);
}; 