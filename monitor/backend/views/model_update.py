from flask_restful import Resource
from backend.model import dataset


class DatasetUpdater(Resource):
    def get(self):
        dataset.df = dataset.load_from_drive()

        return {"result": "success"}
