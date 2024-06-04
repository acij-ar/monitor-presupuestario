DELIMITER //

/* Procedimientos almacenados para la actualización automática de datos */

/* Elimina los registros del año seleccionado */
CREATE PROCEDURE clean_data(IN theyear INTEGER)
BEGIN
	DELETE FROM actividad_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM programa_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM entidad_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM jurisdiccion_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM ejercicio_presupuestario_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM presupuesto WHERE ejercicio_presupuestario = theyear;
END //

/* Genera los registros de cada tabla a partir del los datos del año seleccionado */
CREATE PROCEDURE materializer(IN theyear INTEGER)
BEGIN
	INSERT INTO actividad_mv
	SELECT ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc,
	CAST(SUM(credito_presupuestado) AS UNSIGNED) AS credito_presupuestado,
	CAST(SUM(credito_presupuestado_infl) AS UNSIGNED) AS credito_presupuestado_infl,
	CAST(SUM(credito_vigente) AS UNSIGNED) AS credito_vigente,
	CAST(SUM(credito_vigente_infl) AS UNSIGNED) AS credito_vigente_infl,
	CAST(SUM(credito_comprometido) AS UNSIGNED) AS credito_comprometido,
	CAST(SUM(credito_comprometido_infl) AS UNSIGNED) AS credito_comprometido_infl,
	CAST(SUM(credito_devengado) AS UNSIGNED) AS credito_devengado,
	CAST(SUM(credito_devengado_infl) AS UNSIGNED) AS credito_devengado_infl,
	CAST(SUM(credito_pagado) AS UNSIGNED) AS credito_pagado,
	CAST(SUM(credito_pagado_infl) AS UNSIGNED) AS credito_pagado_infl,
	FALSE AS modificado
	FROM presupuesto 
	WHERE ejercicio_presupuestario = theyear
	GROUP BY ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc;

	INSERT INTO programa_mv
	SELECT ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc,
	CAST(SUM(credito_presupuestado) AS UNSIGNED) AS credito_presupuestado,
	CAST(SUM(credito_presupuestado_infl) AS UNSIGNED) AS credito_presupuestado_infl,
	CAST(SUM(credito_vigente) AS UNSIGNED) AS credito_vigente,
	CAST(SUM(credito_vigente_infl) AS UNSIGNED) AS credito_vigente_infl,
	CAST(SUM(credito_comprometido) AS UNSIGNED) AS credito_comprometido,
	CAST(SUM(credito_comprometido_infl) AS UNSIGNED) AS credito_comprometido_infl,
	CAST(SUM(credito_devengado) AS UNSIGNED) AS credito_devengado,
	CAST(SUM(credito_devengado_infl) AS UNSIGNED) AS credito_devengado_infl,
	CAST(SUM(credito_pagado) AS UNSIGNED) AS credito_pagado,
	CAST(SUM(credito_pagado_infl) AS UNSIGNED) AS credito_pagado_infl,
	FALSE AS modificado
	FROM actividad_mv 
	WHERE ejercicio_presupuestario = theyear
	GROUP BY ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc;

	INSERT INTO entidad_mv
	SELECT ejercicio_presupuestario, jurisdiccion_desc, entidad_desc,
	CAST(SUM(credito_presupuestado) AS UNSIGNED) AS credito_presupuestado,
	CAST(SUM(credito_presupuestado_infl) AS UNSIGNED) AS credito_presupuestado_infl,
	CAST(SUM(credito_vigente) AS UNSIGNED) AS credito_vigente,
	CAST(SUM(credito_vigente_infl) AS UNSIGNED) AS credito_vigente_infl,
	CAST(SUM(credito_comprometido) AS UNSIGNED) AS credito_comprometido,
	CAST(SUM(credito_comprometido_infl) AS UNSIGNED) AS credito_comprometido_infl,
	CAST(SUM(credito_devengado) AS UNSIGNED) AS credito_devengado,
	CAST(SUM(credito_devengado_infl) AS UNSIGNED) AS credito_devengado_infl,
	CAST(SUM(credito_pagado) AS UNSIGNED) AS credito_pagado,
	CAST(SUM(credito_pagado_infl) AS UNSIGNED) AS credito_pagado_infl,
	FALSE AS modificado
	FROM programa_mv 
	WHERE ejercicio_presupuestario = theyear
	GROUP BY ejercicio_presupuestario, jurisdiccion_desc, entidad_desc;

	INSERT INTO jurisdiccion_mv
	SELECT ejercicio_presupuestario, jurisdiccion_desc,
	CAST(SUM(credito_presupuestado) AS UNSIGNED) AS credito_presupuestado,
	CAST(SUM(credito_presupuestado_infl) AS UNSIGNED) AS credito_presupuestado_infl,
	CAST(SUM(credito_vigente) AS UNSIGNED) AS credito_vigente,
	CAST(SUM(credito_vigente_infl) AS UNSIGNED) AS credito_vigente_infl,
	CAST(SUM(credito_comprometido) AS UNSIGNED) AS credito_comprometido,
	CAST(SUM(credito_comprometido_infl) AS UNSIGNED) AS credito_comprometido_infl,
	CAST(SUM(credito_devengado) AS UNSIGNED) AS credito_devengado,
	CAST(SUM(credito_devengado_infl) AS UNSIGNED) AS credito_devengado_infl,
	CAST(SUM(credito_pagado) AS UNSIGNED) AS credito_pagado,
	CAST(SUM(credito_pagado_infl) AS UNSIGNED) AS credito_pagado_infl,
	FALSE AS modificado
	FROM entidad_mv
	WHERE ejercicio_presupuestario = theyear
	GROUP BY ejercicio_presupuestario, jurisdiccion_desc;

	INSERT INTO ejercicio_presupuestario_mv
	SELECT ejercicio_presupuestario,
	CAST(SUM(credito_presupuestado) AS UNSIGNED) AS credito_presupuestado,
	CAST(SUM(credito_presupuestado_infl) AS UNSIGNED) AS credito_presupuestado_infl,
	CAST(SUM(credito_vigente) AS UNSIGNED) AS credito_vigente,
	CAST(SUM(credito_vigente_infl) AS UNSIGNED) AS credito_vigente_infl,
	CAST(SUM(credito_comprometido) AS UNSIGNED) AS credito_comprometido,
	CAST(SUM(credito_comprometido_infl) AS UNSIGNED) AS credito_comprometido_infl,
	CAST(SUM(credito_devengado) AS UNSIGNED) AS credito_devengado,
	CAST(SUM(credito_devengado_infl) AS UNSIGNED) AS credito_devengado_infl,
	CAST(SUM(credito_pagado) AS UNSIGNED) AS credito_pagado,
	CAST(SUM(credito_pagado_infl) AS UNSIGNED) AS credito_pagado_infl
	FROM jurisdiccion_mv 
	WHERE ejercicio_presupuestario = theyear
	GROUP BY ejercicio_presupuestario;
