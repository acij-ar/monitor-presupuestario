from flask_restful import Resource
from backend.drive import DriveClient
from backend.model import dataset


class DatasetUpdater(Resource):
    def get(self, year):
        drive_client = DriveClient()
        drive_client.download_file_by_year(year, './data/' + year + '.csv')
        dataset.update_dataset()
        return {"result": "success"}
