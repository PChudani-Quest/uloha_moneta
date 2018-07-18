# uloha_moneta

## installation
first install by issuing 
```
> npm install
```

## usage
Start by issuing 
```
> npm run start
```
node server will run on localhost:3000 by default.


Requests are made by POST

```
curl -X POST \
  http://localhost:3000/calculate \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"number": 43256791
}'
```
