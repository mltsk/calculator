build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

lint:
	npx eslint .

stylelint:
	npx stylelint "**/*.scss"

stylelint-fix:
	npx stylelint "**/*.scss" --fix

develop:
	npx webpack serve

install:
	npm ci

lint-fix:
	npx eslint --fix .

.PHONY: test
