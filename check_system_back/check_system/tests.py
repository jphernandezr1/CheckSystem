import json
from django.test import TestCase
from .models import Table
from .logic import table_logic as tl
from datetime import date

class TableTestCase(TestCase):
    db_ids=[]
    def test_seed_database(self):
        self.db_ids=[]
        for i in range(1,10):
            element=Table(num_mesa=i, fecha=date(2030, 1, 10))
            self.db_ids.append(element)
            element.save()
        self.assertIsNotNone(tl.get_tables())
        self.assertEquals(len(tl.get_tables()), len(self.db_ids))
        
    def test_tables(self):
        self.test_seed_database()
        self.assertIsNotNone(tl.get_tables())

    def test_get_by_dates(self):
        self.test_seed_database()
        self.assertEquals(len(tl.get_table("2030-1-1", "2030-1-31")[0]), len(self.db_ids))

    def test_delete(self):
        self.test_seed_database()
        self.assertEquals(len(tl.delete_table("2030-1-1", "2030-1-31")),0)
        self.assertEquals(len(tl.get_tables()),len(self.db_ids))
    
    def test_home(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello world! Check-System-Back")

    def test_get_request(self):
        self.test_seed_database()
        data = {
        'fecha_in': '2023-01-01',
        'fecha_fin': '2023-01-31'
        }
        response = self.client.get('/service/?fecha_in=2023-01-01&fecha_fin=2023-01-31')
        self.assertEqual(response.status_code, 200)

    def test_delete_request(self):
        data = {
            'fecha_in': '2023-01-01',
            'fecha_fin': '2023-12-31'
        }
        response = self.client.delete('/service/', data=json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)