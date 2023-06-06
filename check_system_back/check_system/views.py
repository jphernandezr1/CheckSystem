from .logic import variables_logic as vl
from django.http import HttpResponse
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt

def tables_view(request):
    if request.method == 'GET':
        variable_dto = vl.get_variable(pk)
        variable = serializers.serialize('json', [variable_dto,])
        return HttpResponse(variable, 'application/json')

    if request.method == 'DELETE':
        variable_dto = vl.delete_variable(pk)
        variable = serializers.serialize('json', [variable_dto,])
        return HttpResponse(variable, 'application/json')
