brain-games:
	node bin/brain-games.js

install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run
