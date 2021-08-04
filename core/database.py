import urllib
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


server = 'tcp:assurancedatabase.database.windows.net' 
database = 'assurance_db' 
username = 'assurance' 
password = '473c9b60-ee40-11eb-9a03-0242ac130003'

driver = '{ODBC Driver 17 for SQL Server}'

odbc_str = 'DRIVER='+driver+';SERVER='+server+';UID='+username+';DATABASE='+ database + ';PWD='+ password
connect_str = 'mssql+pyodbc:///?odbc_connect=' + urllib.parse.quote_plus(odbc_str)

# print (connect_str)

engine = create_engine(connect_str)

# print (engine.execute("SELECT TOP 10 * From incidents").fetchall())

# The handle to database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# returns a cls, inherit from this cls to create each of the db models(ORM models)
Base = declarative_base()