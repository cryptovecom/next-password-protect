import{__awaiter as o,__generator as e}from"../../node_modules/tslib/tslib.es6.js";import{sendJson as t}from"./sendJson.js";import{setCookie as r}from"./setCookie.js";var i=function(i){return function(n,s){return o(void 0,void 0,void 0,(function(){return e(this,(function(o){s.setHeader("Content-Type","application/json");try{if("POST"!==n.method)throw new Error("Invalid method.");r(s,(null==i?void 0:i.cookieName)||"next-password-protect","",{httpOnly:!0,sameSite:(null==i?void 0:i.cookieSameSite)||!1,secure:void 0!==(null==i?void 0:i.cookieSecure)?null==i?void 0:i.cookieSecure:"production"===process.env.NODE_ENV,path:"/",maxAge:0}),t(s,200)}catch(o){t(s,500,{message:o.message||"An error has occured."})}return[2]}))}))}};export{i as logoutHandler};
//# sourceMappingURL=logoutHandler.js.map
