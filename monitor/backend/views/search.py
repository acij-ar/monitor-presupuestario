import pandas as pd
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
from flask_restful import Resource, reqparse, abort

from backend.model import df, df_inflacion

# Query parameters parser
parser = reqparse.RequestParser()
parser.add_argument(
    'q', required=True,
    help='Nombre de la jurisdiccion, programa o actividad a buscar'
)

parser.add_argument(
    'filtro', required=False, default='todos',
    help='Nombre de la jurisdiccion, programa o actividad a buscar'
)


def get_ratio(ele, search):
    # return fuzz.token_set_ratio(ele, search)
    # return fuzz.ratio(ele, search)
    return fuzz.partial_ratio(ele, search)


def filter_by_juri(args, result):
    # Por juri
    df['ratio'] = df['jurisdiccion_desc'].apply(get_ratio,
                                                search=args['q'])
    df_filter = df[df['ratio'] >= 80]

    # Get uniques eles
    subset = ['ejercicio_presupuestario', 'jurisdiccion_desc']
    df_filter = df_filter.drop_duplicates(subset=subset)

    # Agrego taza de inflacion
    df_filter = pd.merge(df_filter, df_inflacion,
                         on='ejercicio_presupuestario')

    for index, row in df_filter.iterrows():
        result.append({
            'tipo': 'jurisdiccion',
            'jurisdiccion_desc': row.jurisdiccion_desc,
            'ejercicio_presupuestario': row.ejercicio_presupuestario,
            'credito_presupuestado': row.credito_presupuestado,
            'credito_vigente': row.credito_vigente,
            'credito_comprometido': row.credito_comprometido,
            'credito_devengado': row.credito_devengado,
            'credito_pagado': row.credito_pagado,
            'tasa_ajuste_inflacion': row.tasa_ajuste_inflacion,
            'ratio': row.ratio
        })


def filter_by_entidad(args, result):
    # Por programa
    df['ratio'] = df['entidad_desc'].apply(get_ratio, search=args['q'])
    df_filter = df[df['ratio'] >= 80]

    # get uniques eles
    subset = ['ejercicio_presupuestario', 'jurisdiccion_desc', 'entidad_id',
              'entidad_desc']
    df_filter = df_filter.drop_duplicates(subset=subset)

    # Agrego taza de inflacion
    df_filter = pd.merge(df_filter, df_inflacion,
                         on='ejercicio_presupuestario')

    for index, row in df_filter.iterrows():
        result.append({
            'tipo': 'entidad',
            'jurisdiccion_desc': row.jurisdiccion_desc,
            'entidad_desc': row.entidad_desc,
            'entidad_id': row.entidad_id,
            'ejercicio_presupuestario': row.ejercicio_presupuestario,
            'credito_presupuestado': row.credito_presupuestado,
            'credito_vigente': row.credito_vigente,
            'credito_comprometido': row.credito_comprometido,
            'credito_devengado': row.credito_devengado,
            'credito_pagado': row.credito_pagado,
            'tasa_ajuste_inflacion': row.tasa_ajuste_inflacion,
            'ratio': row.ratio
        })


def filter_by_program(args, result):
    # Por programa
    df['ratio'] = df['programa_desc'].apply(get_ratio, search=args['q'])
    df_filter = df[df['ratio'] >= 80]

    # get uniques eles
    subset = ['ejercicio_presupuestario', 'jurisdiccion_desc', 'programa_id',
              'programa_desc']
    df_filter = df_filter.drop_duplicates(subset=subset)

    # Agrego taza de inflacion
    df_filter = pd.merge(df_filter, df_inflacion,
                         on='ejercicio_presupuestario')

    for index, row in df_filter.iterrows():
        result.append({
            'tipo': 'programa',
            'jurisdiccion_desc': row.jurisdiccion_desc,
            'entidad_desc': row.entidad_desc,
            'entidad_id': row.entidad_id,
            'programa_desc': row.programa_desc,
            'programa_id': row.programa_id,
            'ejercicio_presupuestario': row.ejercicio_presupuestario,
            'credito_presupuestado': row.credito_presupuestado,
            'credito_vigente': row.credito_vigente,
            'credito_comprometido': row.credito_comprometido,
            'credito_devengado': row.credito_devengado,
            'credito_pagado': row.credito_pagado,
            'tasa_ajuste_inflacion': row.tasa_ajuste_inflacion,
            'ratio': row.ratio
        })


def filter_by_activity(args, result):
    # Por actividad
    df['ratio'] = df['actividad_desc'].apply(get_ratio, search=args['q'])
    df_filter = df[df['ratio'] >= 80]

    # get uniques eles
    subset = ['ejercicio_presupuestario', 'jurisdiccion_desc', 'programa_id',
              'programa_desc', 'actividad_id', 'actividad_desc']
    df_filter = df_filter.drop_duplicates(subset=subset)

    # Agrego taza de inflacion
    df_filter = pd.merge(df_filter, df_inflacion,
                         on='ejercicio_presupuestario')

    for index, row in df_filter.iterrows():
        result.append({
            'tipo': 'actividad',
            'jurisdiccion_desc': row.jurisdiccion_desc,
            'entidad_desc': row.entidad_desc,
            'entidad_id': row.entidad_id,
            'programa_desc': row.programa_desc,
            'programa_id': row.programa_id,
            'actividad_desc': row.actividad_desc,
            'actividad_id': row.actividad_id,
            'ejercicio_presupuestario': row.ejercicio_presupuestario,
            'credito_presupuestado': row.credito_presupuestado,
            'credito_vigente': row.credito_vigente,
            'credito_comprometido': row.credito_comprometido,
            'credito_devengado': row.credito_devengado,
            'credito_pagado': row.credito_pagado,
            'tasa_ajuste_inflacion': row.tasa_ajuste_inflacion,
            'ratio': row.ratio
        })


class Search(Resource):
    def get(self):
        """

        """
        result = []
        args = parser.parse_args()
        args['q'] = args['q'].lower()

        if args['filtro'] == 'todos':
            filter_by_juri(args, result)
            filter_by_entidad(args, result)
            filter_by_program(args, result)
            filter_by_activity(args, result)
        elif args['filtro'] == 'jurisdiccion':
            filter_by_juri(args, result)
        elif args['filtro'] == 'entidad':
            print('entro')
            filter_by_entidad(args, result)
        elif args['filtro'] == 'programa':
            filter_by_program(args, result)
        elif args['filtro'] == 'actividad':
            filter_by_activity(args, result)

        return sorted(result, key=lambda k: k['ratio'], reverse=True)
