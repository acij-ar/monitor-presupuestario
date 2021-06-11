/* eEstructura de tablas */



/* Procedimientos almacenados para la actualización automática de datos */

/* Elimina los registros del año seleccionado */
CREATE PROCEDURE `clean_data`(IN theyear INTEGER(6))
BEGIN
	DELETE FROM actividad_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM programa_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM entidad_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM jurisdiccion_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM ejercicio_presupuestario_mv WHERE ejercicio_presupuestario = theyear;
	DELETE FROM presupuesto WHERE ejercicio_presupuestario = theyear;
END

/* Genera los registros de cada tabla a partir del los datos del año seleccionado */
CREATE PROCEDURE `materializer`(IN theyear INTEGER)
BEGIN

insert into actividad_mv
select ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc,
cast(sum(credito_presupuestado) as UNSIGNED) as credito_presupuestado,
cast(sum(credito_presupuestado_infl) as UNSIGNED) as credito_presupuestado_infl,
cast(sum(credito_vigente) as UNSIGNED) as credito_vigente,
cast(sum(credito_vigente_infl) as UNSIGNED) as credito_vigente_infl,
cast(sum(credito_comprometido) as UNSIGNED) as credito_comprometido,
cast(sum(credito_comprometido_infl) as UNSIGNED) as credito_comprometido_infl,
cast(sum(credito_devengado) as UNSIGNED) as credito_devengado,
cast(sum(credito_devengado_infl) as UNSIGNED) as credito_devengado_infl,
cast(sum(credito_pagado) as UNSIGNED) as credito_pagado,
cast(sum(credito_pagado_infl) as UNSIGNED) as credito_pagado_infl,
FALSE as modificado
from presupuesto 
where ejercicio_presupuestario = theyear
group by ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc, actividad_desc;

insert into programa_mv
select ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc,
cast(sum(credito_presupuestado) as UNSIGNED) as credito_presupuestado,
cast(sum(credito_presupuestado_infl) as UNSIGNED) as credito_presupuestado_infl,
cast(sum(credito_vigente) as UNSIGNED) as credito_vigente,
cast(sum(credito_vigente_infl) as UNSIGNED) as credito_vigente_infl,
cast(sum(credito_comprometido) as UNSIGNED) as credito_comprometido,
cast(sum(credito_comprometido_infl) as UNSIGNED) as credito_comprometido_infl,
cast(sum(credito_devengado) as UNSIGNED) as credito_devengado,
cast(sum(credito_devengado_infl) as UNSIGNED) as credito_devengado_infl,
cast(sum(credito_pagado) as UNSIGNED) as credito_pagado,
cast(sum(credito_pagado_infl) as UNSIGNED) as credito_pagado_infl,
FALSE as modificado
from actividad_mv 
where ejercicio_presupuestario = theyear
group by ejercicio_presupuestario, jurisdiccion_desc, entidad_desc, programa_desc;

insert into entidad_mv
select ejercicio_presupuestario, jurisdiccion_desc, entidad_desc,
cast(sum(credito_presupuestado) as UNSIGNED) as credito_presupuestado,
cast(sum(credito_presupuestado_infl) as UNSIGNED) as credito_presupuestado_infl,
cast(sum(credito_vigente) as UNSIGNED) as credito_vigente,
cast(sum(credito_vigente_infl) as UNSIGNED) as credito_vigente_infl,
cast(sum(credito_comprometido) as UNSIGNED) as credito_comprometido,
cast(sum(credito_comprometido_infl) as UNSIGNED) as credito_comprometido_infl,
cast(sum(credito_devengado) as UNSIGNED) as credito_devengado,
cast(sum(credito_devengado_infl) as UNSIGNED) as credito_devengado_infl,
cast(sum(credito_pagado) as UNSIGNED) as credito_pagado,
cast(sum(credito_pagado_infl) as UNSIGNED) as credito_pagado_infl,
FALSE as modificado
from programa_mv 
where ejercicio_presupuestario = theyear
group by ejercicio_presupuestario, jurisdiccion_desc, entidad_desc;

insert into jurisdiccion_mv
select ejercicio_presupuestario, jurisdiccion_desc,
cast(sum(credito_presupuestado) as UNSIGNED) as credito_presupuestado,
cast(sum(credito_presupuestado_infl) as UNSIGNED) as credito_presupuestado_infl,
cast(sum(credito_vigente) as UNSIGNED) as credito_vigente,
cast(sum(credito_vigente_infl) as UNSIGNED) as credito_vigente_infl,
cast(sum(credito_comprometido) as UNSIGNED) as credito_comprometido,
cast(sum(credito_comprometido_infl) as UNSIGNED) as credito_comprometido_infl,
cast(sum(credito_devengado) as UNSIGNED) as credito_devengado,
cast(sum(credito_devengado_infl) as UNSIGNED) as credito_devengado_infl,
cast(sum(credito_pagado) as UNSIGNED) as credito_pagado,
cast(sum(credito_pagado_infl) as UNSIGNED) as credito_pagado_infl,
FALSE as modificado
from entidad_mv
where ejercicio_presupuestario = theyear
group by ejercicio_presupuestario, jurisdiccion_desc;

