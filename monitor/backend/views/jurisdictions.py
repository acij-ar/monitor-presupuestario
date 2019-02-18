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
    'juri_nombre', type=str, required=False,
    help='Nombre de la jurisdiccion'
)

columns_to_sum = ['credito_presupuestado', 'credito_vigente',
                  'credito_comprometido', 'credito_devengado',
                  'credito_pagado']


class Jurisdiction(Resource):
    def get(self):
        """

        """
        args = parser.parse_args()

        # Validate the parameters
        error_message = '"anio" o "juri_nombre" tiene que ser declarado'
        if not args['anio'] and not args['juri_nombre']:
            abort(400, error_message=error_message)

        # Only have a year
        elif args['anio'] and not args['juri_nombre']:
            df_filter = df[df['ejercicio_presupuestario'] == args['anio']]

        # Only have the jurisdiction name
        elif not args['anio'] and args['juri_nombre']:
            df_filter = df[df['jurisdiccion_desc'] == args['juri_nombre']]

        # Have two
        elif args['anio'] and args['juri_nombre']:
            df_filter = df[(df['jurisdiccion_desc'] == args['juri_nombre']) &
                           (df['ejercicio_presupuestario'] == args['anio'])]

        c = ['ejercicio_presupuestario', 'jurisdiccion_desc']
        df_filter = df_filter.groupby(c)[columns_to_sum].sum()
        df_filter = df_filter.reset_index()
        df_filter = df_filter.sort_values('ejercicio_presupuestario',
                                          ascending=True)

        # Agrego taza de inflacion
        df_filter = pd.merge(df_filter, df_inflacion,
                             on='ejercicio_presupuestario')

        return df_filter.to_dict(orient='records')