END //

/* Realiza la multiplicacion por 1M para tener valores enteros */
CREATE PROCEDURE multiplier(IN theyear INTEGER)
BEGIN
	UPDATE presupuesto
	SET
		credito_presupuestado = credito_presupuestado * 1000000,
		credito_comprometido = credito_comprometido * 1000000,
		credito_pagado = credito_pagado * 1000000,
		credito_devengado = credito_devengado * 1000000,
		credito_vigente = credito_vigente * 1000000
	WHERE ejercicio_presupuestario = theyear;

	UPDATE presupuesto
	SET
		credito_presupuestado_infl = credito_presupuestado,
		credito_comprometido_infl = credito_comprometido,
		credito_pagado_infl = credito_pagado,
		credito_devengado_infl = credito_devengado,
		credito_vigente_infl = credito_vigente
	WHERE ejercicio_presupuestario = theyear;
END //

/* Realiza el ajuste de inflación del año seleccionado */
CREATE PROCEDURE inflation_adjust_year(IN theyear INTEGER)
BEGIN
	UPDATE ejercicio_presupuestario_mv 
	SET
		credito_presupuestado_infl = credito_presupuestado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_vigente_infl = credito_vigente * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_devengado_infl = credito_devengado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_comprometido_infl = credito_comprometido * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_pagado_infl = credito_pagado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear)
	WHERE ejercicio_presupuestario = theyear;

	UPDATE jurisdiccion_mv 
	SET
		credito_presupuestado_infl = credito_presupuestado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_vigente_infl = credito_vigente * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_devengado_infl = credito_devengado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_comprometido_infl = credito_comprometido * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_pagado_infl = credito_pagado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear)
	WHERE ejercicio_presupuestario = theyear;

	UPDATE entidad_mv 
	SET
		credito_presupuestado_infl = credito_presupuestado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_vigente_infl = credito_vigente * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_devengado_infl = credito_devengado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_comprometido_infl = credito_comprometido * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_pagado_infl = credito_pagado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear)
	WHERE ejercicio_presupuestario = theyear;

	UPDATE programa_mv 
	SET
		credito_presupuestado_infl = credito_presupuestado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_vigente_infl = credito_vigente * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_devengado_infl = credito_devengado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_comprometido_infl = credito_comprometido * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_pagado_infl = credito_pagado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear)
	WHERE ejercicio_presupuestario = theyear;

	UPDATE actividad_mv 
	SET
		credito_presupuestado_infl = credito_presupuestado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_vigente_infl = credito_vigente * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_devengado_infl = credito_devengado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_comprometido_infl = credito_comprometido * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_pagado_infl = credito_pagado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear)
	WHERE ejercicio_presupuestario = theyear;

	UPDATE presupuesto 
	SET
		credito_presupuestado_infl = credito_presupuestado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_vigente_infl = credito_vigente * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_devengado_infl = credito_devengado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_comprometido_infl = credito_comprometido * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear),
		credito_pagado_infl = credito_pagado * (SELECT tasa FROM inflacion WHERE ejercicio_presupuestario = theyear)
	WHERE ejercicio_presupuestario = theyear;
