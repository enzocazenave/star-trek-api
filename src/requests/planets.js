export default {
  getPlanets: 'SELECT p.*, count(f.coordenadas) as cantidad_flotas FROM planetas p LEFT JOIN flotas f ON p.Coordenadas = f.coordenadas GROUP BY f.coordenadas, p.Nombre, p.NombreVulgar, p.ID_imperio, p.Coordenadas, p.NombreMontania, p.AlturaMontania',
  updatePlanetMountain: 'UPDATE planetas SET AlturaMontania = @AlturaMontania WHERE Nombre = @Nombre'
}