from collector_module import new_incidents
from connect import crsr, cnxn

insert_query = '''INSERT INTO incidents (IncidentID, Date, StateOrProvince, CityOrCounty, Address, Killed, Injured)
                  VALUES (?, ?, ?, ?, ?, ?, ?);'''

# numpy array to sql table
# updating old table
for row in new_incidents:
    crsr.execute(insert_query, row[0], row[1], row[2], row[3], row[4], row[5],row[6])

cnxn.commit()

crsr.close()
cnxn.close()