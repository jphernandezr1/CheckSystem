from .logic import table_logic as tl
from django.http import HttpResponse
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def tables_view(request):
    if request.method == 'GET':
        fecha_in = request.GET.get('fecha_in')
        fecha_fin = request.GET.get('fecha_fin')
        table_dto, head = tl.get_table(fecha_in,fecha_fin)
        table = serializers.serialize('json', table_dto)
        return HttpResponse(str(head)+ table, 'application/json')

    if request.method == 'DELETE':
        dta=json.loads(request.body)
        table_dto = tl.delete_table(dta['fecha_in'],dta['fecha_fin'])
        table = serializers.serialize('json', table_dto)
        return HttpResponse( table, 'application/json')
