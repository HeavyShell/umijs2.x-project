export default {
	proxy: {
		"/api": {
			"target": "https://movie.douban.com/",
			"changeOrigin": true,
			"secure": false,
			"pathRewrite": { "^/api" : "" }
		},
		"/2api": {
			"target": "https://douban.fm/",
			"changeOrigin": true,
			"secure": false,
			"pathRewrite": { "^/2api" : "" }
		},
		"/mock": {
			"target": "",
			"changeOrigin": true,
			"secure": false,
			"pathRewrite": { "^/mock" : "" }
		}
	},
	plugins: [
		['umi-plugin-react', {
			dva: true,
			antd: true,  // antd 默认不开启，如有使用需自行配置
		}],
	],
};