# encoding=utf8
import csv
from unidecode import unidecode
import sys

reload(sys)
sys.setdefaultencoding('utf8')


def load_presupuesto_old():
    with open('presupuesto_old.csv', 'r') as csvfile:
        return list(csv.reader(csvfile, delimiter=',', quotechar='"'))


def load_presupuesto_2019():
    with open('presupuesto_2019.csv', 'r') as csvfile:
        presupuesto_2019_tmp = list(csv.reader(csvfile, delimiter=',', quotechar='"'))
        presupuesto_2019_tmp.pop(0)
        for row in presupuesto_2019_tmp:
            row[5] = unidecode(row[5].lower())
            row[7] = unidecode(row[7].lower())
        return presupuesto_2019_tmp


def write_presupuesto(presupuesto):
    with open('presupuesto.csv', 'wb') as csvfile:
        writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerows(presupuesto)


def find_row_for(row_old, presupuesto_2019):
    for row_2019 in presupuesto_2019:
        # juris_desc
        if row_old[1] == row_2019[1]:
            # entidad_id and entidad_desc
            if row_old[2] == row_2019[2] and row_old[3] == row_2019[3]:
                # program_id and program_desc
                if row_old[4] == row_2019[4] and row_old[5] == row_2019[5]:
                    # activity_id and activity_desc
                    if row_old[6] == row_2019[6] and row_old[7] == row_2019[7]:
                        if row_2019[0] == '2019':
                            row_2019[0] = '2019-found'
                            return row_2019
                        else:
                            print(row_old)
                            print(row_2019)
                            raise Exception('Duplicated')
    return None


def parse_number(num):
    if ',' in num:
        integer, decimal = num.split(',')
        return int(float(integer) * 1e6 + float('0.' + decimal) * 1e6)
    return int(float(num) * 1e6)


def update_row(row, presupuesto_2019):
    new_row = find_row_for(row, presupuesto_2019)
    if new_row is not None:
        row[-1] = new_row[-1]
        row[-2] = new_row[-2]
        row[-3] = new_row[-3]
        row[-4] = new_row[-4]
        row[-5] = new_row[-5]
    return row


def update_dataset():
    presupuesto_old = load_presupuesto_old()
    presupuesto_2019 = load_presupuesto_2019()
    for row in presupuesto_2019:
        row[-1] = parse_number(row[-1])
        row[-2] = parse_number(row[-2])
        row[-3] = parse_number(row[-3])
        row[-4] = parse_number(row[-4])
        row[-5] = parse_number(row[-5])
    for row in presupuesto_old:
        if '2019' == row[0]:
            update_row(row, presupuesto_2019)
    extra_rows = [
        row for row in presupuesto_2019
        if row[0] == '2019'
    ]
    presupuesto_old += extra_rows
    print(len(extra_rows))
    write_presupuesto(presupuesto_old)


update_dataset()
