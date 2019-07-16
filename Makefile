all:
	yarn run sapper export
	
dev:
	yarn run sapper dev
	
upgrade:
	yarn upgrade --interactive
	
serve:
	yarn run serve __sapper__/export