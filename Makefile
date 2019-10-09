install:
	install-deps
install-deps:
	npm install
start:
	npx babel-node src/bin/brain-games.js
start1:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run
edit:
	vim ./src/bin/brain-games.js
edit1:
	vim ./src/bin/brain-even.js
lint:
	npx eslint .
