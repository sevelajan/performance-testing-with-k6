import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
    stages: [
    // Ramp-up from 1 to 5 VUs in 10s
    { duration: "15s", target: 10 },

    // Stay at rest on 5 VUs for 5s
    { duration: "30s", target: 10 },

    // Ramp-down from 5 to 0 VUs for 5s
    { duration: "15s", target: 0 }
    ]
};

export default function() {

	group("page_1 - https://jan.sevela.cz/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "none",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.06);
		req = [{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/style.css?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C700%2C300italic%2C400italic%2C700italic%7CPT+Serif%3A400%2C700%2C400italic%2C700italic&subset=latin%2Clatin-ext",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/genericons/genericons/genericons.css",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/css/jetpack.css",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery.min.js",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery-migrate.min.js",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/menus.js?ver=20120206",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/skip-link-focus-fix.js?ver=20130115",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/build/widgets/eu-cookie-law/eu-cookie-law.min.js",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/intersectionobserver-polyfill.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/lazy-images.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/wp-embed.min.js",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.wp.com/e-202111.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/js/wp-emoji-release.min.js?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/ga.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://fonts.googleapis.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://fonts.googleapis.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://fonts.googleapis.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://fonts.googleapis.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://fonts.googleapis.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.64);
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/favicon.ico",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.55);
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/images/w-logo-blue-white-bg.png",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(5.68);
	});
	group("page_2 - https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.63);
		req = [{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/style.css?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C700%2C300italic%2C400italic%2C700italic%7CPT+Serif%3A400%2C700%2C400italic%2C700italic&subset=latin%2Clatin-ext",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/genericons/genericons/genericons.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/css/jetpack.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery-migrate.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/menus.js?ver=20120206",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/skip-link-focus-fix.js?ver=20130115",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/comment-reply.min.js",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/build/widgets/eu-cookie-law/eu-cookie-law.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/intersectionobserver-polyfill.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/lazy-images.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/wp-embed.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.wp.com/e-202111.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api.js?onload=anr_onloadCallback&render=explicit",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/js/wp-emoji-release.min.js?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/ga.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Origin": "https://jan.sevela.cz",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Origin": "https://jan.sevela.cz",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Origin": "https://jan.sevela.cz",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Origin": "https://jan.sevela.cz",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Origin": "https://jan.sevela.cz",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://fonts.googleapis.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.gstatic.com/recaptcha/releases/6g5J7UfDQ9mLrweZHj04ekSP/recaptcha__cs.js",
			"params": {
				"headers": {
					"origin": "https://jan.sevela.cz",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "script",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lfv-1UUAAAAAGMP3KY5aQKeln8pVUSDwuduJKK1&co=aHR0cHM6Ly9qYW4uc2V2ZWxhLmN6OjQ0Mw..&hl=cs&v=6g5J7UfDQ9mLrweZHj04ekSP&theme=light&size=normal&cb=xxoog3wilc1o",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-dest": "iframe",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.97);
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/favicon.ico",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api2/bframe?hl=cs&v=6g5J7UfDQ9mLrweZHj04ekSP&k=6Lfv-1UUAAAAAGMP3KY5aQKeln8pVUSDwuduJKK1&cb=30d7pxulr4ye",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-dest": "iframe",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/images/w-logo-blue-white-bg.png",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(2.36);
	});
	group("page_3 - https://jan.sevela.cz/category/firewall/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/category/firewall/",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"referer": "https://jan.sevela.cz/2018/11/07/iphone-informace-o-rodine-nedostupne-ios-icloud/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.71);
		req = [{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/style.css?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C700%2C300italic%2C400italic%2C700italic%7CPT+Serif%3A400%2C700%2C400italic%2C700italic&subset=latin%2Clatin-ext",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/genericons/genericons/genericons.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/css/jetpack.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery-migrate.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/menus.js?ver=20120206",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/skip-link-focus-fix.js?ver=20130115",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/build/widgets/eu-cookie-law/eu-cookie-law.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/intersectionobserver-polyfill.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/lazy-images.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/wp-embed.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.wp.com/e-202111.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/js/wp-emoji-release.min.js?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/ga.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/favicon.ico",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/category/firewall/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.52);
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/images/w-logo-blue-white-bg.png",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/firewall/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(5.55);
	});
	group("page_4 - https://jan.sevela.cz/category/mysql/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/category/mysql/",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"referer": "https://jan.sevela.cz/category/firewall/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.63);
		req = [{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/style.css?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C700%2C300italic%2C400italic%2C700italic%7CPT+Serif%3A400%2C700%2C400italic%2C700italic&subset=latin%2Clatin-ext",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/genericons/genericons/genericons.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/css/jetpack.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery-migrate.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/menus.js?ver=20120206",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/skip-link-focus-fix.js?ver=20130115",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/build/widgets/eu-cookie-law/eu-cookie-law.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/intersectionobserver-polyfill.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/lazy-images.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/wp-embed.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.wp.com/e-202111.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/js/wp-emoji-release.min.js?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/ga.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/favicon.ico",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/category/mysql/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/images/w-logo-blue-white-bg.png",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/category/mysql/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(2.02);
	});
	group("page_5 - https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"referer": "https://jan.sevela.cz/category/mysql/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.61);
		req = [{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/style.css?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C700%2C300italic%2C400italic%2C700italic%7CPT+Serif%3A400%2C700%2C400italic%2C700italic&subset=latin%2Clatin-ext",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/genericons/genericons/genericons.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/css/jetpack.css",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/jquery/jquery-migrate.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/menus.js?ver=20120206",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/themes/sorbet/js/skip-link-focus-fix.js?ver=20130115",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/comment-reply.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/p/jetpack/9.5/_inc/build/widgets/eu-cookie-law/eu-cookie-law.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/intersectionobserver-polyfill.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-content/plugins/jetpack/vendor/automattic/jetpack-lazy-images/src/js/lazy-images.min.js?ver=1.1.2",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://c0.wp.com/c/5.7/wp-includes/js/wp-embed.min.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.wp.com/e-202111.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api.js?onload=anr_onloadCallback&render=explicit",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/js/wp-emoji-release.min.js?ver=ecd3ecfab900bc75a9b94be56a747829",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/ga.js",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.gstatic.com/recaptcha/releases/6g5J7UfDQ9mLrweZHj04ekSP/recaptcha__cs.js",
			"params": {
				"headers": {
					"Origin": "https://jan.sevela.cz",
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-tdg.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
			"params": {
				"headers": {
					"Referer": ""
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lfv-1UUAAAAAGMP3KY5aQKeln8pVUSDwuduJKK1&co=aHR0cHM6Ly9qYW4uc2V2ZWxhLmN6OjQ0Mw..&hl=cs&v=6g5J7UfDQ9mLrweZHj04ekSP&theme=light&size=normal&cb=w1svq1tzkpua",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-dest": "iframe",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.96);
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/favicon.ico",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-gpc": "1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api2/bframe?hl=cs&v=6g5J7UfDQ9mLrweZHj04ekSP&k=6Lfv-1UUAAAAAGMP3KY5aQKeln8pVUSDwuduJKK1&cb=mubxjbvtiupg",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-gpc": "1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-dest": "iframe",
					"referer": "https://jan.sevela.cz/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "cs-CZ,cs;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.55);
		req = [{
			"method": "get",
			"url": "https://jan.sevela.cz/wp-includes/images/w-logo-blue-white-bg.png",
			"params": {
				"headers": {
					"Referer": "https://jan.sevela.cz/2017/01/05/zmena-hesla-uzivatele-wordpressu-na-mysql-pres-phpmyadmin/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
