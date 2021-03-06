all:
	node --version
	yarn run eslint --ext .svelte,.js .
	yarn run sapper export
	
dev:
	yarn run sapper dev
	
upgrade:
	yarn upgrade-interactive --latest
	
serve: | all
	yarn run serve __sapper__/export
	
convert:
	ffmpeg -i original-images/$(video).mov -vcodec h264 -preset veryslow -tune animation original-images/$(video).mp4
	
postpublish:
	yarn run linkinator https://akimous.com
	