from ..models import table

def get_tables():
    table = table.objects.all()
    return table

def get_table(fecha_in, fecha_fin):
    table = table.objects.all.filter
    return table

def delete_table(var_pk):
    table = get_table(var_pk)
    table.delete()
    return table