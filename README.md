# weusthem


Created with React + Redux, Django + Django Rest Framework.

### BackEnd:
1. virtualenv env  
2. env\Scripts\activate (on Mac: source env/bin/activate)   
3. pip3 install -r requirements.txt  
4. python3 manage.py runserver  

# urls:
1. To create a contact: http://199.116.235.221:8000/create/
2. To view all contacts: http://199.116.235.221:8000/view/
3. To update one contact by using the Primary Key: http://199.116.235.221:8000/update/pk/
4. To Delete contact: http://199.116.235.221:8000/update/pk/delete

### FrontEnd:
1. npm install  
2. npm start  

## On server:  
### server host: http://199.116.235.221:3000/
### start FrontEnd:
    -  npm run build  
    -  serve -s build -l 3000  
### stop FrontEnd:   
    -  lsof -i tcp:3000
    -  kill -9 PID
### start BackEnd: python3 manage.py runserver 0.0.0.0:8000 &  
### stop BackEnd:   
    -  ps auxw | grep runserver
    -  kill PID    

## Error solution:  

### 1. Mac env unable to install psycopg2  
        1.1 go to https://postgresapp.com/ and download postgresapp   
        1.2 export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin/   
            (the version should be different.)   
        1.3 pip3 install psycopg2  

### 2. ubuntu unable to install psycopg2
        2.1 sudo apt-get update
        2.2 sudo apt-get install libpq-dev python3-dev
        2.3 sudo pip3 install psycopg2
