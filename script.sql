CREATE OR REPLACE PROCEDURE actualizar_periodos_jurisdicciones()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
            lp.id_juridisccion, 
            lp.anio
        FROM lineas_presupuestos lp
    ),
    agrupados AS (
        SELECT 
            id_juridisccion,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_juridisccion
                ORDER BY anio
            ) AS grupo
        FROM datos_base
    ),
    rangos AS (
        SELECT 
            id_juridisccion,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_juridisccion, grupo
    ),
    formateados AS (
        SELECT 
            id_juridisccion,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ),
    periodos_agrupados AS (
        SELECT 
            id_juridisccion,
            string_agg(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_juridisccion
    ),
    jurisdicciones_con_match AS (
        SELECT 
            j.id AS jurisdiccion_id,
            p.periodos
        FROM periodos_agrupados p
        JOIN juridiscciones j ON j.id_externo = p.id_juridisccion
    )
    UPDATE juridiscciones
    SET periodos = jm.periodos
    FROM jurisdicciones_con_match jm
    WHERE juridiscciones.id = jm.jurisdiccion_id;
END;
$$;


CREATE OR REPLACE PROCEDURE actualizar_periodos_entidades_por_jurisdiccion()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
            lp.id_entidad, 
            lp.id_subjurisdiccion, 
            lp.id_juridisccion, 
            lp.anio
        FROM lineas_presupuestos lp
        WHERE (lp.id_entidad, lp.id_subjurisdiccion, lp.id_juridisccion) IN (
            SELECT DISTINCT 
                e.id_externo, 
                s2.id_externo, 
                j.id_externo
            FROM entidades e
            INNER JOIN subjurisdicciones s2 ON s2.id = e.id_subjurisdiccion
            INNER JOIN juridiscciones j ON j.id = s2.id_jurisdiccion
        )
    ),
    agrupados AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_entidad, id_subjurisdiccion, id_juridisccion 
                ORDER BY anio
            ) AS grupo
        FROM datos_base
    ),
    rangos AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_entidad, id_subjurisdiccion, id_juridisccion, grupo
    ),
    formateados AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ),
    periodos_agrupados AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            string_agg(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_entidad, id_subjurisdiccion, id_juridisccion
    ),
    entidades_con_match AS (
        SELECT 
            e.id AS entidad_id,
            p.periodos
        FROM periodos_agrupados p
        JOIN subjurisdicciones s ON s.id_externo = p.id_subjurisdiccion
        JOIN juridiscciones j ON j.id_externo = p.id_juridisccion AND j.id = s.id_jurisdiccion
        JOIN entidades e ON e.id_externo = p.id_entidad AND e.id_subjurisdiccion = s.id
    )
    UPDATE entidades
    SET periodos_por_jurisdiccion = ec.periodos
    FROM entidades_con_match ec
    WHERE entidades.id = ec.entidad_id;
END;
$$;


