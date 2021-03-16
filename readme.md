# CZ
## Testování výkonu s K6

> Testování zatížení, ukázka k6

> Vychází z video tutoriálu a podkladů [Chrise Jamese](https://github.com/cajames/performance-testing-with-k6)

### Doporučený videotutoriál Chrise Jamese o testování s K6
[![Performance Testing with k6 Video](https://img.youtube.com/vi/Hu1K2ZGJ_K4/0.jpg)](https://www.youtube.com/watch?v=Hu1K2ZGJ_K4)

### Spouštění
- Stažení docker obrazů, sestavení, inicializace a spuštění InfluDB a Grafany:
`docker-compose up -d influxdb grafana`
- Načtení Grafany [localhost:3000](http://localhost:3000) a import konfigurace nové přístrojové desky `grafana_dashboard.json`: "+ (CREATE)/Import", vybrat JSON soubor, následně vybrat našeptávanou databázi K6
- `docker-compose run k6 run /tests/02-stages/test.js` spustí test s nastavením dle souboru `test.js` a průběh lze sledovat v Grafaně
![Output](https://github.com/sevelajan/performance-testing-with-k6/blob/master/grafana_k6_outputs.png)

### Konverze HAR souboru na K6 javascript konfigurační soubor
- vytvoření adresáře `./tests/03-har-to-k6/` a nakopírování HAR souboru `example.har` do něj
- odkomentování příkazu ke zkopírování HAR souboru do Docker kontejneru
\#COPY ./tests/03-har-to-k6/example.har  /home/k6/
- spuštění konverze HAR souboru `example.har` na konfigurační javascript soubor pro K6:
`docker-compose run k6 convert example.har > ./tests/03-har-to-k6/test-script.js` 
- nyní lze konvertovaný soubor upravit dle vlastního potřeb a spustit tento test dle předchozího bodu Spouštění

# EN (original author version)
> [cajames/performance-testing-with-k6](https://github.com/cajames/performance-testing-with-k6)
## Performance Testing with K6

> Load testing workshop, demonstrating k6

### Video

[![Performance Testing with k6 Video](https://img.youtube.com/vi/Hu1K2ZGJ_K4/0.jpg)](https://www.youtube.com/watch?v=Hu1K2ZGJ_K4)


## Getting started:
- `docker-compose up -d influxdb grafana`
- Load http://localhost:3000, and import the `grafana_dashboard.json` config to a new dashboard.
- `docker-compose run k6 run /tests/01-simple/test.js`

### To use cloud run

- Create an account with LoadImpact here to use the cloud run: [https://app.loadimpact.com/account/login](https://app.loadimpact.com/account/login)
- Replace `LI_TOKEN` in the `Dockerfile` with your account token.
- `docker-compose run k6 cloud /tests/01-simple/test.js` to run the test in the cloud

Look through the k6 docs here: https://support.loadimpact.com/4.0/
