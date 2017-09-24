# pyghackDibbs
Save Food. Do Good.


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