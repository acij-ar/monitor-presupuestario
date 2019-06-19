from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

gauth = GoogleAuth()
gauth.LocalWebserverAuth() # Creates local webserver and auto handles authentication.

drive = GoogleDrive(gauth)

example_file = drive.CreateFile({'id': '0ByV8mszxSZjFdC0wTjhJam9EWVU'})
content = example_file.GetContentString()
print(content)
