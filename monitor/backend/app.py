import pandas as pd
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource

from backend.views.search import Search
from backend.views.programs import Program
from backend.views.jurisdictions import Jurisdiction
from backend.views.activities import Activity, ActivityTable

# The WSGI compliant web application object
app = Flask(__name__)

# Read common settings from 'app/config.py'
app.config.from_object('backend.config')

# Setup flask plugins
cors = CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

# Add the views
api.add_resource(HelloWorld, '/')
api.add_resource(Search, '/buscar')
api.add_resource(Jurisdiction, '/jurisdiccion')
api.add_resource(Program, '/programa/<string:juri_name>')
api.add_resource(Activity, '/actividad/<string:juri_name>/<int:prog_id>')
api.add_resource(ActivityTable, '/actividad/tabla/<string:juri_name>/<int:prog_id>')
