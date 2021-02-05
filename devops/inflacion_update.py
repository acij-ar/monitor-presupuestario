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
import hashlib

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
test_cursor = cnx.cursor()
ops_cursor = cnx.cursor()

#insert prep
insert_row = ("INSERT INTO inflacion (ejercicio_presupuestario, tasa)"
    "VALUES(%(ejercicio_presupuestario)s,%(tasa)s);"
    )

#año en curso
now = datetime.now()
current_year = '{:02d}'.format(now.year)
print(current_year)

#path de inflación
dataset_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDw9kyoFLr7txCcitpYY5Aey2zGp2eBFPBBXNImiEgwmLePgEOduMtycVzxbmSi7GFXnHBCrTAUGay/pub?output=csv'

dataset_path = abspath('../data/')
csv_path = abspath('../data/inflacion.csv')

#obtener el crc del ultimo archivo cargado
hash_md5 = hashlib.md5()
with open(csv_path, "rb") as f:
    for chunk in iter(lambda: f.read(4096), b""):
        hash_md5.update(chunk)

checksum_current = hash_md5.hexdigest()
print("checksum_current",checksum_current)
#input(">")
#descargar CSV
print("Descargando dataset de inflación...")
r = requests.get(dataset_url)
with open(csv_path, 'wb') as f:
    f.write(r.content)
del r

#test de update
hash_md5 = hashlib.md5()
with open(csv_path, "rb") as f:
    for chunk in iter(lambda: f.read(4096), b""):
        hash_md5.update(chunk)

checksum_downloaded = hash_md5.hexdigest()
print("checksum_downloaded",checksum_downloaded)

if checksum_downloaded == checksum_current:
    print("No hay datos actualizados, bye.")
    exit()

#cleanup
print("Limpiando data anterior...")
ops_cursor.execute("TRUNCATE TABLE inflacion;")
cnx.commit()

#load csv
print("Procesando CSV...")
df = pd.read_csv (csv_path)
for index, row in df.iterrows():

    print(row)

    rowdata = {
        'ejercicio_presupuestario' : row['ejercicio_presupuestario'],
        'tasa' : row['tasa'],
    }

    insert_cursor.execute(insert_row,rowdata)
    cnx.commit()


del df

print("Ajuste inflacionario general...")
ops_cursor.callproc('inflation_adjust_full')
cnx.commit()

#make operations
print("-- FIN --")