insert into ejercicio_presupuestario_mv
select ejercicio_presupuestario,
cast(sum(credito_presupuestado) as UNSIGNED) as credito_presupuestado,
cast(sum(credito_presupuestado_infl) as UNSIGNED) as credito_presupuestado_infl,
cast(sum(credito_vigente) as UNSIGNED) as credito_vigente,
cast(sum(credito_vigente_infl) as UNSIGNED) as credito_vigente_infl,
cast(sum(credito_comprometido) as UNSIGNED) as credito_comprometido,
cast(sum(credito_comprometido_infl) as UNSIGNED) as credito_comprometido_infl,
cast(sum(credito_devengado) as UNSIGNED) as credito_devengado,
cast(sum(credito_devengado_infl) as UNSIGNED) as credito_devengado_infl,
cast(sum(credito_pagado) as UNSIGNED) as credito_pagado,
cast(sum(credito_pagado_infl) as UNSIGNED) as credito_pagado_infl
from jurisdiccion_mv 
where ejercicio_presupuestario = theyear
group by ejercicio_presupuestario;

END

/* Realiza la multiplicacion por 1M para tener valores enteros */
CREATE PROCEDURE `multiplier`(IN theyear INTEGER)
BEGIN
	UPDATE presupuesto
SET
credito_presupuestado = credito_presupuestado * 1000000,
credito_comprometido = credito_comprometido * 1000000,
credito_pagado = credito_pagado * 1000000,
credito_devengado = credito_devengado * 1000000,
credito_vigente = credito_vigente * 1000000
where ejercicio_presupuestario = theyear
;

UPDATE presupuesto
SET
credito_presupuestado_infl = credito_presupuestado,
credito_comprometido_infl = credito_comprometido,
credito_pagado_infl = credito_pagado,
credito_devengado_infl = credito_devengado,
credito_vigente_infl = credito_vigente
where ejercicio_presupuestario = theyear
;
END

/* Realiza el ajuste de inflación del año seleccionado */
CREATE PROCEDURE `inflation_adjust_year`(IN theyear INTEGER)
BEGIN
	
	UPDATE ejercicio_presupuestario_mv 
SET
ejercicio_presupuestario_mv.credito_presupuestado_infl = ejercicio_presupuestario_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_vigente_infl = ejercicio_presupuestario_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_devengado_infl = ejercicio_presupuestario_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_comprometido_infl = ejercicio_presupuestario_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario),
ejercicio_presupuestario_mv.credito_pagado_infl = ejercicio_presupuestario_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = ejercicio_presupuestario_mv.ejercicio_presupuestario)
where ejercicio_presupuestario_mv.ejercicio_presupuestario = theyear
;

UPDATE jurisdiccion_mv 
SET
jurisdiccion_mv.credito_presupuestado_infl = jurisdiccion_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_vigente_infl = jurisdiccion_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_devengado_infl = jurisdiccion_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_comprometido_infl = jurisdiccion_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario),
jurisdiccion_mv.credito_pagado_infl = jurisdiccion_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = jurisdiccion_mv.ejercicio_presupuestario)
where jurisdiccion_mv.ejercicio_presupuestario = theyear
;

UPDATE entidad_mv 
SET
entidad_mv.credito_presupuestado_infl = entidad_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_vigente_infl = entidad_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_devengado_infl = entidad_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_comprometido_infl = entidad_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario),
entidad_mv.credito_pagado_infl = entidad_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = entidad_mv.ejercicio_presupuestario)
where entidad_mv.ejercicio_presupuestario = theyear
;

UPDATE programa_mv 
SET
programa_mv.credito_presupuestado_infl = programa_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_vigente_infl = programa_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_devengado_infl = programa_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_comprometido_infl = programa_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario),
programa_mv.credito_pagado_infl = programa_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = programa_mv.ejercicio_presupuestario)
where programa_mv.ejercicio_presupuestario = theyear
;

UPDATE actividad_mv 
SET
actividad_mv.credito_presupuestado_infl = actividad_mv.credito_presupuestado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_vigente_infl = actividad_mv.credito_vigente * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_devengado_infl = actividad_mv.credito_devengado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_comprometido_infl = actividad_mv.credito_comprometido * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario),
actividad_mv.credito_pagado_infl = actividad_mv.credito_pagado * (SELECT tasa FROM inflacion WHERE inflacion.ejercicio_presupuestario = actividad_mv.ejercicio_presupuestario)
where actividad_mv.ejercicio_presupuestario = theyear
;
	
END

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
	
	
END