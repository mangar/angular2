

# Tech

```
touch /root/.config/configstore/insight-yo.json; yo fountain-webapp
npm install
npm install -g jspm
jspm init -p
jspm install
```

```
npm run serve
```


# TODO

- add Bootstrap
- add admin template


- - - 




__New way__
```
docker-compose up
```

<http://localhost:3000>





__Old way__

Start server:
```
docker run -d -p 8081:80 -v `pwd`:/app --name mangar-angular2  mangar/fountainjs:1.5
```

Login into:
```
docker exec -u 0 -it mangar-angular2 bash
```
