# -*- coding: utf-8 -*-
from datetime import datetime
import configparser
import MySQLdb
import os
import sys
import configparser
import pandas as pd
import requests
import zipfile
from pathlib import Path
from os.path import abspath

#conexion con base de datos
config = configparser.ConfigParser()
config.read('config.ini')
db_config = config['database']

cnx = MySQLdb.connect(
    user=db_config.get('user'), 
    passwd=db_config.get('password'),
    host=db_config.get('host'),
    database=db_config.get('db')
)

#cursores
insert_cursor = cnx.cursor()
ops_cursor = cnx.cursor()

#insert prep
insert_row = ("INSERT INTO presupuesto (ejercicio_presupuestario,actividad_desc,"
    "programa_desc,entidad_desc,jurisdiccion_desc,credito_presupuestado,credito_vigente,credito_devengado,credito_pagado) "
    "VALUES(%(ejercicio_presupuestario)s,%(actividad_desc)s,%(programa_desc)s,%(entidad_desc)s,"
    "%(jurisdiccion_desc)s,%(credito_presupuestado)s,%(credito_vigente)s,%(credito_devengado)s,%(credito_pagado)s);"
    )

#año en curso
now = datetime.now()
current_year = '{:02d}'.format(now.year)
print(current_year)

#paths del dataset
dataset_url = 'https://www.presupuestoabierto.gob.ar/datasets/'+current_year+'/credito-anual-'+current_year+'.zip'


dataset_path = abspath('../data/')
zip_path = abspath('../data/credito-anual-'+current_year+'.zip')
csv_path = abspath('../data/credito-anual-'+current_year+'.csv')

#descargar zip
print("Descargando dataset...")
r = requests.get(dataset_url)
with open(zip_path, 'wb') as f:
    f.write(r.content)
del r

#unzip
print("Desempaquetando...")
with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(dataset_path)
del zip_ref

#cleanup
print("Limpiando data anterior...")
ops_cursor.execute('CALL clean_data('+current_year+');')
cnx.commit()

#load csv
print("Procesando CSV...")
df = pd.read_csv (csv_path, encoding='iso-8859-1')
for index, row in df.iterrows():


    if str(row['ejercicio_presupuestario']).isnumeric() and str(row['credito_presupuestado']).replace(',','').isnumeric():

        insert_row = ("INSERT INTO presupuesto (ejercicio_presupuestario,actividad_desc,"
            "programa_desc,entidad_desc,jurisdiccion_desc,credito_presupuestado,credito_vigente,credito_devengado,credito_pagado) "
            'VALUES('+row['ejercicio_presupuestario']+','+row['actividad_desc']+','+row['programa_desc']+','+row['entidad_desc']+','
            row['jurisdiccion_desc']+','+str(row['credito_presupuestado']).replace(',','.')+','+str(row['credito_vigente']).replace(',','.')+','+str(row['credito_devengado']).replace(',','.')+','+str(row['credito_pagado']).replace(',','.')+');'
        )

        insert_cursor.execute(insert_row)
        cnx.commit()

    else:
        print(" -- error --")
        print("index: ",index)
    #print(row['credito_presupuestado'])

del df

print("Multiplicador...")
ops_cursor.callproc('CALL multiplier('+current_year+')')
cnx.commit()

print("Materializar vistas...")
ops_cursor.callproc('CALL materializer('+current_year+')')
cnx.commit()

print("Ajuste inflacionario...")
ops_cursor.callproc('CALL inflation_adjust_year('+current_year+')')
cnx.commit()

#make operations
print("-- FIN --")