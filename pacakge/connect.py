import textwrap
import pyodbc 


server = 'tcp:assurancedatabase.database.windows.net,1433' 
database = 'assurance_db' 
username = 'assurance' 
password = '473c9b60-ee40-11eb-9a03-0242ac130003'
driver = 'ODBC Driver 17 for SQL Server'

connection_string = textwrap.dedent('''
    Driver={driver};
    Server={server};
    Database={database};
    UID={username};
    PWD={password};
    Encrypt=yes;
    TrustServerCertificate=no;
    Connection Timeout=0;
'''.format(
    driver = driver,
    server = server,
    database = database,
    username = username,
    password = password
))

print('connecting...')

cnxn: pyodbc.Connection = pyodbc.connect(connection_string)
crsr: pyodbc.Cursor = cnxn.cursor()

print('connected.')