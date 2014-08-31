
BIN := node_modules/.bin
REPORTER ?= spec
STYL = $(wildcard test/fixtures/*/*.styl)
CSS = $(STYL:.styl=.css)

test: node_modules $(CSS)
	@$(BIN)/gnode $(BIN)/_mocha \
	  --reporter $(REPORTER) \
	  --require co-mocha

node_modules: package.json
	@npm install
	@touch $@

%.css: %.styl
	@$(BIN)/stylus < $< > $@

clean:
	rm -rf test/fixtures/*/{components,*.css}

.PHONY: test
