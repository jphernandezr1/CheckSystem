from .logic import table_logic as vl
from django.http import HttpResponse
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt

def tables_view(request):
    if request.method == 'GET':
        table_dto = vl.get_table(request.body.get('fecha_in'),request.body.get('fecha_fin'))
        table = serializers.serialize('json', [table_dto,])
        return HttpResponse(table, 'application/json')

    if request.method == 'DELETE':
        table_dto = vl.delete_variable()
        table = serializers.serialize('json', [table_dto,])
        return HttpResponse(table, 'application/json')
