/* eEstructura de tablas */

CREATE TABLE `actividad_mv` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `jurisdiccion_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `entidad_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `programa_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `actividad_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `credito_presupuestado` bigint unsigned DEFAULT NULL,
  `credito_presupuestado_infl` bigint unsigned DEFAULT NULL,
  `credito_vigente` bigint unsigned DEFAULT NULL,
  `credito_vigente_infl` bigint unsigned DEFAULT NULL,
  `credito_comprometido` bigint unsigned DEFAULT NULL,
  `credito_comprometido_infl` bigint unsigned DEFAULT NULL,
  `credito_devengado` bigint unsigned DEFAULT NULL,
  `credito_devengado_infl` bigint unsigned DEFAULT NULL,
  `credito_pagado` bigint unsigned DEFAULT NULL,
  `credito_pagado_infl` bigint unsigned DEFAULT NULL,
  `modificado` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `ejercicio_presupuestario_mv` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `credito_presupuestado` bigint unsigned DEFAULT NULL,
  `credito_presupuestado_infl` bigint unsigned DEFAULT NULL,
  `credito_vigente` bigint unsigned DEFAULT NULL,
  `credito_vigente_infl` bigint unsigned DEFAULT NULL,
  `credito_comprometido` bigint unsigned DEFAULT NULL,
  `credito_comprometido_infl` bigint unsigned DEFAULT NULL,
  `credito_devengado` bigint unsigned DEFAULT NULL,
  `credito_devengado_infl` bigint unsigned DEFAULT NULL,
  `credito_pagado` bigint unsigned DEFAULT NULL,
  `credito_pagado_infl` bigint unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `entidad_mv` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `jurisdiccion_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `entidad_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `credito_presupuestado` bigint unsigned DEFAULT NULL,
  `credito_presupuestado_infl` bigint unsigned DEFAULT NULL,
  `credito_vigente` bigint unsigned DEFAULT NULL,
  `credito_vigente_infl` bigint unsigned DEFAULT NULL,
  `credito_comprometido` bigint unsigned DEFAULT NULL,
  `credito_comprometido_infl` bigint unsigned DEFAULT NULL,
  `credito_devengado` bigint unsigned DEFAULT NULL,
  `credito_devengado_infl` bigint unsigned DEFAULT NULL,
  `credito_pagado` bigint unsigned DEFAULT NULL,
  `credito_pagado_infl` bigint unsigned DEFAULT NULL,
  `modificado` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pregunta` text COLLATE utf8mb4_general_ci,
  `respuesta` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `funcion_mv` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `funcion_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `credito_presupuestado` bigint unsigned DEFAULT NULL,
  `credito_presupuestado_infl` bigint unsigned DEFAULT NULL,
  `credito_vigente` bigint unsigned DEFAULT NULL,
  `credito_vigente_infl` bigint unsigned DEFAULT NULL,
  `credito_comprometido` bigint unsigned DEFAULT NULL,
  `credito_comprometido_infl` bigint unsigned DEFAULT NULL,
  `credito_devengado` bigint unsigned DEFAULT NULL,
  `credito_devengado_infl` bigint unsigned DEFAULT NULL,
  `credito_pagado` bigint unsigned DEFAULT NULL,
  `credito_pagado_infl` bigint unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `glosario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `palabra` text COLLATE utf8mb4_general_ci,
  `significado` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `inflacion` (
  `ejercicio_presupuestario` int NOT NULL,
  `tasa` decimal(35,30) unsigned NOT NULL DEFAULT '0.000000000000000000000000000000',
  PRIMARY KEY (`ejercicio_presupuestario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `jurisdiccion_mv` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `jurisdiccion_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `credito_presupuestado` bigint unsigned DEFAULT NULL,
  `credito_presupuestado_infl` bigint unsigned DEFAULT NULL,
  `credito_vigente` bigint unsigned DEFAULT NULL,
  `credito_vigente_infl` bigint unsigned DEFAULT NULL,
  `credito_comprometido` bigint unsigned DEFAULT NULL,
  `credito_comprometido_infl` bigint unsigned DEFAULT NULL,
  `credito_devengado` bigint unsigned DEFAULT NULL,
  `credito_devengado_infl` bigint unsigned DEFAULT NULL,
  `credito_pagado` bigint unsigned DEFAULT NULL,
  `credito_pagado_infl` bigint unsigned DEFAULT NULL,
  `modificado` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `metas_fisicas` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `finalidad_id` int DEFAULT '0',
  `finalidad_desc` text,
  `funcion_id` int DEFAULT '0',
  `funcion_desc` text,
  `jurisdiccion_id` int DEFAULT '0',
  `jurisdiccion_desc` text,
  `subjurisdiccion_id` int DEFAULT '0',
  `subjurisdiccion_desc` text,
  `servicio_id` int DEFAULT '0',
  `servicio_desc` text,
  `programa_id` int DEFAULT '0',
  `programa_desc` text,
  `subprograma_id` int DEFAULT '0',
  `subprograma_desc` text,
  `medicion_fisica_id` int DEFAULT '0',
  `medicion_fisica_desc` text,
  `unidad_medida_id` int DEFAULT '0',
  `unidad_medida_desc` text,
  `totalizador_avance_fisico` text,
  `programacion_inicial` decimal(40,4) DEFAULT '0.0000',
  `programacion_inicial_ajustada` decimal(40,4) DEFAULT '0.0000',
  `ejecutado_anual_vigente` decimal(40,4) DEFAULT '0.0000',
  `causa_desvio` text,
  `causa_desvio_detalle` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3
/*!50100 PARTITION BY HASH (`ejercicio_presupuestario`)
PARTITIONS 4 */;

CREATE TABLE `origen_2019` (
  `﻿impacto_presupuestario_anio` int DEFAULT NULL,
  `ejercicio_presupuestario` int DEFAULT NULL,
  `sector_id` int DEFAULT NULL,
  `sector_desc` text,
  `subsector_id` int DEFAULT NULL,
  `subsector_desc` text,
  `caracter_id` int DEFAULT NULL,
  `caracter_desc` text,
  `jurisdiccion_id` int DEFAULT NULL,
  `jurisdiccion_desc` text,
  `subjurisdiccion_id` int DEFAULT NULL,
  `subjurisdiccion_desc` text,
  `entidad_id` int DEFAULT NULL,
  `entidad_desc` text,
  `servicio_id` int DEFAULT NULL,
  `servicio_desc` text,
  `programa_id` int DEFAULT NULL,
  `programa_desc` text,
  `subprograma_id` int DEFAULT NULL,
  `subprograma_desc` text,
  `proyecto_id` int DEFAULT NULL,
  `proyecto_desc` text,
  `actividad_id` int DEFAULT NULL,
  `actividad_desc` text,
  `obra_id` int DEFAULT NULL,
  `obra_desc` text,
  `finalidad_id` int DEFAULT NULL,
  `finalidad_desc` text,
  `funcion_id` int DEFAULT NULL,
  `funcion_desc` text,
  `inciso_id` int DEFAULT NULL,
  `inciso_desc` text,
  `principal_id` int DEFAULT NULL,
  `principal_desc` text,
  `parcial_id` int DEFAULT NULL,
  `parcial_desc` text,
  `subparcial_id` int DEFAULT NULL,
  `subparcial_desc` text,
  `clasificador_economico_8_digitos_id` int DEFAULT NULL,
  `clasificador_economico_8_digitos_desc` text,
  `fuente_financiamiento_id` double DEFAULT NULL,
  `fuente_financiamiento_desc` text,
  `ubicacion_geografica_id` int DEFAULT NULL,
  `ubicacion_geografica_desc` text,
  `unidad_ejecutora_id` int DEFAULT NULL,
  `unidad_ejecutora_desc` text,
  `credito_presupuestado` text,
  `credito_vigente` text,
  `credito_comprometido` text,
  `credito_devengado` text,
  `credito_pagado` text,
  `ultima_actualizacion_fecha` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

CREATE TABLE `presupuesto` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `sector_id` int DEFAULT '0',
  `sector_desc` text COLLATE utf8mb4_general_ci,
  `subsector_id` int DEFAULT '0',
  `subsector_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `caracter_id` int DEFAULT '0',
  `caracter_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jurisdiccion_id` int DEFAULT '0',
  `jurisdiccion_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `subjurisdiccion_id` int DEFAULT '0',
  `subjurisdiccion_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `entidad_id` int DEFAULT '0',
  `entidad_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `servicio_id` int DEFAULT '0',
  `servicio_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `programa_id` int DEFAULT '0',
  `programa_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `subprograma_id` int DEFAULT '0',
  `subprograma_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `proyecto_id` int DEFAULT '0',
  `proyecto_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `actividad_id` int DEFAULT '0',
  `actividad_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `obra_id` int DEFAULT '0',
  `obra_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `finalidad_id` int DEFAULT '0',
  `finalidad_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `funcion_id` int DEFAULT '0',
  `funcion_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inciso_id` int DEFAULT '0',
  `inciso_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `principal_id` int DEFAULT '0',
  `principal_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `parcial_id` int DEFAULT '0',
  `parcial_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `subparcial_id` int DEFAULT '0',
  `subparcial_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `clasificador_economico_8_digitos_id` int DEFAULT '0',
  `clasificador_economico_8_digitos_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fuente_financiamiento_id` int DEFAULT '0',
  `fuente_financiamiento_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ubicacion_geografica_id` int DEFAULT '0',
  `ubicacion_geografica_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `unidad_ejecutora_id` int DEFAULT '0',
  `unidad_ejecutora_desc` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `credito_presupuestado` decimal(30,10) DEFAULT '0.0000000000',
  `credito_presupuestado_infl` decimal(30,10) DEFAULT '0.0000000000',
  `credito_vigente` decimal(30,10) DEFAULT '0.0000000000',
  `credito_vigente_infl` decimal(30,10) DEFAULT '0.0000000000',
  `credito_comprometido` decimal(30,10) DEFAULT '0.0000000000',
  `credito_comprometido_infl` decimal(30,10) DEFAULT '0.0000000000',
  `credito_devengado` decimal(30,10) DEFAULT '0.0000000000',
  `credito_devengado_infl` decimal(30,10) DEFAULT '0.0000000000',
  `credito_pagado` decimal(30,10) DEFAULT '0.0000000000',
  `credito_pagado_infl` decimal(30,10) DEFAULT '0.0000000000',
  KEY `idx_jurisdiccion` (`jurisdiccion_desc`(191)) USING BTREE,
  KEY `idx_programa` (`programa_desc`(191)) USING BTREE,
  KEY `idx_entidad` (`entidad_desc`(191)) USING BTREE,
  KEY `idx_proyecto` (`proyecto_desc`(191)) USING BTREE,
  KEY `idx_ejercicio_pr` (`ejercicio_presupuestario`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
/*!50100 PARTITION BY HASH (`ejercicio_presupuestario`)
PARTITIONS 4 */;

CREATE TABLE `programa_mv` (
  `ejercicio_presupuestario` smallint NOT NULL,
  `jurisdiccion_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `entidad_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `programa_desc` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `credito_presupuestado` bigint unsigned DEFAULT NULL,
  `credito_presupuestado_infl` bigint unsigned DEFAULT NULL,
  `credito_vigente` bigint unsigned DEFAULT NULL,
  `credito_vigente_infl` bigint unsigned DEFAULT NULL,
  `credito_comprometido` bigint unsigned DEFAULT NULL,
  `credito_comprometido_infl` bigint unsigned DEFAULT NULL,
  `credito_devengado` bigint unsigned DEFAULT NULL,
  `credito_devengado_infl` bigint unsigned DEFAULT NULL,
  `credito_pagado` bigint unsigned DEFAULT NULL,
  `credito_pagado_infl` bigint unsigned DEFAULT NULL,
  `modificado` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
