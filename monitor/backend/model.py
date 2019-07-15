from io import StringIO
import pandas as pd
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

# https://pythonhosted.org/PyDrive/oauth.html
# https://stackoverflow.com/questions/24419188/automating-pydrive-verification-process
# https://pythonhosted.org/PyDrive/filemanagement.html#download-file-content

gauth = GoogleAuth()
gauth.LoadCredentialsFile("credentials.json")
if gauth.credentials is None:
    gauth.LocalWebserverAuth()
elif gauth.access_token_expired:
    gauth.Refresh()
else:
    gauth.Authorize()
gauth.SaveCredentialsFile("credentials.json")
drive = GoogleDrive(gauth)


files = [
    '1cTGxXnGG1nvVwW4BXhk7jrX1LeAHp3tb',  # 2007
    '15VvixVddZqvzUfKTEu-LCo2Ik0Io4k5Z',  # 2008
    '1JEgnFqf26DYo4n-t-cgAMIaqYWK_1Ijp',  # 2009
    '1dBHVYJWdkP_Gk0Eu_KT7-g_dMmCDtJ29',  # 2010
    '1JRgbOXi1PI8JE8P1ejEotzuAJHlEPRkO',  # 2011
    '1efU5B0pwj09_VBYKrjIS3hvVs8oeo9hV',  # 2012
    '1DePIOGl2zTyPZfhZD_Kc-FzdmDl1VBvx',  # 2013
    '1REctQhQff-pDxVYAWTC1BRcy9tJlG7p1',  # 2014
    '10yqGo_IqD0d7B13BSCTVzUI5TmDv0pS9',  # 2015
    '1Ai6a8R3BVS3Q1NLnw8hfDftQ0cI2_cqW',  # 2016
    '1Ex-4L78EtcPKU0kNnp1om5juyc8c7eYo',  # 2017
    '1DYr5WYp-7_dd8OD4kgo0y0Gqp5jHsp5n',  # 2018
    '1zv_DaTi17EZomXv6DalNKlnEvzCjRDap',  # 2019
]

df = pd.DataFrame()

for file_id in files:
    drive_file = drive.CreateFile({'id': file_id})
    file_content = drive_file.GetContentString()
    file_df = pd.read_csv(StringIO(file_content))
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
    df = pd.concat([df, file_df])

df_inflacion = pd.read_csv('data/inflacion.csv')

