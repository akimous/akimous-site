import * as sapper from '@sapper/app';
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

sapper.start({
	target: document.querySelector('#sapper')
});
