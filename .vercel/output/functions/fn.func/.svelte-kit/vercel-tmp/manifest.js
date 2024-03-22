export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CHuL1WfL.js","app":"_app/immutable/entry/app.Dtww8VLs.js","imports":["_app/immutable/entry/start.CHuL1WfL.js","_app/immutable/chunks/entry.CrgU_Wvo.js","_app/immutable/chunks/scheduler.CM8gWTHg.js","_app/immutable/chunks/index.CIW4ENOb.js","_app/immutable/entry/app.Dtww8VLs.js","_app/immutable/chunks/scheduler.CM8gWTHg.js","_app/immutable/chunks/index.0sI8AnVS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contacto",
				pattern: /^\/contacto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/nosotros/historia",
				pattern: /^\/nosotros\/historia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/nosotros/mision-vision",
				pattern: /^\/nosotros\/mision-vision\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/nosotros/organigrama",
				pattern: /^\/nosotros\/organigrama\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/noticias",
				pattern: /^\/noticias\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/programas-sociales/comedor-social",
				pattern: /^\/programas-sociales\/comedor-social\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/servicios/cementerio",
				pattern: /^\/servicios\/cementerio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/aniversario.9iXku0hG.jpg":282344,"_app/immutable/assets/programa.6FhR7kc5.jpg":124451,"_app/immutable/assets/reunion.C4s0sDiC.jpg":162253}
	}
}
})();
