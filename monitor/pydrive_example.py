from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

# https://pythonhosted.org/PyDrive/oauth.html
# https://stackoverflow.com/questions/24419188/automating-pydrive-verification-process

gauth = GoogleAuth()
# Try to load saved client credentials
gauth.LoadCredentialsFile("credentials.json")
if gauth.credentials is None:
    # Authenticate if they're not there
    gauth.LocalWebserverAuth()
elif gauth.access_token_expired:
    # Refresh them if expired
    gauth.Refresh()
else:
    # Initialize the saved creds
    gauth.Authorize()
# Save the current credentials to a file
gauth.SaveCredentialsFile("credentials.json")

drive = GoogleDrive(gauth)

# https://pythonhosted.org/PyDrive/filemanagement.html#download-file-content
example_file = drive.CreateFile({'id': '0ByV8mszxSZjFdC0wTjhJam9EWVU'})
content = example_file.GetContentString()
print(content)
