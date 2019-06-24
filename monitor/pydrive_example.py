from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

# https://pythonhosted.org/PyDrive/oauth.html
gauth = GoogleAuth()
gauth.LocalWebserverAuth() # Creates local webserver and auto handles authentication.

drive = GoogleDrive(gauth)

# https://pythonhosted.org/PyDrive/filemanagement.html#download-file-content
example_file = drive.CreateFile({'id': '0ByV8mszxSZjFdC0wTjhJam9EWVU'})
content = example_file.GetContentString()
print(content)
