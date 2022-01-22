install:
	docker compose run node npm install

start:
	docker compose run --service-ports node npm start 

test:
	docker compose run node npm test

check:
	docker compose run node npx eslint ./src/

build:
	docker compose run node npm run build
#docker compose run node npx create-react-app --template typescript ts-app
#docker compose run node npm install react-number-format --save
