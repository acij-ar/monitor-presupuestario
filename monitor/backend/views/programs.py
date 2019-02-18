import pandas as pd
from flask_restful import Resource, reqparse, abort

from backend.model import df, df_inflacion

# Query parameters parser
parser = reqparse.RequestParser()
parser.add_argument(
    'anio', type=int, required=False,
    help='Año para filtral las jurisdicciones. Tiene que ser entero'
)
parser.add_argument(
    'prog_nombre', type=str, required=False,
    help='Nombre del programa'
)
parser.add_argument(
    'prog_id', type=int, required=False,
    help='Id del programa'
)

columns_to_sum = ['credito_presupuestado', 'credito_vigente',
                  'credito_comprometido', 'credito_devengado',
                  'credito_pagado']
error_message = '"anio" o "programa_nombre" o "programa_id"' \
                + ' tiene que ser declarado'


class Program(Resource):
    def get(self, juri_name):
        """

        """
        args = parser.parse_args()
        dd = df[df['jurisdiccion_desc'] == juri_name]

        # Validate the parameters
        if (not args['anio'] and not args['prog_nombre'] and
           not args['prog_id']):
            abort(400, error_message=error_message)

        # Only have a year
        elif args['anio'] and not args['prog_nombre'] and not args['prog_id']:
            df_filter = dd[dd['ejercicio_presupuestario'] == args['anio']]

            subset = ['ejercicio_presupuestario', 'programa_id']
            c = ['ejercicio_presupuestario', 'programa_id', 'programa_desc']
            by = ['ejercicio_presupuestario', 'jurisdiccion_desc',
                  'programa_id']

        # Only have the program id
        elif not args['anio'] and not args['prog_nombre'] and args['prog_id']:
            df_filter = dd[dd['programa_id'] == args['prog_id']]

            subset = ['ejercicio_presupuestario']
            c = ['ejercicio_presupuestario', 'programa_desc']
            by = ['ejercicio_presupuestario', 'jurisdiccion_desc',
                  'programa_id']

        # Only have the program name
        elif not args['anio'] and args['prog_nombre'] and not args['prog_id']:
            df_filter = dd[dd['programa_desc'] == args['prog_nombre']]

            subset = ['ejercicio_presupuestario', 'programa_desc']
            c = ['ejercicio_presupuestario', 'programa_desc', 'programa_id']
            by = ['ejercicio_presupuestario', 'jurisdiccion_desc',
                  'programa_desc']

        # Have year and program name
        elif args['anio'] and args['prog_nombre'] and not args['prog_id']:
            df_filter = dd[(dd['programa_desc'] == args['prog_nombre']) &
                           (dd['ejercicio_presupuestario'] == args['anio'])]

            subset = ['ejercicio_presupuestario']
            c = ['ejercicio_presupuestario', 'jurisdiccion_desc',
                 'programa_desc', 'programa_id']
            by = ['ejercicio_presupuestario']

        # Have year and program id
        elif args['anio'] and not args['prog_nombre'] and args['prog_id']:
            df_filter = dd[(dd['programa_id'] == args['prog_id']) &
                           (dd['ejercicio_presupuestario'] == args['anio'])]

            subset = ['ejercicio_presupuestario']
            c = ['ejercicio_presupuestario', 'jurisdiccion_desc',
                 'programa_desc', 'programa_id']
            by = ['ejercicio_presupuestario']

        # Get the program name
        desc = df_filter.drop_duplicates(subset=subset)[c]
        desc = desc.reset_index(drop=True)

        df_filter = df_filter.groupby(by)[columns_to_sum].sum()
        df_filter = df_filter.reset_index()
        df_filter = df_filter.sort_values('ejercicio_presupuestario',
                                          ascending=True)

        # Join and sort
        order = ['ejercicio_presupuestario', 'jurisdiccion_desc',
                 'programa_id', 'programa_desc', 'credito_presupuestado',
                 'credito_vigente', 'credito_comprometido',
                 'credito_devengado', 'credito_pagado']
        df_filter = pd.merge(df_filter, desc, on=subset)
        df_filter = df_filter[order]

        # Agrego taza de inflacion
        df_filter = pd.merge(df_filter, df_inflacion,
                             on='ejercicio_presupuestario')

        return df_filter.to_dict(orient='records')
