from app.models import db, PhotoGallery

# Adds a demo user, you can add other users here if you want
def seed_photo_gallery():
    demo1=PhotoGallery(event_id=1,description="",url="https://thumbs.dreamstime.com/b/jollof-rice-west-african-cuisine-chicken-fried-plantain-86976048.jpg")
    demo2=PhotoGallery(event_id=1,description="",url="https://thumbs.dreamstime.com/b/jollof-rice-west-african-cuisine-chicken-fried-plantain-86790990.jpg")
    demo3=PhotoGallery(event_id=1,description="",url="https://www.dreamstime.com/nigerian-food-party-jollof-rice-fried-chicken-wings-close-nigerian-food-party-jollof-rice-fried-chicken-wings-close-up-image112895117")
    demo4=PhotoGallery(event_id=1,description="",url="https://thumbs.dreamstime.com/b/nigerian-jollof-rice-chicken-thigh-roasted-thyme-143247305.jpg")
    demo5=PhotoGallery(event_id=3,description="",url="https://thumbs.dreamstime.com/b/gatsby-south-african-sandwich-different-varieties-gatsbys-include-masala-steak-chicken-polony-vienna-sausage-calamari-fish-46789218.jpg")
    demo6=PhotoGallery(event_id=3,description="",url="https://www.dreamstime.com/stock-photo-gatsby-south-african-sandwich-different-varieties-gatsbys-include-masala-steak-chicken-polony-vienna-sausage-calamari-fish-image46455758")
    demo7=PhotoGallery(event_id=3,description="",url="https://thumbs.dreamstime.com/b/gatsby-south-african-sandwich-different-varieties-gatsbys-include-masala-steak-chicken-polony-vienna-sausage-calamari-fish-46455769.jpg")
    demo8=PhotoGallery(event_id=4,description="",url="https://thumbs.dreamstime.com/b/dough-harsha-moroccan-breakfast-pancakes-close-up-food-shot-some-circle-shaped-wheat-semolina-raw-pieces-kitchen-table-159861018.jpg")
    demo9=PhotoGallery(event_id=4,description="",url="https://thumbs.dreamstime.com/b/close-up-food-shot-some-circle-shaped-wheat-semolina-raw-dough-pieces-hot-pan-cooking-to-make-traditional-moroccan-harsha-159861001.jpg")
    demo10=PhotoGallery(event_id=4,description="",url="https://thumbs.dreamstime.com/b/vertical-shot-some-traditional-moroccan-semolina-wheat-harsha-bread-pancakes-freshly-cooked-plated-blackboard-typical-159861059.jpg")
    demo11=PhotoGallery(event_id=4,description="",url="https://thumbs.dreamstime.com/b/plated-harsha-moroccan-breakfast-pancakes-top-view-food-shot-harcha-semolina-arabesque-colorful-style-plate-traditional-159861034.jpg")
    demo12=PhotoGallery(event_id=5,description="",url="https://thumbs.dreamstime.com/b/nigerian-food-delicious-efo-riro-soup-stock-fish-white-bowl-rich-vegetables-lunch-185024044.jpg")
    demo13=PhotoGallery(event_id=5,description="",url="https://thumbs.dreamstime.com/b/nigerian-food-delicious-efo-riro-soup-white-plate-nigerian-food-delicious-efo-riro-soup-white-plate-dining-concept-n-185024627.jpg")
    demo14=PhotoGallery(event_id=5,description="",url="https://thumbs.dreamstime.com/b/nigerian-efo-riro-african-stewed-spinach-yoruba-cuisine-prepared-vegetables-palm-oil-crayfish-pepper-locust-bean-may-142677395.jpg")
    demo15=PhotoGallery(event_id=5,description="",url="https://thumbs.dreamstime.com/b/nigerian-efo-riro-african-stewed-spinach-yoruba-cuisine-prepared-vegetables-palm-oil-crayfish-pepper-locust-bean-may-142192025.jpg")
    demo16=PhotoGallery(event_id=6,description="",url="https://thumbs.dreamstime.com/b/festive-moroccan-fekkas-cookies-mint-tea-99353400.jpg")
    demo17=PhotoGallery(event_id=6,description="",url="https://thumbs.dreamstime.com/b/traditional-moroccan-fekkas-dish-cookies-tea-59709414.jpg")
    demo18=PhotoGallery(event_id=6,description="",url="https://thumbs.dreamstime.com/b/crunchy-moroccan-savory-spicy-fekkas-traditional-dish-69510733.jpg")
    demo19=PhotoGallery(event_id=6,description="",url="https://thumbs.dreamstime.com/b/traditional-moroccan-fekkas-cookies-tea-dish-festive-75960007.jpg")
    demo20=PhotoGallery(event_id=7,description="",url="https://thumbs.dreamstime.com/b/sushi-set-nigiri-sashimi-tea-served-gray-stone-slate-metal-background-66049563.jpg")
    demo21=PhotoGallery(event_id=7,description="",url="https://thumbs.dreamstime.com/b/sushi-platter-14287709.jpg")
    demo22=PhotoGallery(event_id=7,description="",url="https://thumbs.dreamstime.com/b/sushi-rolls-set-stone-slate-served-gray-metal-background-65612523.jpg")
    demo23=PhotoGallery(event_id=7,description="",url="https://thumbs.dreamstime.com/b/asian-sushi-variation-many-kinds-meals-kari-rice-soup-vegetable-top-view-served-black-stone-asian-sushi-variation-113816438.jpg")
    demo24=PhotoGallery(event_id=8,description="",url="https://thumbs.dreamstime.com/b/nigerian-banga-soup-cuisine-traditional-assorted-dishes-top-view-109257979.jpg")
    demo25=PhotoGallery(event_id=8,description="",url="https://thumbs.dreamstime.com/b/nigerian-banga-soup-nigerian-cuisine-banga-soup-traditional-assorted-dishes-top-view-109358780.jpg")
    demo26=PhotoGallery(event_id=8,description="",url="https://thumbs.dreamstime.com/b/nigerian-banga-soup-nigerian-cuisine-banga-soup-traditional-assorted-dishes-top-view-109257914.jpg")
    demo27=PhotoGallery(event_id=8,description="",url="https://thumbs.dreamstime.com/b/nigerian-food-delicious-efo-riro-soup-white-plate-to-be-eaten-lunch-pounded-yam-eba-nigerian-food-delicious-banga-185023763.jpg")
    demo28=PhotoGallery(event_id=9,description="",url="https://thumbs.dreamstime.com/b/miso-ramen-soup-japanese-tofu-egg-dark-stone-background-noodles-tofu-ceramic-bowl-asian-97012502.jpg")
    demo29=PhotoGallery(event_id=9,description="",url="https://thumbs.dreamstime.com/b/ramen-noodle-close-up-bowl-japanese-chicken-top-view-91416842.jpg")
    demo30=PhotoGallery(event_id=9,description="",url="https://thumbs.dreamstime.com/b/asian-miso-ramen-noodles-egg-tofu-enoki-bowl-gray-wooden-background-55772972.jpg")
    demo31=PhotoGallery(event_id=9,description="",url="https://thumbs.dreamstime.com/b/ramen-bowl-soup-egg-green-onion-chili-paste-shiitake-mushrooms-chopsticks-76810050.jpg")
    demo32=PhotoGallery(event_id=10,description="",url="https://thumbs.dreamstime.com/b/daifuku-mochi-japanese-dessert-dish-over-wooden-background-80619358.jpg")
    demo33=PhotoGallery(event_id=10,description="",url="https://thumbs.dreamstime.com/b/green-tea-mochi-famous-traditional-japanese-desert-ceramic-bowls-wooden-tray-chopsticks-32182568.jpg")
    demo34=PhotoGallery(event_id=10,description="",url="https://thumbs.dreamstime.com/b/japanese-mochi-ice-cream-gourmet-dessert-japanese-mochi-ice-cream-green-tea-lemon-vanilla-flavor-194003466.jpg")
    demo35=PhotoGallery(event_id=10,description="",url="https://thumbs.dreamstime.com/b/mochi-19449311.jpg")
    demo36=PhotoGallery(event_id=11,description="",url="https://thumbs.dreamstime.com/b/kenyan-githeri-maize-beans-mixed-together-sufuria-cuisine-traditional-assorted-african-dishes-top-view-170276337.jpg")
    demo37=PhotoGallery(event_id=11,description="",url="https://thumbs.dreamstime.com/b/kenyan-githeri-maize-beans-mixed-together-sufuria-cuisine-traditional-assorted-african-dishes-top-view-170565925.jpg")
    demo38=PhotoGallery(event_id=11,description="",url="https://thumbs.dreamstime.com/b/kenyan-githeri-maize-beans-mixed-together-sufuria-cuisine-traditional-assorted-african-dishes-top-view-170565094.jpg")
    demo39=PhotoGallery(event_id=12,description="",url="https://thumbs.dreamstime.com/b/shiro-homogeneous-stew-chickpeas-broad-bean-ethiopian-cuisine-61945174.jpg")
    demo40=PhotoGallery(event_id=12,description="",url="https://thumbs.dreamstime.com/b/shiro-homogeneous-stew-chickpeas-broad-bean-ethiopian-cuisine-61602639.jpg")
    demo41=PhotoGallery(event_id=12,description="",url="https://thumbs.dreamstime.com/b/shiro-homogeneous-stew-chickpeas-broad-bean-ethiopian-cuisine-61505773.jpg")
    demo42=PhotoGallery(event_id=12,description="",url="https://thumbs.dreamstime.com/b/algerian-rechta-maghreb-chick-chicken-noodle-soup-43075140.jpg")
    demo43=PhotoGallery(event_id=12,description="",url="https://thumbs.dreamstime.com/b/algerian-rechta-maghreb-chick-chicken-noodle-soup-43168550.jpg")

    db.session.add_all([demo1,demo2,demo3,demo4,demo5,demo6,demo7,demo8,demo9,demo10,demo11,demo12,demo13,demo14,demo15,demo16,demo17,demo18,demo19,demo20,demo21,demo22,demo23,demo24,demo25,demo26,demo27,demo28,demo29,demo30,demo31,demo32,demo33,demo34,demo35,demo36,demo37,demo38,demo39,demo40,demo41,demo42,demo43])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_photo_gallery():
    db.session.execute('TRUNCATE photo_gallery;')
    db.session.commit()
