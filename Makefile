install:
	install-deps
install-deps:
	npm ci
start:
	npx babel-node src/bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
