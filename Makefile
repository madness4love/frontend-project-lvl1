install:
	install-deps
install-deps:
	npm ci
build:
	rm -rf dist
	npm run build
start:
	npx babel-node src/bin/games/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
