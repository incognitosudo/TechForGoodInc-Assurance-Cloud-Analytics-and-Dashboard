from collector_module import data, new_incidents
from connect import crsr, cnxn

# creating a table in the sql database
crsr.execute('''
            CREATE TABLE incidents
            (
                IncidentID varchar(255),
                Date varchar(255),
                StateOrProvince varchar(255),
                CityOrCounty varchar(255),
                Address varchar(255),
                Killed varchar(255),
                Injured varchar(255),
            );
            ''')

insert_query = '''INSERT INTO incidents (IncidentID, Date, StateOrProvince, CityOrCounty, Address, Killed, Injured)
                  VALUES(?, ?, ?, ?, ?, ?, ?);'''

# numpy array to sql table
for row in data:
    crsr.execute(insert_query, row[0], row[1], row[2], row[3], row[4], row[5],row[6])

cnxn.commit()

crsr.close()
cnxn.close()