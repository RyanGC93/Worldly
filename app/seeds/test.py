from faker import Faker
fake = Faker()

name = fake.name()
print(name) 
    
demo = User( id=1, first_name='Demo',last_name='Demo',user_name='Demo', email='demo@aa.io',password='password',phone_number="9704819923")
   