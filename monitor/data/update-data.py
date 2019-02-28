# encoding=utf8
import csv


def load_presupuesto_old():
    with open('presupuesto_old.csv', 'r') as csvfile:
        return list(csv.reader(csvfile, delimiter=',', quotechar='"'))


def load_presupuesto_2019():
    with open('presupuesto_2019.csv', 'r') as csvfile:
        presupuesto_2019_tmp = list(csv.reader(csvfile, delimiter=',', quotechar='"'))
        presupuesto_2019_tmp.pop(0)
        for row in presupuesto_2019_tmp:
            row[-1] = parse_number(row[-1])
            row[-2] = parse_number(row[-2])
            row[-3] = parse_number(row[-3])
            row[-4] = parse_number(row[-4])
            row[-5] = parse_number(row[-5])
        return presupuesto_2019_tmp


def write_presupuesto(presupuesto):
    with open('presupuesto.csv', 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerows(presupuesto)


def parse_number(num):
    if ',' in num:
        integer, decimal = num.split(',')
        return int(float(integer) * 1e6 + float('0.' + decimal) * 1e6)
    return int(float(num) * 1e6)


def update_dataset():
    presupuesto_old = load_presupuesto_old()
    presupuesto_2019 = load_presupuesto_2019()

    presupuesto = [
        row for row in presupuesto_old if row[0] != '2019'
    ] + presupuesto_2019
    write_presupuesto(presupuesto)


update_dataset()
