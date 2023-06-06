from ..models import Table

def get_tables():
    table = Table.objects.all()
    return table

def get_table(fecha_in, fecha_fin):
    table = Table.objects.filter(fecha__gte= fecha_in, fecha__lte = fecha_fin)
    return table

def delete_table(fecha_in, fecha_fin):
    table = get_table(fecha_in, fecha_fin)
    for element in table:
        element.delete()
    return table