END //

/* Realiza un ajuste de inflación de todos los datos contenidos */
CREATE PROCEDURE `inflation_adjust_full`()
BEGIN
	
UPDATE ejercicio_presupuestario_mv 
SET
ejercicio_presupuestario_mv.credito_presupuestado_infl = ejercicio_presupuestario_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_vigente_infl = ejercicio_presupuestario_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_devengado_infl = ejercicio_presupuestario_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_comprometido_infl = ejercicio_presupuestario_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_pagado_infl = ejercicio_presupuestario_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario)
;

UPDATE jurisdiccion_mv 
SET
jurisdiccion_mv.credito_presupuestado_infl = jurisdiccion_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_vigente_infl = jurisdiccion_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_devengado_infl = jurisdiccion_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_comprometido_infl = jurisdiccion_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_pagado_infl = jurisdiccion_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario)
;

UPDATE entidad_mv 
SET
entidad_mv.credito_presupuestado_infl = entidad_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_vigente_infl = entidad_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_devengado_infl = entidad_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_comprometido_infl = entidad_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_pagado_infl = entidad_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario)
;

UPDATE programa_mv 
SET
programa_mv.credito_presupuestado_infl = programa_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_vigente_infl = programa_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_devengado_infl = programa_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_comprometido_infl = programa_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_pagado_infl = programa_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario)
;

UPDATE actividad_mv 
SET
actividad_mv.credito_presupuestado_infl = actividad_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_vigente_infl = actividad_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_devengado_infl = actividad_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_comprometido_infl = actividad_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_pagado_infl = actividad_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario)
;
	
	
END //


DELIMITER ;
