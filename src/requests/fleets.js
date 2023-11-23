export default {
	getFleets: `SELECT i.nombre as nombre_imperio, f.coordenadas, f.id_flota, f.Nombre, count(n.id_nave) as cantidad_naves FROM flotas f JOIN naves n ON f.id_flota = n.id_flota JOIN imperios i ON f.id_imperio = i.id_imperio GROUP BY f.coordenadas, f.id_flota, f.Nombre, i.nombre`,
	getFleetShips: `SELECT * FROM naves n WHERE n.id_flota = @id_flota`,
	updateFleetCoordinate: 'UPDATE flotas SET coordenadas = @coordenadas WHERE id_flota = @id_flota',
	getFleetsByCoordinate: 'SELECT f.*, count(n.id_flota) as cantidad_naves FROM flotas f JOIN naves n on n.id_flota = f.id_flota WHERE coordenadas = @coordenadas GROUP BY n.id_flota, f.id_flota, f.nombre, f.id_imperio, f.ultima_accion, f.coordenadas'
}