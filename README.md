# Dibbs - PygHack 2017
*Save Food. Do Good.*


Dibbs is the real time platform to connect surplus food at grocery stores to their local food agencies.

## FAQ 

*For Donors:*

Q: Who can donate food?
	A: At the moment, Dibbs is offered to grocery stores.

Q: How does it work?
	A: A store associate enters the surplus food’s information onto the Dibbs platform. The grocery store decides their best time slots for pick-up and can communicate with participating food agencies with Dibbs. Upon notification that the food is claimed, a store associate places the food at the specified time and location for pick-up. At exchange, the store associate confirms the transaction is complete and may leave a rating for the food agency.

Q: As a grocery store, why should I donate?
	A: Dibbs helps grocery stores empower their local community, engage their employees, increase their bottom line, and improve their environmental footprint while reducing food disposal costs. Dibbs provides the visibility to see where your surplus food goes and the aggregated data to file for enhanced tax benefits. 

Q: What kinds of food can be donated/received?
	A: Both perishable foods and non-perishable foods can be donated. 

Q: What guidelines should I follow?
	A: Dairy and produce donations should be refrigerated until pick-up. Meat donations should be frozen until pick-up.

Q: As a donor, what liability issues should I be aware of?
	A: The Federal Bill Emerson Good Samaritan Food Donation Act protects the donor and the recipient agency against liability with exception to gross negligence and/or intentional misconduct. More information here.

*For Recipients:* 

Q: Who can receive food?
	A: Food agencies are registered 501c(3) organizations that use Dibbs food to increase their social impact and mission. Examples are food pantries, soup kitchens, and shelters. 

Q: How does it work?
	A: A food agency staff or volunteer can browse the food available on the Dibbs dashboard and “call Dibbs” with the push of a button. The food agency is then responsible to pick-up the food at the scheduled time and location. Dibbs recommends agencies to maintain good relationships with donors. Thank you messages and shout-outs on social media are always appreciated.

Q: As a food agency, what guidelines should I follow?
	A: To receive perishable foods, agencies need proper refrigeration in place. People picking-up food need be ServSafe certified. 
  
  
  

## To Start JS Frontend

You need:
1. node.js
2. npm

```
cd dibb
npm install
npm start
```

A browser window will open to localhost:3000


## To Start Python Backend

You need:
1. python 3.x

```
cd django

virtualenv env
./env/bin/activate

pip install -r requirements.txt

echo 'setting up database'
./manage.py migrate

./manage.py runserver 0.0.0.0:8000
```

Open a browser to localhost:8000



