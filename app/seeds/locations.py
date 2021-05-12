
from app.models import db, Location

# Adds a demo user, you can add other users here if you want
def seed_location():    
    demo2=Location(event_id=2, longitude=9.081999, latitude=8.675277, country="Nigeria", region="Africa")
    demo3=Location(event_id=3, longitude=28.18712, latitude=-25.74602, country="South Africa", region="Africa")
    demo4=Location(event_id=4, longitude=7.09262, latitude=31.791702, country="Morocco", region="Africa")
    demo5=Location(event_id=5, longitude=9.081999, latitude=8.675277, country="Nigeria", region="Africa")
    demo6=Location(event_id=6, longitude=-7.09262, latitude=31.791702, country="Morocco", region="Africa")
    demo7=Location(event_id=7, longitude=139.839478, latitude=35.652832, country="Japan ", region="Asia")
    demo8=Location(event_id=8, longitude=3.406448, latitude=6.465422, country=".Nigeria", region="Africa")
    demo9=Location(event_id=9, longitude=139.839478, latitude=35.652832, country="Japan ", region="Asia")
    demo10=Location(event_id=10, longitude=139.839478, latitude=35.652832, country="Japan", region="Asia")
    demo11=Location(event_id=11, longitude=36.817223, latitude=-1.286389, country="Kenya", region="Africa")
    demo12=Location(event_id=12, longitude=37.466667, latitude=12.6, country="Ethiopa", region="Africa")
    demo13=Location(event_id=13, longitude=3.082667, latitude=36.726017, country="Algeria", region="Africa")
    demo14=Location(event_id=14, longitude=121.46917, latitude=31.224361, country="China", region="Asia")
    demo15=Location(event_id=15, longitude=77.230003, latitude=28.610001, country="India", region="Asia")
    demo16=Location(event_id=16, longitude=136.899994, latitude=35.183334, country="Japan", region="Asia")
    demo17=Location(event_id=17, longitude=74.629997, latitude=24.879999, country="India", region="Asia")
    demo18=Location(event_id=18, longitude=105.804817, latitude=21.028511, country="Vietnam", region="Asia")
    demo19=Location(event_id=19, longitude=116.383331, latitude=39.916668, country="China", region="Asia")
    demo20=Location(event_id=20, longitude=16.606836, latitude=49.195061, country="Czech Republic", region="Europe")
    demo21=Location(event_id=21, longitude=13.404954, latitude=52.520008, country="Germany", region="Europe")
    demo22=Location(event_id=22, longitude=-0.118092, latitude=51.509865, country="United Kingdom", region="Europe")
    demo23=Location(event_id=23, longitude=12.496366, latitude=41.902782, country="Italy", region="Europe")
    demo24=Location(event_id=24, longitude=4.895168, latitude=52.370216, country="Netherlands", region="Europe")
    demo25=Location(event_id=25, longitude=19.040236, latitude=47.497913, country="Hungary", region="Europe")
    demo26=Location(event_id=26, longitude=13.55278, latitude=46.3375, country="Slovenia", region="Europe")
    demo27=Location(event_id=27, longitude=2.154007, latitude=41.390205, country="Spain", region="Europe")
    demo28=Location(event_id=28, longitude=-46.62529, latitude=-23.533773, country="Brazil", region="South America")
    demo29=Location(event_id=29, longitude=-70.673676, latitude=-33.447487, country="Chile", region="South America")
    demo30=Location(event_id=30, longitude=-99.133209, latitude=19.432608, country="Mexico", region="Latin America")
    demo31=Location(event_id=31, longitude=-77.042793, latitude=-12.046374, country="Peru", region="South America")
    demo32=Location(event_id=32, longitude=-85.439346, latitude=10.630573, country="Costa Rica", region="Latin America")
    demo34=Location(event_id=34, longitude=-103.349609, latitude=20.659698, country="Mexico ", region="Latin America")


    db.session.add_all([demo2,demo3,demo4,demo5,demo6,demo7,demo8,demo9,demo10,demo11,demo12,demo13,demo14,demo15,demo16,demo17,demo18,demo19,demo20,demo21,demo22,demo23,demo24,demo25,demo26,demo26,demo27])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_location():
    db.session.execute('TRUNCATE locations;')
    db.session.commit()
