import csv
import numpy as np
from datetime import date
import os

def read_file(filename, L):
    f = os.path.join('/db management', filename)
    fp = open(filename, "r")
    reader = csv.reader(fp)
    fp.readline()
    for line in reader: 
        # line order: incident id, date, state or province, city or county, address, killed, injured
        L.append(line[:7])

data_list = []

for year in range(2014, 2022):
    filename = str(year) + ".csv"
    read_file(filename, data_list)

data = np.array(data_list) # up to July 15th, 2021
# print(data)
# print("\nfirst item: ", data[0])
# print("\nlast item: ", data[-1])

from bs4 import BeautifulSoup
import requests

link = "https://www.gunviolencearchive.org/reports/number-of-gun-deaths"

website = requests.get(link).text 
source = BeautifulSoup(website, "lxml") # lxml for fast large data processing
src = source.find_all("td")
holder = []
for line in src:
    if line.text.split() != ['View', 'Incident', 'View', 'Source']:
        holder.append(line.text)

holder = np.array(holder).reshape(-1, 7)
# print(holder)

id_list = []

for item in data:
    id_list.append(item[0])

new_incidents = []
for incident in holder:
    if not incident[0] in id_list:
        new_incidents.append(incident)
        np.vstack((data, incident))

new_incidents = np.array(new_incidents).reshape(-1, 7)
# print(data)