from ..models import Table
from decimal import Decimal

def get_tables():
    table = Table.objects.all()
    return table

def convertir(moneyVal):
    values=moneyVal.split("$")
    return values[1]

def get_table(fecha_in, fecha_fin):
    table = Table.objects.filter(fecha__gte= fecha_in, fecha__lte = fecha_fin)
    tip_tot=0
    check_tot=0
    total_pay=0
    header={'total_paid':"$0.0", 'total_checks':"$0.0", 'total_tips': "$0.0"}
    if len(table)>0:
        for element in table:
            tip_tot += float(convertir(element.Total_tip))
            check_tot += float(convertir(element.Total_cuenta)) 
            total_pay += float(convertir(element.Total_paid))
        header={'total_paid':"$"+str(total_pay.__round__(2)), 'total_checks':"$"+str(check_tot.__round__(2)), 'total_tips': "$"+str(tip_tot.__round__(2))}
    return table,header

def delete_table(fecha_in, fecha_fin):
    table, head = get_table(fecha_in, fecha_fin)
    table_2 =[]
    for element in table:
        if element.active == False:
            table_2.append(element)
            element.delete()  
    return table_2