CREATE OR REPLACE PROCEDURE actualizar_periodos_entidades_externo_menor_10()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
            lp.id_entidad, 
            lp.id_subjurisdiccion, 
            lp.id_juridisccion, 
            lp.anio
        FROM lineas_presupuestos lp
        WHERE (lp.id_entidad, lp.id_subjurisdiccion, lp.id_juridisccion) IN (
            SELECT DISTINCT 
                e.id_externo, 
                s2.id_externo, 
                j.id_externo
            FROM entidades e
            INNER JOIN subjurisdicciones s2 ON s2.id = e.id_subjurisdiccion
            INNER JOIN juridiscciones j ON j.id = s2.id_jurisdiccion
            where e.id_externo <10
        )
    ),
    agrupados AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_entidad, id_subjurisdiccion, id_juridisccion 
                ORDER BY anio
            ) AS grupo
        FROM datos_base
    ),
    rangos AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_entidad, id_subjurisdiccion, id_juridisccion, grupo
    ),
    formateados AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ),
    periodos_agrupados AS (
        SELECT 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            string_agg(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_entidad, id_subjurisdiccion, id_juridisccion
    ),
    entidades_con_match AS (
        SELECT 
            e.id AS entidad_id,
            p.periodos
        FROM periodos_agrupados p
        JOIN subjurisdicciones s ON s.id_externo = p.id_subjurisdiccion
        JOIN juridiscciones j ON j.id_externo = p.id_juridisccion AND j.id = s.id_jurisdiccion
        JOIN entidades e ON e.id_externo = p.id_entidad AND e.id_subjurisdiccion = s.id
    )
    UPDATE entidades
    SET periodos = ec.periodos
    FROM entidades_con_match ec
    WHERE entidades.id = ec.entidad_id;
    and entidades.id_externo <10
END;
$$;



CREATE OR REPLACE PROCEDURE actualizar_periodos_entidades_externo_mayor_10()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
            lp.anio,
            e.id_externo
        FROM lineas_presupuestos lp
        INNER JOIN entidades e ON 
            e.anio = lp.anio 
            AND e.id_externo = lp.id_entidad
        WHERE e.id_externo >= 10
    ),
    agrupados AS (
        SELECT 
            id_externo,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_externo
                ORDER BY anio
            ) AS grupo
        FROM datos_base
    ),
    rangos AS (
        SELECT 
            id_externo,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_externo, grupo
    ),
    formateados AS (
        SELECT 
            id_externo,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ),
    agregados AS (
        SELECT 
            id_externo,
            STRING_AGG(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_externo
    )
    UPDATE entidades e
    SET periodos = a.periodos
    FROM agregados a
    WHERE e.id_externo = a.id_externo
      AND e.id_externo >= 10;
END;
$$;


CREATE OR REPLACE PROCEDURE actualizar_periodos_programas()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
            lp.anio,
            s.id_externo AS id_servicio,
            p.id_externo AS id_programa
        FROM lineas_presupuestos lp
        INNER JOIN servicios s 
            ON s.anio = lp.anio 
            AND s.id_externo = lp.id_servicio 
        INNER JOIN programas p 
            ON p.anio = lp.anio 
            AND p.id_externo = lp.id_programa
    ),
    agrupados AS (
        SELECT 
            id_servicio,
            id_programa,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_servicio, id_programa
                ORDER BY anio
            ) AS grupo
        FROM datos_base
    ),
    rangos AS (
        SELECT 
            id_servicio,
            id_programa,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_servicio, id_programa, grupo
    ),
    formateados AS (
        SELECT 
            id_servicio,
            id_programa,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ),
    periodos_finales AS (
        SELECT 
            id_servicio,
            id_programa,
            string_agg(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_servicio, id_programa
    ) 
    UPDATE programas
    SET periodos = pf.periodos
    FROM periodos_finales pf, servicios s
           
    where
    	s.id = programas.id_servicio and 
    	s.id_externo = pf.id_servicio and
        programas.id_externo = pf.id_programa;
end;
$$;


CREATE OR REPLACE PROCEDURE actualizar_periodos_programas_por_jurisdiccion()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
        	lp.id_programa,
        	lp.id_servicio, 
            lp.id_entidad, 
            lp.id_subjurisdiccion, 
            lp.id_juridisccion, 
            lp.anio
        FROM lineas_presupuestos lp
        WHERE (lp.id_programa , lp.id_servicio ,lp.id_entidad, lp.id_subjurisdiccion, lp.id_juridisccion) IN (
            SELECT DISTINCT 
            	p.id_externo ,
            	s3.id_externo ,
                e.id_externo, 
                s2.id_externo, 
                j.id_externo
            FROM programas p
            inner join servicios s3 on s3.id = p.id_servicio 
            inner join entidades e  on e.id = s3.id_entidad 
            INNER JOIN subjurisdicciones s2 ON s2.id = e.id_subjurisdiccion
            INNER JOIN juridiscciones j ON j.id = s2.id_jurisdiccion
        )
    ),
    agrupados AS (
        SELECT 
        	id_programa,
        	id_servicio, 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_programa,id_servicio,id_entidad, id_subjurisdiccion, id_juridisccion 
                ORDER BY anio
            ) AS grupo
        FROM datos_base
    ),
    rangos AS (
        SELECT 
        	id_programa,
        	id_servicio,
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_programa,id_servicio,id_entidad, id_subjurisdiccion, id_juridisccion, grupo
    ),
    formateados AS (
        SELECT 
	        id_programa,
	        id_servicio,
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ),
    periodos_agrupados AS (
        SELECT 
        	id_programa,
        	id_servicio,
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            string_agg(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_programa,id_servicio, id_entidad, id_subjurisdiccion, id_juridisccion
    ),
    programas_con_match AS (
        SELECT 
            pr.id AS programa_id,
            p.periodos
        FROM periodos_agrupados p
        inner join programas pr on pr.id_externo = p.id_programa
        inner join servicios s on s.id = pr.id_servicio and s.id_externo = p.id_servicio 
        inner join entidades e on e.id = s.id_entidad and e.id_externo = p.id_entidad
        INNER JOIN subjurisdicciones s2 ON s2.id = e.id_subjurisdiccion and s2.id_externo = p.id_subjurisdiccion
        INNER JOIN juridiscciones j ON j.id = s2.id_jurisdiccion and j.id_externo = p.id_juridisccion
    ) 
    UPDATE programas 
    SET periodos_por_jurisdiccion = ec.periodos
    FROM programas_con_match ec
    WHERE programas.id = ec.programa_id;
END;
$$;


CREATE OR REPLACE PROCEDURE actualizar_periodos_actividades_por_jurisdiccion()
LANGUAGE plpgsql
AS $$
BEGIN
    WITH datos_base AS (
        SELECT DISTINCT 
        	lp.id_actividad,
        	lp.id_proyecto, 
        	lp.id_subprograma,
        	lp.id_programa,
        	lp.id_servicio, 
            lp.id_entidad, 
            lp.id_subjurisdiccion, 
            lp.id_juridisccion, 
            lp.anio
        FROM lineas_presupuestos lp
        WHERE (lp.id_actividad, lp.id_proyecto,lp.id_subprograma, lp.id_programa , lp.id_servicio ,lp.id_entidad, lp.id_subjurisdiccion, lp.id_juridisccion) IN (
            SELECT DISTINCT 
            	a.id_externo,
            	proy.id_externo ,
            	sp.id_externo ,
            	p.id_externo ,
            	s3.id_externo ,
                e.id_externo, 
                s2.id_externo, 
                j.id_externo
            FROM actividades a
            inner join proyectos proy on proy.id = a.id_proyecto 
            inner join subprograma sp on sp.id = proy.id_subprograma 
            inner join programas p on p.id = sp.id_programa 
            inner join servicios s3 on s3.id = p.id_servicio 
            inner join entidades e  on e.id = s3.id_entidad 
            INNER JOIN subjurisdicciones s2 ON s2.id = e.id_subjurisdiccion
            INNER JOIN juridiscciones j ON j.id = s2.id_jurisdiccion
        )
    ),
    agrupados AS (
        SELECT 
        	id_actividad,
        	id_proyecto,
        	id_subprograma,
        	id_programa,
        	id_servicio, 
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            anio,
            anio - ROW_NUMBER() OVER (
                PARTITION BY id_actividad,id_proyecto,id_subprograma,id_programa,id_servicio,id_entidad, id_subjurisdiccion, id_juridisccion 
                ORDER BY anio
            ) AS grupo
        FROM datos_base-- where id_actividad = 77 and id_proyecto =0 and id_programa = 77
    ) 
   
    ,
    rangos AS (
        SELECT 
        	id_actividad,
        	id_proyecto,
        	id_subprograma,
        	id_programa,
        	id_servicio,
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            MIN(anio) AS desde,
            MAX(anio) AS hasta
        FROM agrupados
        GROUP BY id_actividad,id_proyecto,id_subprograma,id_programa,id_servicio,id_entidad, id_subjurisdiccion, id_juridisccion, grupo
    )  ,
     
    formateados AS (
        SELECT 
	        id_actividad,
        	id_proyecto,
        	id_subprograma,
	        id_programa,
	        id_servicio,
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            desde,
            CASE 
                WHEN desde = hasta THEN desde::TEXT
                ELSE desde || ' a ' || hasta
            END AS rango
        FROM rangos
    ) ,
    periodos_agrupados AS (
        SELECT 
        	id_actividad,
        	id_proyecto,
        	id_subprograma,
        	id_programa,
        	id_servicio,
            id_entidad,
            id_subjurisdiccion,
            id_juridisccion,
            string_agg(rango, ', ' ORDER BY desde) AS periodos
        FROM formateados
        GROUP BY id_actividad,id_proyecto,id_subprograma,id_programa,id_servicio, id_entidad, id_subjurisdiccion, id_juridisccion
    )
    ,
    actividades_con_match AS (
        SELECT 
            a.id AS actividad_id,
            a.descripcion,
            a.id_externo ,
            proy.id_externo  ,
            sp.id_externo ,
            pr.id_externo ,
            s.id_externo ,
            e.id_externo ,
            s2.id_externo ,
            j.id_externo ,
            a.anio,
            p.periodos
        FROM periodos_agrupados p
        inner join actividades a on a.id_externo = p.id_actividad
        inner join proyectos proy on proy.id = a.id_proyecto and proy.id_externo = p.id_proyecto
        inner join subprograma sp on sp.id = proy.id_subprograma and sp.id_externo = p.id_subprograma
        inner join programas pr on pr.id = sp.id_programa and pr.id_externo = p.id_programa 
        inner join servicios s on s.id = pr.id_servicio and s.id_externo = p.id_servicio 
        inner join entidades e on e.id = s.id_entidad and e.id_externo = p.id_entidad
        INNER JOIN subjurisdicciones s2 ON s2.id = e.id_subjurisdiccion and s2.id_externo = p.id_subjurisdiccion
        INNER JOIN juridiscciones j ON j.id = s2.id_jurisdiccion and j.id_externo = p.id_juridisccion
    ) 
    UPDATE actividades  
    SET periodos_por_jurisdiccion = ec.periodos
    FROM actividades_con_match ec
    WHERE actividades.id = ec.actividad_id;
END;
$$;
