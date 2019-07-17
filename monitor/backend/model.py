import pandas as pd
import os


class Dataset:
    def __init__(self):
        self.df = self.load_dataset()
        self.df_inflacion = pd.read_csv('data/inflacion.csv')

    @staticmethod
    def load_dataset():
        df = pd.DataFrame()

        file_paths = ['./data/' + str(year) + '.csv' for year in range(2007, 2020)]
        for file_path in file_paths:
            if not os.path.exists(file_path):
                continue

            file_df = pd.read_csv(file_path)
            df = pd.concat([df, file_df])

        return df

    def update_dataset(self):
        self.df = self.load_dataset()

    @staticmethod
    def clean_file(file_path):
        file_df = pd.read_csv(file_path, decimal=',')
        file_df = file_df[[
            'ejercicio_presupuestario',
            'jurisdiccion_desc',
            'entidad_id',
            'entidad_desc',
            'programa_id',
            'programa_desc',
            'actividad_id',
            'actividad_desc',
            'credito_presupuestado',
            'credito_vigente',
            'credito_comprometido',
            'credito_devengado',
            'credito_pagado'
        ]]
        numeric_columns = [
            'credito_presupuestado',
            'credito_vigente',
            'credito_comprometido',
            'credito_devengado',
            'credito_pagado'
        ]
        for column in numeric_columns:
            file_df[column] = file_df[column] * 1e6
        file_df.to_csv(file_path)


dataset = Dataset()
