from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

# https://pythonhosted.org/PyDrive/oauth.html
# https://stackoverflow.com/questions/24419188/automating-pydrive-verification-process
# https://pythonhosted.org/PyDrive/filemanagement.html#download-file-content


files = [
    {'id': '1cTGxXnGG1nvVwW4BXhk7jrX1LeAHp3tb', 'year': '2007'},
    {'id': '15VvixVddZqvzUfKTEu-LCo2Ik0Io4k5Z', 'year': '2008'},
    {'id': '1JEgnFqf26DYo4n-t-cgAMIaqYWK_1Ijp', 'year': '2009'},
    {'id': '1dBHVYJWdkP_Gk0Eu_KT7-g_dMmCDtJ29', 'year': '2010'},
    {'id': '1JRgbOXi1PI8JE8P1ejEotzuAJHlEPRkO', 'year': '2011'},
    {'id': '1efU5B0pwj09_VBYKrjIS3hvVs8oeo9hV', 'year': '2012'},
    {'id': '1DePIOGl2zTyPZfhZD_Kc-FzdmDl1VBvx', 'year': '2013'},
    {'id': '1REctQhQff-pDxVYAWTC1BRcy9tJlG7p1', 'year': '2014'},
    {'id': '10yqGo_IqD0d7B13BSCTVzUI5TmDv0pS9', 'year': '2015'},
    {'id': '1Ai6a8R3BVS3Q1NLnw8hfDftQ0cI2_cqW', 'year': '2016'},
    {'id': '1Ex-4L78EtcPKU0kNnp1om5juyc8c7eYo', 'year': '2017'},
    {'id': '1DYr5WYp-7_dd8OD4kgo0y0Gqp5jHsp5n', 'year': '2018'},
    {'id': '1zv_DaTi17EZomXv6DalNKlnEvzCjRDap', 'year': '2019'},
]


class DriveClient:
    def __init__(self):
        gauth = GoogleAuth()
        gauth.LoadCredentialsFile("credentials.json")
        if gauth.credentials is None:
            gauth.LocalWebserverAuth()
        elif gauth.access_token_expired:
            gauth.Refresh()
        else:
            gauth.Authorize()
        gauth.SaveCredentialsFile("credentials.json")
        self.drive = GoogleDrive(gauth)

    def download_file_by_year(self, year, output_path):
        file_id = next(file['id'] for file in files if file['year'] == year)
        self.download_file(file_id, output_path)

    def download_file(self, file_id, output_path):
        drive_file = self.drive.CreateFile({'id': file_id})
        drive_file.GetContentFile(output_path)
