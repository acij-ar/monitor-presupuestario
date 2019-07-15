import pandas as pd
from flask_restful import Resource, reqparse, abort

from backend.model import dataset


class Activity(Resource):
    def get(self, juri_name, prog_id):
        df = dataset.df
        df_inflacion = dataset.df_inflacion
        dd = df[(df['jurisdiccion_desc'] == juri_name) &
                (df['programa_id'] == prog_id)]
        groups = dd.groupby(['ejercicio_presupuestario'])

        data = []
        for index, group in groups:
            # Agrego taza de inflacion
            group = pd.merge(group, df_inflacion,
                             on='ejercicio_presupuestario')

            partial = {
                'data': group.to_dict(orient='records'),
                'anio': index
            }
            data.append(partial)

        return data


class ActivityTable(Resource):
    def get(self, juri_name, prog_id):
        df = dataset.df
        df_inflacion = dataset.df_inflacion
        df_filter = df[(df['jurisdiccion_desc'] == juri_name) &
                       (df['programa_id'] == prog_id)]
        df_filter = pd.merge(df_filter, df_inflacion,
                             on='ejercicio_presupuestario')

        data = []
        groups = df_filter.groupby(['jurisdiccion_desc', 'programa_id',
                                    'actividad_desc'])

        for index, group in groups:
            partial = {str(i) + '_presupuestado': 0 for i in range(2007, 2020)}

            for index, row in group.iterrows():
                key = str(row.ejercicio_presupuestario) + '_presupuestado'
                partial[key] = row.credito_presupuestado * row.tasa_ajuste_inflacion

            partial['programa_id'] = row.programa_id
            partial['programa_desc'] = row.programa_desc
            partial['actividad_id'] = row.actividad_id
            partial['actividad_desc'] = row.actividad_desc

            data.append(partial)

        return data
