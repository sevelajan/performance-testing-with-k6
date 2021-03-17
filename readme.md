# CZ
## Testování výkonu s K6

> Testování zatížení, ukázka k6

> Vychází z video tutoriálu a podkladů [Chrise Jamese](https://github.com/cajames/performance-testing-with-k6)

### Doporučený videotutoriál Chrise Jamese o testování s K6
[![Performance Testing with k6 Video](https://img.youtube.com/vi/Hu1K2ZGJ_K4/0.jpg)](https://www.youtube.com/watch?v=Hu1K2ZGJ_K4)

### Spouštění
- Stažení Docker obrazů, sestavení, inicializace a spuštění InfluDB a Grafany:\
`docker-compose up -d influxdb grafana`
- Načtení Grafany [localhost:3000](http://localhost:3000) a import konfigurace nové přístrojové desky `grafana_dashboard.json`: "+ (CREATE)/Import", vybrat JSON soubor, následně vybrat našeptávanou databázi K6
- `docker-compose run k6 run /tests/02-stages/test.js` spustí test s nastavením dle souboru `test.js` a průběh lze sledovat v Grafaně
![Output](https://github.com/sevelajan/performance-testing-with-k6/blob/master/grafana_k6_outputs.png)

### Konverze HAR souboru na K6 javascript konfigurační soubor
- vytvoření adresáře `./tests/03-har-to-k6/` a nakopírování HAR souboru `example.har` do něj
- v souboru `Dockerfile.k6` odkomentování příkazu ke zkopírování HAR souboru do Docker kontejneru:\
`#COPY ./tests/03-har-to-k6/example.har  /home/k6/`
- nyní je nutné znovu sestavit obraz a kontejner ke K6 (`docker rm JmenoKontejneru` a `docker image rmi IdObrazu`)
- spuštění konverze HAR souboru `example.har` na konfigurační javascript soubor pro K6:
`docker-compose run k6 convert example.har > ./tests/03-har-to-k6/test-script.js` 
- nyní lze konvertovaný soubor `test-script.js` upravit dle vlastního potřeb a spustit tento test dle předchozího bodu Spouštění

# EN
> [cajames/performance-testing-with-k6](https://github.com/cajames/performance-testing-with-k6)
## Performance Testing with K6

> Load testing workshop, demonstrating k6

> It comes from video tutorial and sources [Chris James](https://github.com/cajames/performance-testing-with-k6)

### Video

[![Performance Testing with k6 Video](https://img.youtube.com/vi/Hu1K2ZGJ_K4/0.jpg)](https://www.youtube.com/watch?v=Hu1K2ZGJ_K4)

### Getting started:
- Download Docker images, build, inicialiyation and run InfluDB and Grafany:\
`docker-compose up -d influxdb grafana`
- Go to Grafana [localhost:3000](http://localhost:3000) and import configuration of new dashboard `grafana_dashboard.json`: "+ (CREATE)/Import", select JSON file, select whispered database K6
- `docker-compose run k6 run /tests/02-stages/test.js` run the test with configuration from `test.js` and progress can be observed in Grafana
![Output](https://github.com/sevelajan/performance-testing-with-k6/blob/master/grafana_k6_outputs.png)

### Conversion HAR file to K6 javascript config file
- create folder `./tests/03-har-to-k6/` and copy HAR file `example.har` into
- in file `Dockerfile.k6` uncomment command to copy HAR file to building Docker container:\
`#COPY ./tests/03-har-to-k6/example.har  /home/k6/`
- it is necessary to rebuild the image and the container of K6 now (`docker rm NameOfContainer` a `docker image rmi IdOfImage`)
- run conversation HAR file `example.har` to config script for K6:
`docker-compose run k6 convert example.har > ./tests/03-har-to-k6/test-script.js` 
- now it is possible converted config file `test-script.js` customize and run this test from the previous Getting started point
