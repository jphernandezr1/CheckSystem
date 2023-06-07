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