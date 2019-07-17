from flask_restful import Resource
from backend.drive import DriveClient
from backend.model import dataset


class DatasetUpdater(Resource):
    def get(self, year):
        file_path = './data/' + year + '.csv'
        drive_client = DriveClient()
        drive_client.download_file_by_year(year, file_path)
        dataset.clean_file(file_path)
        dataset.update_dataset()
        return {"result": "success"}
