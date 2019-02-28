# encoding=utf8
import csv
import sys

reload(sys)
sys.setdefaultencoding('utf8')


def load_presupuesto_old():
    with open('presupuesto_old.csv', 'r') as csvfile:
        return list(csv.reader(csvfile, delimiter=',', quotechar='"'))


def write_presupuesto(presupuesto):
    with open('presupuesto.csv', 'wb') as csvfile:
        writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerows(presupuesto)


def capitalize_rows(presupuesto):
    for row in presupuesto:
        row[5] = row[5][0].upper() + row[5][1:]
        row[7] = row[7][0].upper() + row[7][1:]


def main():
    presupuesto = load_presupuesto_old()
    capitalize_rows(presupuesto)
    write_presupuesto(presupuesto)


main()
