(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@nci-cbiit/i2ecws-lib', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['nci-cbiit'] = global['nci-cbiit'] || {}, global['nci-cbiit']['i2ecws-lib'] = {}), global.ng.core, global.ng.common.http));
}(this, (function (exports, core, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BASE_PATH = new core.InjectionToken('basePath');
    var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
    };

    var Configuration = /** @class */ (function () {
        function Configuration(configurationParameters) {
            if (configurationParameters === void 0) { configurationParameters = {}; }
            this.apiKeys = configurationParameters.apiKeys;
            this.username = configurationParameters.username;
            this.password = configurationParameters.password;
            this.accessToken = configurationParameters.accessToken;
            this.basePath = configurationParameters.basePath;
            this.withCredentials = configurationParameters.withCredentials;
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderContentType = function (contentTypes) {
            var _this = this;
            if (contentTypes.length == 0) {
                return undefined;
            }
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return contentTypes[0];
            }
            return type;
        };
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderAccept = function (accepts) {
            var _this = this;
            if (accepts.length == 0) {
                return undefined;
            }
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return accepts[0];
            }
            return type;
        };
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        Configuration.prototype.isJsonMime = function (mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        };
        return Configuration;
    }());

    var ActivitiesCodeControllerService = /** @class */ (function () {
        function ActivitiesCodeControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ActivitiesCodeControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ActivitiesCodeControllerService.prototype.getActivitiesCodesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/activities-code/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ActivitiesCodeControllerService;
    }());
    ActivitiesCodeControllerService.decorators = [
        { type: core.Injectable }
    ];
    ActivitiesCodeControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ApiQueueEntityService = /** @class */ (function () {
        function ApiQueueEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ApiQueueEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ApiQueueEntityService.prototype.apiQueueApiServicesUsingDELETE = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling apiQueueApiServicesUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/apiQueues/" + encodeURIComponent(String(id)) + "/apiServices", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ApiQueueEntityService.prototype.apiQueueApiServicesUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling apiQueueApiServicesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/apiQueues/" + encodeURIComponent(String(id)) + "/apiServices", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ApiQueueEntityService.prototype.apiQueueApiServicesUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling apiQueueApiServicesUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling apiQueueApiServicesUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/apiQueues/" + encodeURIComponent(String(id)) + "/apiServices", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ApiQueueEntityService.prototype.apiQueueApiServicesUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling apiQueueApiServicesUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling apiQueueApiServicesUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/apiQueues/" + encodeURIComponent(String(id)) + "/apiServices", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ApiQueueEntityService.prototype.apiQueueApiServicesUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling apiQueueApiServicesUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling apiQueueApiServicesUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/apiQueues/" + encodeURIComponent(String(id)) + "/apiServices", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ApiQueueEntityService;
    }());
    ApiQueueEntityService.decorators = [
        { type: core.Injectable }
    ];
    ApiQueueEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */
    var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
        __extends(CustomHttpUrlEncodingCodec, _super);
        function CustomHttpUrlEncodingCodec() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
            k = _super.prototype.encodeKey.call(this, k);
            return k.replace(/\+/gi, '%2B');
        };
        CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
            v = _super.prototype.encodeValue.call(this, v);
            return v.replace(/\+/gi, '%2B');
        };
        return CustomHttpUrlEncodingCodec;
    }(http.HttpUrlEncodingCodec));

    var AppNavigationTControllerService = /** @class */ (function () {
        function AppNavigationTControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        AppNavigationTControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        AppNavigationTControllerService.prototype.getNavLinksUsingGET = function (roles, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (roles === null || roles === undefined) {
                throw new Error('Required parameter roles was null or undefined when calling getNavLinksUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (roles) {
                roles.forEach(function (element) {
                    queryParameters = queryParameters.append('roles', element);
                });
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/nav-links/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return AppNavigationTControllerService;
    }());
    AppNavigationTControllerService.decorators = [
        { type: core.Injectable }
    ];
    AppNavigationTControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var AppNavigationTEntityService = /** @class */ (function () {
        function AppNavigationTEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        AppNavigationTEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        AppNavigationTEntityService.prototype.appNavigationTGwbLinksTUsingDELETE = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling appNavigationTGwbLinksTUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/appNavigationTs/" + encodeURIComponent(String(id)) + "/gwbLinksT", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AppNavigationTEntityService.prototype.appNavigationTGwbLinksTUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling appNavigationTGwbLinksTUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/appNavigationTs/" + encodeURIComponent(String(id)) + "/gwbLinksT", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AppNavigationTEntityService.prototype.appNavigationTGwbLinksTUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling appNavigationTGwbLinksTUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling appNavigationTGwbLinksTUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/appNavigationTs/" + encodeURIComponent(String(id)) + "/gwbLinksT", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AppNavigationTEntityService.prototype.appNavigationTGwbLinksTUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling appNavigationTGwbLinksTUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling appNavigationTGwbLinksTUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/appNavigationTs/" + encodeURIComponent(String(id)) + "/gwbLinksT", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AppNavigationTEntityService.prototype.appNavigationTGwbLinksTUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling appNavigationTGwbLinksTUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling appNavigationTGwbLinksTUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/appNavigationTs/" + encodeURIComponent(String(id)) + "/gwbLinksT", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return AppNavigationTEntityService;
    }());
    AppNavigationTEntityService.decorators = [
        { type: core.Injectable }
    ];
    AppNavigationTEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var AraControllerService = /** @class */ (function () {
        function AraControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        AraControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        AraControllerService.prototype.getUnmatchedArasUsingGET = function (ncab, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (ncab === null || ncab === undefined) {
                throw new Error('Required parameter ncab was null or undefined when calling getUnmatchedArasUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ara-match/" + encodeURIComponent(String(ncab)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return AraControllerService;
    }());
    AraControllerService.decorators = [
        { type: core.Injectable }
    ];
    AraControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var AraReasonsControllerService = /** @class */ (function () {
        function AraReasonsControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        AraReasonsControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        AraReasonsControllerService.prototype.activateOrDeactivateAraReasonUsingPATCH = function (id, paramsHolder, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling activateOrDeactivateAraReasonUsingPATCH.');
            }
            if (paramsHolder === null || paramsHolder === undefined) {
                throw new Error('Required parameter paramsHolder was null or undefined when calling activateOrDeactivateAraReasonUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/api/v1/ara-reasons/" + encodeURIComponent(String(id)), paramsHolder, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.getAraReasonsHistoryUsingGET = function (code, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (code === null || code === undefined) {
                throw new Error('Required parameter code was null or undefined when calling getAraReasonsHistoryUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ara-reasons-history/" + encodeURIComponent(String(code)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.getAraReasonsPrecedencesUsingGET = function (available, include, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (available !== undefined && available !== null) {
                queryParameters = queryParameters.set('available', available);
            }
            if (include !== undefined && include !== null) {
                queryParameters = queryParameters.set('include', include);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ara-reasons-precedences", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.getAraReasonsUsingGET = function (activeFlag, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activeFlag !== undefined && activeFlag !== null) {
                queryParameters = queryParameters.set('activeFlag', activeFlag);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ara-reasons", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.getAraReasonsUsingGET1 = function (code, activeFlag, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (code === null || code === undefined) {
                throw new Error('Required parameter code was null or undefined when calling getAraReasonsUsingGET1.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activeFlag !== undefined && activeFlag !== null) {
                queryParameters = queryParameters.set('activeFlag', activeFlag);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ara-reasons/" + encodeURIComponent(String(code)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.getEraAraReasonsUsingGET = function (activeFlag, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activeFlag !== undefined && activeFlag !== null) {
                queryParameters = queryParameters.set('activeFlag', activeFlag);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/era-ara-reasons", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.getEraAraReasonsUsingGET1 = function (code, activeFlag, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (code === null || code === undefined) {
                throw new Error('Required parameter code was null or undefined when calling getEraAraReasonsUsingGET1.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activeFlag !== undefined && activeFlag !== null) {
                queryParameters = queryParameters.set('activeFlag', activeFlag);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/era-ara-reasons/" + encodeURIComponent(String(code)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.saveAraReasonUsingPOST = function (araReasonsDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (araReasonsDto === null || araReasonsDto === undefined) {
                throw new Error('Required parameter araReasonsDto was null or undefined when calling saveAraReasonUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/ara-reasons", araReasonsDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        AraReasonsControllerService.prototype.updateAraReasonUsingPUT = function (araReasonsDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (araReasonsDto === null || araReasonsDto === undefined) {
                throw new Error('Required parameter araReasonsDto was null or undefined when calling updateAraReasonUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/api/v1/ara-reasons", araReasonsDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return AraReasonsControllerService;
    }());
    AraReasonsControllerService.decorators = [
        { type: core.Injectable }
    ];
    AraReasonsControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var BoardsControllerService = /** @class */ (function () {
        function BoardsControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        BoardsControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        BoardsControllerService.prototype.findBoardByDateUsingGET = function (month, year, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (month === null || month === undefined) {
                throw new Error('Required parameter month was null or undefined when calling findBoardByDateUsingGET.');
            }
            if (year === null || year === undefined) {
                throw new Error('Required parameter year was null or undefined when calling findBoardByDateUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/boards/" + encodeURIComponent(String(year)) + "/" + encodeURIComponent(String(month)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.getBoardsUsingGET = function (meetingDate, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (meetingDate !== undefined && meetingDate !== null) {
                queryParameters = queryParameters.set('meetingDate', meetingDate);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/boards", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.getBodDatesListUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ncabs", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.getCurrentWorkingBoardUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/boards/current-working-board", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.getDefaultNcabDateUsingGET = function (date, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (date !== undefined && date !== null) {
                queryParameters = queryParameters.set('date', date.toISOString());
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/boards/default-ncab-date", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.saveBoardUsingPOST = function (boardsDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (boardsDto === null || boardsDto === undefined) {
                throw new Error('Required parameter boardsDto was null or undefined when calling saveBoardUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/boards", boardsDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.updateBoardUsingPUT = function (boardsDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (boardsDto === null || boardsDto === undefined) {
                throw new Error('Required parameter boardsDto was null or undefined when calling updateBoardUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/api/v1/boards", boardsDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        BoardsControllerService.prototype.updateMeetingDateUsingPATCH = function (meetingDate, month, year, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (meetingDate === null || meetingDate === undefined) {
                throw new Error('Required parameter meetingDate was null or undefined when calling updateMeetingDateUsingPATCH.');
            }
            if (month === null || month === undefined) {
                throw new Error('Required parameter month was null or undefined when calling updateMeetingDateUsingPATCH.');
            }
            if (year === null || year === undefined) {
                throw new Error('Required parameter year was null or undefined when calling updateMeetingDateUsingPATCH.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (meetingDate !== undefined && meetingDate !== null) {
                queryParameters = queryParameters.set('meetingDate', meetingDate);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.patch(this.basePath + "/api/v1/boards/" + encodeURIComponent(String(year)) + "/" + encodeURIComponent(String(month)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return BoardsControllerService;
    }());
    BoardsControllerService.decorators = [
        { type: core.Injectable }
    ];
    BoardsControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var CancerActivityControllerService = /** @class */ (function () {
        function CancerActivityControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        CancerActivityControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        CancerActivityControllerService.prototype.deactivateCaUsingPATCH = function (caCode, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (caCode === null || caCode === undefined) {
                throw new Error('Required parameter caCode was null or undefined when calling deactivateCaUsingPATCH.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling deactivateCaUsingPATCH.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (caCode !== undefined && caCode !== null) {
                queryParameters = queryParameters.set('caCode', caCode);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.patch(this.basePath + "/api/v1/cas/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getActiveReferralCaAssignRulesUsingGET = function (active, ignore, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (active === null || active === undefined) {
                throw new Error('Required parameter active was null or undefined when calling getActiveReferralCaAssignRulesUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (ignore !== undefined && ignore !== null) {
                queryParameters = queryParameters.set('ignore', ignore);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-ca-assign-rules/" + encodeURIComponent(String(active)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getAllActiveCaListUsingGET = function (activeFlag, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activeFlag !== undefined && activeFlag !== null) {
                queryParameters = queryParameters.set('activeFlag', activeFlag);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCaAssignmentRulesHistoryUsingGET = function (caCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (caCode === null || caCode === undefined) {
                throw new Error('Required parameter caCode was null or undefined when calling getCaAssignmentRulesHistoryUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ca-assignment-rules-history/" + encodeURIComponent(String(caCode)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCaByPDActiveGrantPortfolioUsingGET = function (npeId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npeId === null || npeId === undefined) {
                throw new Error('Required parameter npeId was null or undefined when calling getCaByPDActiveGrantPortfolioUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/get-cas-by-pd-active-grant-portfolio/" + encodeURIComponent(String(npeId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCaListBasedOnMechCodeUsingGET = function (mechCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (mechCode === null || mechCode === undefined) {
                throw new Error('Required parameter mechCode was null or undefined when calling getCaListBasedOnMechCodeUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (mechCode !== undefined && mechCode !== null) {
                queryParameters = queryParameters.set('mechCode', mechCode);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas-mech-codes/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCaListBasedOnRfaUsingGET = function (rfaPa, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (rfaPa === null || rfaPa === undefined) {
                throw new Error('Required parameter rfaPa was null or undefined when calling getCaListBasedOnRfaUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (rfaPa !== undefined && rfaPa !== null) {
                queryParameters = queryParameters.set('rfaPa', rfaPa);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas-rfa/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCaXferPortfolioUsingGET = function (pdId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (pdId === null || pdId === undefined) {
                throw new Error('Required parameter pdId was null or undefined when calling getCaXferPortfolioUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas-xfer/" + encodeURIComponent(String(pdId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCancerActivityPocsUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas/pocs", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCasForPdUsingGET = function (pdId, monitorFlag, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (pdId === null || pdId === undefined) {
                throw new Error('Required parameter pdId was null or undefined when calling getCasForPdUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (monitorFlag !== undefined && monitorFlag !== null) {
                queryParameters = queryParameters.set('monitorFlag', monitorFlag);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas/" + encodeURIComponent(String(pdId)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getCasForPortfolioUsingGET = function (npeId, monitorFlag, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npeId === null || npeId === undefined) {
                throw new Error('Required parameter npeId was null or undefined when calling getCasForPortfolioUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (monitorFlag !== undefined && monitorFlag !== null) {
                queryParameters = queryParameters.set('monitorFlag', monitorFlag);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cas-portfolio/" + encodeURIComponent(String(npeId)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getNciOrgListUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/nci-org-list/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getPersonDetailsUsingGET = function (orgId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (orgId === null || orgId === undefined) {
                throw new Error('Required parameter orgId was null or undefined when calling getPersonDetailsUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/i2e-person-details/" + encodeURIComponent(String(orgId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getReferralActivityCodesListUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-activity-codes/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getRfaPaNoticeByNoticeNumberUsingGET = function (noticeNumber, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (noticeNumber === null || noticeNumber === undefined) {
                throw new Error('Required parameter noticeNumber was null or undefined when calling getRfaPaNoticeByNoticeNumberUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/rfa-pa-notices/" + encodeURIComponent(String(noticeNumber)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.getRfaPaNoticesListUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/rfa-pa-notices/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.saveCancerActivityUsingPUT = function (addNew, caCode, caDesc, caOfcDiv, caPoc, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (addNew === null || addNew === undefined) {
                throw new Error('Required parameter addNew was null or undefined when calling saveCancerActivityUsingPUT.');
            }
            if (caCode === null || caCode === undefined) {
                throw new Error('Required parameter caCode was null or undefined when calling saveCancerActivityUsingPUT.');
            }
            if (caDesc === null || caDesc === undefined) {
                throw new Error('Required parameter caDesc was null or undefined when calling saveCancerActivityUsingPUT.');
            }
            if (caOfcDiv === null || caOfcDiv === undefined) {
                throw new Error('Required parameter caOfcDiv was null or undefined when calling saveCancerActivityUsingPUT.');
            }
            if (caPoc === null || caPoc === undefined) {
                throw new Error('Required parameter caPoc was null or undefined when calling saveCancerActivityUsingPUT.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling saveCancerActivityUsingPUT.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (addNew !== undefined && addNew !== null) {
                queryParameters = queryParameters.set('addNew', addNew);
            }
            if (caCode !== undefined && caCode !== null) {
                queryParameters = queryParameters.set('caCode', caCode);
            }
            if (caDesc !== undefined && caDesc !== null) {
                queryParameters = queryParameters.set('caDesc', caDesc);
            }
            if (caOfcDiv !== undefined && caOfcDiv !== null) {
                queryParameters = queryParameters.set('caOfcDiv', caOfcDiv);
            }
            if (caPoc !== undefined && caPoc !== null) {
                queryParameters = queryParameters.set('caPoc', caPoc);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.put(this.basePath + "/api/v1/cas/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.saveMechCaAssignmentUsingPOST = function (mechCode, userId, assignedCas, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (mechCode === null || mechCode === undefined) {
                throw new Error('Required parameter mechCode was null or undefined when calling saveMechCaAssignmentUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling saveMechCaAssignmentUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (assignedCas) {
                assignedCas.forEach(function (element) {
                    queryParameters = queryParameters.append('assignedCas[]', element);
                });
            }
            if (mechCode !== undefined && mechCode !== null) {
                queryParameters = queryParameters.set('mechCode', mechCode);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/mech-ca-assignment/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityControllerService.prototype.saveRfaPaAssignmentUsingPOST = function (rfaPa, userId, assignedCas, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (rfaPa === null || rfaPa === undefined) {
                throw new Error('Required parameter rfaPa was null or undefined when calling saveRfaPaAssignmentUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling saveRfaPaAssignmentUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (assignedCas) {
                assignedCas.forEach(function (element) {
                    queryParameters = queryParameters.append('assignedCas[]', element);
                });
            }
            if (rfaPa !== undefined && rfaPa !== null) {
                queryParameters = queryParameters.set('rfaPa', rfaPa);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/rfa-pa-assignment/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return CancerActivityControllerService;
    }());
    CancerActivityControllerService.decorators = [
        { type: core.Injectable }
    ];
    CancerActivityControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var CancerActivityRolesControllerService = /** @class */ (function () {
        function CancerActivityRolesControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        CancerActivityRolesControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        CancerActivityRolesControllerService.prototype.gatAllCancerActivityRolesUsingGET = function (orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cancer-activity-roles/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CancerActivityRolesControllerService.prototype.getCancerActivityRolesByNpeIdUsingGET = function (npeId, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npeId === null || npeId === undefined) {
                throw new Error('Required parameter npeId was null or undefined when calling getCancerActivityRolesByNpeIdUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/cancer-activity-roles/" + encodeURIComponent(String(npeId)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return CancerActivityRolesControllerService;
    }());
    CancerActivityRolesControllerService.decorators = [
        { type: core.Injectable }
    ];
    CancerActivityRolesControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var CgRefCodControllerService = /** @class */ (function () {
        function CgRefCodControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        CgRefCodControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        CgRefCodControllerService.prototype.getRemoveCaInterestReasonsUsingGET = function (domain, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (domain === null || domain === undefined) {
                throw new Error('Required parameter domain was null or undefined when calling getRemoveCaInterestReasonsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-reasons/" + encodeURIComponent(String(domain)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return CgRefCodControllerService;
    }());
    CgRefCodControllerService.decorators = [
        { type: core.Injectable }
    ];
    CgRefCodControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var EmControllerService = /** @class */ (function () {
        function EmControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        EmControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        EmControllerService.prototype.helloUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/em/api/v1/hello-em/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return EmControllerService;
    }());
    EmControllerService.decorators = [
        { type: core.Injectable }
    ];
    EmControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ExportControllerService = /** @class */ (function () {
        function ExportControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ExportControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ExportControllerService.prototype.exportAraMatchReportUsingGET = function (ncab, requestParams, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (ncab === null || ncab === undefined) {
                throw new Error('Required parameter ncab was null or undefined when calling exportAraMatchReportUsingGET.');
            }
            if (requestParams === null || requestParams === undefined) {
                throw new Error('Required parameter requestParams was null or undefined when calling exportAraMatchReportUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (requestParams !== undefined && requestParams !== null) {
                queryParameters = queryParameters.set('requestParams', requestParams);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/ara-match/" + encodeURIComponent(String(ncab)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ExportControllerService.prototype.exportCancerActivitiesUsingGET = function (active, requestParams, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (active === null || active === undefined) {
                throw new Error('Required parameter active was null or undefined when calling exportCancerActivitiesUsingGET.');
            }
            if (requestParams === null || requestParams === undefined) {
                throw new Error('Required parameter requestParams was null or undefined when calling exportCancerActivitiesUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (requestParams !== undefined && requestParams !== null) {
                queryParameters = queryParameters.set('requestParams', requestParams);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/cas/" + encodeURIComponent(String(active)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ExportControllerService.prototype.exportCancerActivitiesUsingGET1 = function (active, requestParams, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (active === null || active === undefined) {
                throw new Error('Required parameter active was null or undefined when calling exportCancerActivitiesUsingGET1.');
            }
            if (requestParams === null || requestParams === undefined) {
                throw new Error('Required parameter requestParams was null or undefined when calling exportCancerActivitiesUsingGET1.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (requestParams !== undefined && requestParams !== null) {
                queryParameters = queryParameters.set('requestParams', requestParams);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/" + encodeURIComponent(String(active)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ExportControllerService.prototype.getCancerActivityPocsUsingGET1 = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/cas/pocs", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ExportControllerService.prototype.getTransferRolePocsUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/xfer/pocs", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ExportControllerService;
    }());
    ExportControllerService.decorators = [
        { type: core.Injectable }
    ];
    ExportControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var GwbLinksControllerService = /** @class */ (function () {
        function GwbLinksControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        GwbLinksControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        GwbLinksControllerService.prototype.getLinksUsingGET = function (names, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (names) {
                names.forEach(function (element) {
                    queryParameters = queryParameters.append('names', element);
                });
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/gwb-links", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return GwbLinksControllerService;
    }());
    GwbLinksControllerService.decorators = [
        { type: core.Injectable }
    ];
    GwbLinksControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var I2eUserActiveRolesControllerService = /** @class */ (function () {
        function I2eUserActiveRolesControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        I2eUserActiveRolesControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        I2eUserActiveRolesControllerService.prototype.getUsersByRoleCodeUsingGET = function (roleCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (roleCode === null || roleCode === undefined) {
                throw new Error('Required parameter roleCode was null or undefined when calling getUsersByRoleCodeUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/i2eusers-by-rolecode/" + encodeURIComponent(String(roleCode)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return I2eUserActiveRolesControllerService;
    }());
    I2eUserActiveRolesControllerService.decorators = [
        { type: core.Injectable }
    ];
    I2eUserActiveRolesControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var IcDataControllerService = /** @class */ (function () {
        function IcDataControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        IcDataControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        IcDataControllerService.prototype.appdFundinggsAssignUsingPOST = function (applId, directcostAmt, indirectcostAmt, phsOrgCode, totalPeriodAmt, transType, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling appdFundinggsAssignUsingPOST.');
            }
            if (directcostAmt === null || directcostAmt === undefined) {
                throw new Error('Required parameter directcostAmt was null or undefined when calling appdFundinggsAssignUsingPOST.');
            }
            if (indirectcostAmt === null || indirectcostAmt === undefined) {
                throw new Error('Required parameter indirectcostAmt was null or undefined when calling appdFundinggsAssignUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling appdFundinggsAssignUsingPOST.');
            }
            if (totalPeriodAmt === null || totalPeriodAmt === undefined) {
                throw new Error('Required parameter totalPeriodAmt was null or undefined when calling appdFundinggsAssignUsingPOST.');
            }
            if (transType === null || transType === undefined) {
                throw new Error('Required parameter transType was null or undefined when calling appdFundinggsAssignUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (directcostAmt !== undefined && directcostAmt !== null) {
                queryParameters = queryParameters.set('directcostAmt', directcostAmt);
            }
            if (indirectcostAmt !== undefined && indirectcostAmt !== null) {
                queryParameters = queryParameters.set('indirectcostAmt', indirectcostAmt);
            }
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            if (totalPeriodAmt !== undefined && totalPeriodAmt !== null) {
                queryParameters = queryParameters.set('totalPeriodAmt', totalPeriodAmt);
            }
            if (transType !== undefined && transType !== null) {
                queryParameters = queryParameters.set('transType', transType);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/appd-fundings/assign/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        IcDataControllerService.prototype.awdFundingsAssignUsingPOST = function (applId, phsOrgCode, transType, newCan, newPcc, oldCan, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling awdFundingsAssignUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling awdFundingsAssignUsingPOST.');
            }
            if (transType === null || transType === undefined) {
                throw new Error('Required parameter transType was null or undefined when calling awdFundingsAssignUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (newCan !== undefined && newCan !== null) {
                queryParameters = queryParameters.set('newCan', newCan);
            }
            if (newPcc !== undefined && newPcc !== null) {
                queryParameters = queryParameters.set('newPcc', newPcc);
            }
            if (oldCan !== undefined && oldCan !== null) {
                queryParameters = queryParameters.set('oldCan', oldCan);
            }
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            if (transType !== undefined && transType !== null) {
                queryParameters = queryParameters.set('transType', transType);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/awd-fundings/assign/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        IcDataControllerService.prototype.fedPersonInvolvementAssignUsingPOST = function (applId, personId, phsOrgCode, roleTypeCode, transactionType, versionCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling fedPersonInvolvementAssignUsingPOST.');
            }
            if (personId === null || personId === undefined) {
                throw new Error('Required parameter personId was null or undefined when calling fedPersonInvolvementAssignUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling fedPersonInvolvementAssignUsingPOST.');
            }
            if (roleTypeCode === null || roleTypeCode === undefined) {
                throw new Error('Required parameter roleTypeCode was null or undefined when calling fedPersonInvolvementAssignUsingPOST.');
            }
            if (transactionType === null || transactionType === undefined) {
                throw new Error('Required parameter transactionType was null or undefined when calling fedPersonInvolvementAssignUsingPOST.');
            }
            if (versionCode === null || versionCode === undefined) {
                throw new Error('Required parameter versionCode was null or undefined when calling fedPersonInvolvementAssignUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (personId !== undefined && personId !== null) {
                queryParameters = queryParameters.set('personId', personId);
            }
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            if (roleTypeCode !== undefined && roleTypeCode !== null) {
                queryParameters = queryParameters.set('roleTypeCode', roleTypeCode);
            }
            if (transactionType !== undefined && transactionType !== null) {
                queryParameters = queryParameters.set('transactionType', transactionType);
            }
            if (versionCode !== undefined && versionCode !== null) {
                queryParameters = queryParameters.set('versionCode', versionCode);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/fed-person-involvement/assign/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        IcDataControllerService.prototype.icPccAssignMergeUsingPOST = function (applId, phsOrgCode, transactionType, newPccCode, oldPccCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling icPccAssignMergeUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling icPccAssignMergeUsingPOST.');
            }
            if (transactionType === null || transactionType === undefined) {
                throw new Error('Required parameter transactionType was null or undefined when calling icPccAssignMergeUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (newPccCode !== undefined && newPccCode !== null) {
                queryParameters = queryParameters.set('newPccCode', newPccCode);
            }
            if (oldPccCode !== undefined && oldPccCode !== null) {
                queryParameters = queryParameters.set('oldPccCode', oldPccCode);
            }
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            if (transactionType !== undefined && transactionType !== null) {
                queryParameters = queryParameters.set('transactionType', transactionType);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/ic-pcc/assign-merge/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        IcDataControllerService.prototype.icPccAssignUsingPOST = function (applId, phsOrgCode, transactionType, newPccCode, oldPccCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling icPccAssignUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling icPccAssignUsingPOST.');
            }
            if (transactionType === null || transactionType === undefined) {
                throw new Error('Required parameter transactionType was null or undefined when calling icPccAssignUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (newPccCode !== undefined && newPccCode !== null) {
                queryParameters = queryParameters.set('newPccCode', newPccCode);
            }
            if (oldPccCode !== undefined && oldPccCode !== null) {
                queryParameters = queryParameters.set('oldPccCode', oldPccCode);
            }
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            if (transactionType !== undefined && transactionType !== null) {
                queryParameters = queryParameters.set('transactionType', transactionType);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/ic-pcc/assign/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        IcDataControllerService.prototype.mainPccAssignUsingPOST = function (applId, overWriteFlag, phsOrgCode, progClassCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling mainPccAssignUsingPOST.');
            }
            if (overWriteFlag === null || overWriteFlag === undefined) {
                throw new Error('Required parameter overWriteFlag was null or undefined when calling mainPccAssignUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling mainPccAssignUsingPOST.');
            }
            if (progClassCode === null || progClassCode === undefined) {
                throw new Error('Required parameter progClassCode was null or undefined when calling mainPccAssignUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (overWriteFlag !== undefined && overWriteFlag !== null) {
                queryParameters = queryParameters.set('overWriteFlag', overWriteFlag);
            }
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            if (progClassCode !== undefined && progClassCode !== null) {
                queryParameters = queryParameters.set('progClassCode', progClassCode);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/main-pcc/assign/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        IcDataControllerService.prototype.pccDetailsUsingPOST = function (applId, phsOrgCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling pccDetailsUsingPOST.');
            }
            if (phsOrgCode === null || phsOrgCode === undefined) {
                throw new Error('Required parameter phsOrgCode was null or undefined when calling pccDetailsUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (phsOrgCode !== undefined && phsOrgCode !== null) {
                queryParameters = queryParameters.set('phsOrgCode', phsOrgCode);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/pcc-details/" + encodeURIComponent(String(applId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return IcDataControllerService;
    }());
    IcDataControllerService.decorators = [
        { type: core.Injectable }
    ];
    IcDataControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var JasperReportControllerService = /** @class */ (function () {
        function JasperReportControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        JasperReportControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        JasperReportControllerService.prototype.generateJasperReportUsingGET = function (EXPORT_FMT, id, name, promptexPReportId, promptexPSessionId, type, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (EXPORT_FMT !== undefined && EXPORT_FMT !== null) {
                queryParameters = queryParameters.set('EXPORT_FMT', EXPORT_FMT);
            }
            if (id !== undefined && id !== null) {
                queryParameters = queryParameters.set('id', id);
            }
            if (name !== undefined && name !== null) {
                queryParameters = queryParameters.set('name', name);
            }
            if (promptexPReportId !== undefined && promptexPReportId !== null) {
                queryParameters = queryParameters.set('promptex-pReportId', promptexPReportId);
            }
            if (promptexPSessionId !== undefined && promptexPSessionId !== null) {
                queryParameters = queryParameters.set('promptex-pSessionId', promptexPSessionId);
            }
            if (type !== undefined && type !== null) {
                queryParameters = queryParameters.set('type', type);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/pdf',
                'application/vnd.ms-excel'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/generate-jasper-report", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        JasperReportControllerService.prototype.generateJasperReportUsingPOST = function (report, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (report === null || report === undefined) {
                throw new Error('Required parameter report was null or undefined when calling generateJasperReportUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/generate-jasper-report", report, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        JasperReportControllerService.prototype.generatePaylistReportUsingGET = function (paylistId, reportName, type, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylistId === null || paylistId === undefined) {
                throw new Error('Required parameter paylistId was null or undefined when calling generatePaylistReportUsingGET.');
            }
            if (reportName === null || reportName === undefined) {
                throw new Error('Required parameter reportName was null or undefined when calling generatePaylistReportUsingGET.');
            }
            if (type === null || type === undefined) {
                throw new Error('Required parameter type was null or undefined when calling generatePaylistReportUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/pdf',
                'application/vnd.ms-excel'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/generate-paylist-report/" + encodeURIComponent(String(paylistId)) + "/" + encodeURIComponent(String(reportName)) + "/" + encodeURIComponent(String(type)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return JasperReportControllerService;
    }());
    JasperReportControllerService.decorators = [
        { type: core.Injectable }
    ];
    JasperReportControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var LookupsControllerService = /** @class */ (function () {
        function LookupsControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        LookupsControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        LookupsControllerService.prototype.getDocAndCayCodesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/lookups/cayCode-doc", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        LookupsControllerService.prototype.getNciDocsUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/lookups/nci-doc", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        LookupsControllerService.prototype.getPiInstitutesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/lookups/pi-institutes", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        LookupsControllerService.prototype.searchOrganizationsUsingGET = function (term, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (term === null || term === undefined) {
                throw new Error('Required parameter term was null or undefined when calling searchOrganizationsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (term !== undefined && term !== null) {
                queryParameters = queryParameters.set('term', term);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/lookups/search-pi-institutes", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        LookupsControllerService.prototype.searchOrganizationsUsingPOST = function (term, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (term === null || term === undefined) {
                throw new Error('Required parameter term was null or undefined when calling searchOrganizationsUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (term !== undefined && term !== null) {
                queryParameters = queryParameters.set('term', term);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/lookups/search-pi-institutes", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return LookupsControllerService;
    }());
    LookupsControllerService.decorators = [
        { type: core.Injectable }
    ];
    LookupsControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var NciReferralGrantsControllerService = /** @class */ (function () {
        function NciReferralGrantsControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        NciReferralGrantsControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        NciReferralGrantsControllerService.prototype.exportGrantSearchResultsUsingGET = function (remainingParams, accessionNum, activeSegments, applIds, applStatusGroupCode, araMatchStatus, cancerActivities, composedGrantNumber, dualCas, formerGrantNumber, fyFrom, fyTo, grantIc, grantMech, grantSerial, grantSuffix, grantsWitCa, grantType, grantYear, groupCode, includeDeleted, includeOrphans, institution, irgCode, irgFlexCode, myCancerActivities, ncabFrom, ncabTo, notifyFlag, npnId, orderBy, pdAssignmentSearch, pdId, piName, referralOfficer, referralStatus, rfaPaNumber, role, roNpnId, selectFrom, sraDesignatorCode, sraFlexCode, wBSearch, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (remainingParams === null || remainingParams === undefined) {
                throw new Error('Required parameter remainingParams was null or undefined when calling exportGrantSearchResultsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (accessionNum !== undefined && accessionNum !== null) {
                queryParameters = queryParameters.set('accessionNum', accessionNum);
            }
            if (activeSegments !== undefined && activeSegments !== null) {
                queryParameters = queryParameters.set('activeSegments', activeSegments);
            }
            if (applIds) {
                applIds.forEach(function (element) {
                    queryParameters = queryParameters.append('applIds', element);
                });
            }
            if (applStatusGroupCode) {
                applStatusGroupCode.forEach(function (element) {
                    queryParameters = queryParameters.append('applStatusGroupCode', element);
                });
            }
            if (araMatchStatus) {
                araMatchStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('araMatchStatus', element);
                });
            }
            if (cancerActivities) {
                cancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('cancerActivities', element);
                });
            }
            if (composedGrantNumber !== undefined && composedGrantNumber !== null) {
                queryParameters = queryParameters.set('composedGrantNumber', composedGrantNumber);
            }
            if (dualCas !== undefined && dualCas !== null) {
                queryParameters = queryParameters.set('dualCas', dualCas);
            }
            if (formerGrantNumber !== undefined && formerGrantNumber !== null) {
                queryParameters = queryParameters.set('formerGrantNumber', formerGrantNumber);
            }
            if (fyFrom !== undefined && fyFrom !== null) {
                queryParameters = queryParameters.set('fyFrom', fyFrom);
            }
            if (fyTo !== undefined && fyTo !== null) {
                queryParameters = queryParameters.set('fyTo', fyTo);
            }
            if (grantIc !== undefined && grantIc !== null) {
                queryParameters = queryParameters.set('grantIc', grantIc);
            }
            if (grantMech !== undefined && grantMech !== null) {
                queryParameters = queryParameters.set('grantMech', grantMech);
            }
            if (grantSerial !== undefined && grantSerial !== null) {
                queryParameters = queryParameters.set('grantSerial', grantSerial);
            }
            if (grantSuffix !== undefined && grantSuffix !== null) {
                queryParameters = queryParameters.set('grantSuffix', grantSuffix);
            }
            if (grantsWitCa !== undefined && grantsWitCa !== null) {
                queryParameters = queryParameters.set('grantsWitCa', grantsWitCa);
            }
            if (grantType !== undefined && grantType !== null) {
                queryParameters = queryParameters.set('grantType', grantType);
            }
            if (grantYear !== undefined && grantYear !== null) {
                queryParameters = queryParameters.set('grantYear', grantYear);
            }
            if (groupCode !== undefined && groupCode !== null) {
                queryParameters = queryParameters.set('groupCode', groupCode);
            }
            if (includeDeleted !== undefined && includeDeleted !== null) {
                queryParameters = queryParameters.set('includeDeleted', includeDeleted);
            }
            if (includeOrphans !== undefined && includeOrphans !== null) {
                queryParameters = queryParameters.set('includeOrphans', includeOrphans);
            }
            if (institution !== undefined && institution !== null) {
                queryParameters = queryParameters.set('institution', institution);
            }
            if (irgCode !== undefined && irgCode !== null) {
                queryParameters = queryParameters.set('irgCode', irgCode);
            }
            if (irgFlexCode !== undefined && irgFlexCode !== null) {
                queryParameters = queryParameters.set('irgFlexCode', irgFlexCode);
            }
            if (myCancerActivities) {
                myCancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('myCancerActivities', element);
                });
            }
            if (ncabFrom !== undefined && ncabFrom !== null) {
                queryParameters = queryParameters.set('ncabFrom', ncabFrom);
            }
            if (ncabTo !== undefined && ncabTo !== null) {
                queryParameters = queryParameters.set('ncabTo', ncabTo);
            }
            if (notifyFlag !== undefined && notifyFlag !== null) {
                queryParameters = queryParameters.set('notifyFlag', notifyFlag);
            }
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pdAssignmentSearch !== undefined && pdAssignmentSearch !== null) {
                queryParameters = queryParameters.set('pdAssignmentSearch', pdAssignmentSearch);
            }
            if (pdId !== undefined && pdId !== null) {
                queryParameters = queryParameters.set('pdId', pdId);
            }
            if (piName !== undefined && piName !== null) {
                queryParameters = queryParameters.set('piName', piName);
            }
            if (referralOfficer !== undefined && referralOfficer !== null) {
                queryParameters = queryParameters.set('referralOfficer', referralOfficer);
            }
            if (referralStatus) {
                referralStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('referralStatus', element);
                });
            }
            if (remainingParams !== undefined && remainingParams !== null) {
                queryParameters = queryParameters.set('remainingParams', remainingParams);
            }
            if (rfaPaNumber) {
                rfaPaNumber.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaPaNumber', element);
                });
            }
            if (role !== undefined && role !== null) {
                queryParameters = queryParameters.set('role', role);
            }
            if (roNpnId !== undefined && roNpnId !== null) {
                queryParameters = queryParameters.set('roNpnId', roNpnId);
            }
            if (selectFrom !== undefined && selectFrom !== null) {
                queryParameters = queryParameters.set('selectFrom', selectFrom);
            }
            if (sraDesignatorCode !== undefined && sraDesignatorCode !== null) {
                queryParameters = queryParameters.set('sraDesignatorCode', sraDesignatorCode);
            }
            if (sraFlexCode !== undefined && sraFlexCode !== null) {
                queryParameters = queryParameters.set('sraFlexCode', sraFlexCode);
            }
            if (wBSearch !== undefined && wBSearch !== null) {
                queryParameters = queryParameters.set('WBSearch', wBSearch);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'text/plain'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/transfer-grants", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.exportSearchResultsUsingGET = function (remainingParams, accessionNum, activeSegments, applIds, applStatusGroupCode, araMatchStatus, cancerActivities, composedGrantNumber, dualCas, formerGrantNumber, fyFrom, fyTo, grantIc, grantMech, grantSerial, grantSuffix, grantsWitCa, grantType, grantYear, groupCode, includeDeleted, includeOrphans, institution, irgCode, irgFlexCode, myCancerActivities, ncabFrom, ncabTo, notifyFlag, npnId, orderBy, pdAssignmentSearch, pdId, piName, referralOfficer, referralStatus, rfaPaNumber, role, roNpnId, selectFrom, sraDesignatorCode, sraFlexCode, wBSearch, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (remainingParams === null || remainingParams === undefined) {
                throw new Error('Required parameter remainingParams was null or undefined when calling exportSearchResultsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (accessionNum !== undefined && accessionNum !== null) {
                queryParameters = queryParameters.set('accessionNum', accessionNum);
            }
            if (activeSegments !== undefined && activeSegments !== null) {
                queryParameters = queryParameters.set('activeSegments', activeSegments);
            }
            if (applIds) {
                applIds.forEach(function (element) {
                    queryParameters = queryParameters.append('applIds', element);
                });
            }
            if (applStatusGroupCode) {
                applStatusGroupCode.forEach(function (element) {
                    queryParameters = queryParameters.append('applStatusGroupCode', element);
                });
            }
            if (araMatchStatus) {
                araMatchStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('araMatchStatus', element);
                });
            }
            if (cancerActivities) {
                cancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('cancerActivities', element);
                });
            }
            if (composedGrantNumber !== undefined && composedGrantNumber !== null) {
                queryParameters = queryParameters.set('composedGrantNumber', composedGrantNumber);
            }
            if (dualCas !== undefined && dualCas !== null) {
                queryParameters = queryParameters.set('dualCas', dualCas);
            }
            if (formerGrantNumber !== undefined && formerGrantNumber !== null) {
                queryParameters = queryParameters.set('formerGrantNumber', formerGrantNumber);
            }
            if (fyFrom !== undefined && fyFrom !== null) {
                queryParameters = queryParameters.set('fyFrom', fyFrom);
            }
            if (fyTo !== undefined && fyTo !== null) {
                queryParameters = queryParameters.set('fyTo', fyTo);
            }
            if (grantIc !== undefined && grantIc !== null) {
                queryParameters = queryParameters.set('grantIc', grantIc);
            }
            if (grantMech !== undefined && grantMech !== null) {
                queryParameters = queryParameters.set('grantMech', grantMech);
            }
            if (grantSerial !== undefined && grantSerial !== null) {
                queryParameters = queryParameters.set('grantSerial', grantSerial);
            }
            if (grantSuffix !== undefined && grantSuffix !== null) {
                queryParameters = queryParameters.set('grantSuffix', grantSuffix);
            }
            if (grantsWitCa !== undefined && grantsWitCa !== null) {
                queryParameters = queryParameters.set('grantsWitCa', grantsWitCa);
            }
            if (grantType !== undefined && grantType !== null) {
                queryParameters = queryParameters.set('grantType', grantType);
            }
            if (grantYear !== undefined && grantYear !== null) {
                queryParameters = queryParameters.set('grantYear', grantYear);
            }
            if (groupCode !== undefined && groupCode !== null) {
                queryParameters = queryParameters.set('groupCode', groupCode);
            }
            if (includeDeleted !== undefined && includeDeleted !== null) {
                queryParameters = queryParameters.set('includeDeleted', includeDeleted);
            }
            if (includeOrphans !== undefined && includeOrphans !== null) {
                queryParameters = queryParameters.set('includeOrphans', includeOrphans);
            }
            if (institution !== undefined && institution !== null) {
                queryParameters = queryParameters.set('institution', institution);
            }
            if (irgCode !== undefined && irgCode !== null) {
                queryParameters = queryParameters.set('irgCode', irgCode);
            }
            if (irgFlexCode !== undefined && irgFlexCode !== null) {
                queryParameters = queryParameters.set('irgFlexCode', irgFlexCode);
            }
            if (myCancerActivities) {
                myCancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('myCancerActivities', element);
                });
            }
            if (ncabFrom !== undefined && ncabFrom !== null) {
                queryParameters = queryParameters.set('ncabFrom', ncabFrom);
            }
            if (ncabTo !== undefined && ncabTo !== null) {
                queryParameters = queryParameters.set('ncabTo', ncabTo);
            }
            if (notifyFlag !== undefined && notifyFlag !== null) {
                queryParameters = queryParameters.set('notifyFlag', notifyFlag);
            }
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pdAssignmentSearch !== undefined && pdAssignmentSearch !== null) {
                queryParameters = queryParameters.set('pdAssignmentSearch', pdAssignmentSearch);
            }
            if (pdId !== undefined && pdId !== null) {
                queryParameters = queryParameters.set('pdId', pdId);
            }
            if (piName !== undefined && piName !== null) {
                queryParameters = queryParameters.set('piName', piName);
            }
            if (referralOfficer !== undefined && referralOfficer !== null) {
                queryParameters = queryParameters.set('referralOfficer', referralOfficer);
            }
            if (referralStatus) {
                referralStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('referralStatus', element);
                });
            }
            if (remainingParams !== undefined && remainingParams !== null) {
                queryParameters = queryParameters.set('remainingParams', remainingParams);
            }
            if (rfaPaNumber) {
                rfaPaNumber.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaPaNumber', element);
                });
            }
            if (role !== undefined && role !== null) {
                queryParameters = queryParameters.set('role', role);
            }
            if (roNpnId !== undefined && roNpnId !== null) {
                queryParameters = queryParameters.set('roNpnId', roNpnId);
            }
            if (selectFrom !== undefined && selectFrom !== null) {
                queryParameters = queryParameters.set('selectFrom', selectFrom);
            }
            if (sraDesignatorCode !== undefined && sraDesignatorCode !== null) {
                queryParameters = queryParameters.set('sraDesignatorCode', sraDesignatorCode);
            }
            if (sraFlexCode !== undefined && sraFlexCode !== null) {
                queryParameters = queryParameters.set('sraFlexCode', sraFlexCode);
            }
            if (wBSearch !== undefined && wBSearch !== null) {
                queryParameters = queryParameters.set('WBSearch', wBSearch);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'text/plain'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/export/referral-grants", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.exportSearchResultsUsingPOST = function (remainingParams, accessionNum, activeSegments, applIds, applStatusGroupCode, araMatchStatus, cancerActivities, composedGrantNumber, dualCas, formerGrantNumber, fyFrom, fyTo, grantIc, grantMech, grantSerial, grantSuffix, grantsWitCa, grantType, grantYear, groupCode, includeDeleted, includeOrphans, institution, irgCode, irgFlexCode, myCancerActivities, ncabFrom, ncabTo, notifyFlag, npnId, orderBy, pdAssignmentSearch, pdId, piName, referralOfficer, referralStatus, rfaPaNumber, role, roNpnId, selectFrom, sraDesignatorCode, sraFlexCode, wBSearch, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (remainingParams === null || remainingParams === undefined) {
                throw new Error('Required parameter remainingParams was null or undefined when calling exportSearchResultsUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (accessionNum !== undefined && accessionNum !== null) {
                queryParameters = queryParameters.set('accessionNum', accessionNum);
            }
            if (activeSegments !== undefined && activeSegments !== null) {
                queryParameters = queryParameters.set('activeSegments', activeSegments);
            }
            if (applIds) {
                applIds.forEach(function (element) {
                    queryParameters = queryParameters.append('applIds', element);
                });
            }
            if (applStatusGroupCode) {
                applStatusGroupCode.forEach(function (element) {
                    queryParameters = queryParameters.append('applStatusGroupCode', element);
                });
            }
            if (araMatchStatus) {
                araMatchStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('araMatchStatus', element);
                });
            }
            if (cancerActivities) {
                cancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('cancerActivities', element);
                });
            }
            if (composedGrantNumber !== undefined && composedGrantNumber !== null) {
                queryParameters = queryParameters.set('composedGrantNumber', composedGrantNumber);
            }
            if (dualCas !== undefined && dualCas !== null) {
                queryParameters = queryParameters.set('dualCas', dualCas);
            }
            if (formerGrantNumber !== undefined && formerGrantNumber !== null) {
                queryParameters = queryParameters.set('formerGrantNumber', formerGrantNumber);
            }
            if (fyFrom !== undefined && fyFrom !== null) {
                queryParameters = queryParameters.set('fyFrom', fyFrom);
            }
            if (fyTo !== undefined && fyTo !== null) {
                queryParameters = queryParameters.set('fyTo', fyTo);
            }
            if (grantIc !== undefined && grantIc !== null) {
                queryParameters = queryParameters.set('grantIc', grantIc);
            }
            if (grantMech !== undefined && grantMech !== null) {
                queryParameters = queryParameters.set('grantMech', grantMech);
            }
            if (grantSerial !== undefined && grantSerial !== null) {
                queryParameters = queryParameters.set('grantSerial', grantSerial);
            }
            if (grantSuffix !== undefined && grantSuffix !== null) {
                queryParameters = queryParameters.set('grantSuffix', grantSuffix);
            }
            if (grantsWitCa !== undefined && grantsWitCa !== null) {
                queryParameters = queryParameters.set('grantsWitCa', grantsWitCa);
            }
            if (grantType !== undefined && grantType !== null) {
                queryParameters = queryParameters.set('grantType', grantType);
            }
            if (grantYear !== undefined && grantYear !== null) {
                queryParameters = queryParameters.set('grantYear', grantYear);
            }
            if (groupCode !== undefined && groupCode !== null) {
                queryParameters = queryParameters.set('groupCode', groupCode);
            }
            if (includeDeleted !== undefined && includeDeleted !== null) {
                queryParameters = queryParameters.set('includeDeleted', includeDeleted);
            }
            if (includeOrphans !== undefined && includeOrphans !== null) {
                queryParameters = queryParameters.set('includeOrphans', includeOrphans);
            }
            if (institution !== undefined && institution !== null) {
                queryParameters = queryParameters.set('institution', institution);
            }
            if (irgCode !== undefined && irgCode !== null) {
                queryParameters = queryParameters.set('irgCode', irgCode);
            }
            if (irgFlexCode !== undefined && irgFlexCode !== null) {
                queryParameters = queryParameters.set('irgFlexCode', irgFlexCode);
            }
            if (myCancerActivities) {
                myCancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('myCancerActivities', element);
                });
            }
            if (ncabFrom !== undefined && ncabFrom !== null) {
                queryParameters = queryParameters.set('ncabFrom', ncabFrom);
            }
            if (ncabTo !== undefined && ncabTo !== null) {
                queryParameters = queryParameters.set('ncabTo', ncabTo);
            }
            if (notifyFlag !== undefined && notifyFlag !== null) {
                queryParameters = queryParameters.set('notifyFlag', notifyFlag);
            }
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pdAssignmentSearch !== undefined && pdAssignmentSearch !== null) {
                queryParameters = queryParameters.set('pdAssignmentSearch', pdAssignmentSearch);
            }
            if (pdId !== undefined && pdId !== null) {
                queryParameters = queryParameters.set('pdId', pdId);
            }
            if (piName !== undefined && piName !== null) {
                queryParameters = queryParameters.set('piName', piName);
            }
            if (referralOfficer !== undefined && referralOfficer !== null) {
                queryParameters = queryParameters.set('referralOfficer', referralOfficer);
            }
            if (referralStatus) {
                referralStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('referralStatus', element);
                });
            }
            if (remainingParams !== undefined && remainingParams !== null) {
                queryParameters = queryParameters.set('remainingParams', remainingParams);
            }
            if (rfaPaNumber) {
                rfaPaNumber.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaPaNumber', element);
                });
            }
            if (role !== undefined && role !== null) {
                queryParameters = queryParameters.set('role', role);
            }
            if (roNpnId !== undefined && roNpnId !== null) {
                queryParameters = queryParameters.set('roNpnId', roNpnId);
            }
            if (selectFrom !== undefined && selectFrom !== null) {
                queryParameters = queryParameters.set('selectFrom', selectFrom);
            }
            if (sraDesignatorCode !== undefined && sraDesignatorCode !== null) {
                queryParameters = queryParameters.set('sraDesignatorCode', sraDesignatorCode);
            }
            if (sraFlexCode !== undefined && sraFlexCode !== null) {
                queryParameters = queryParameters.set('sraFlexCode', sraFlexCode);
            }
            if (wBSearch !== undefined && wBSearch !== null) {
                queryParameters = queryParameters.set('WBSearch', wBSearch);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'text/plain'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/export/referral-grants", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.findWithdrawnGrantsUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-grants/withdrawn", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.getSuggestedCayCodesUsingGET = function (applId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getSuggestedCayCodesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-grants/suggested-cay-codes/" + encodeURIComponent(String(applId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.searchGrantsForPDAssignmentUsingGET = function (remainingParams, accessionNum, activeSegments, applId, applIds, applStatusGroupCode, araMatchStatus, cancerActivities, composedGrantNumber, dualCas, formerGrantNumber, fyFrom, fyTo, grantIc, grantMech, grantSerial, grantSuffix, grantsWitCa, grantType, grantYear, groupCode, includeDeleted, includeOrphans, institution, irgCode, irgFlexCode, myCancerActivities, ncabFrom, ncabTo, notifyFlag, npnId, orderBy, pdAssignmentSearch, pdId, piName, referralOfficer, referralStatus, rfaPaNumber, role, roNpnId, selectFrom, sraDesignatorCode, sraFlexCode, wBSearch, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (remainingParams === null || remainingParams === undefined) {
                throw new Error('Required parameter remainingParams was null or undefined when calling searchGrantsForPDAssignmentUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (accessionNum !== undefined && accessionNum !== null) {
                queryParameters = queryParameters.set('accessionNum', accessionNum);
            }
            if (activeSegments !== undefined && activeSegments !== null) {
                queryParameters = queryParameters.set('activeSegments', activeSegments);
            }
            if (applId) {
                applId.forEach(function (element) {
                    queryParameters = queryParameters.append('applId', element);
                });
            }
            if (applIds) {
                applIds.forEach(function (element) {
                    queryParameters = queryParameters.append('applIds', element);
                });
            }
            if (applStatusGroupCode) {
                applStatusGroupCode.forEach(function (element) {
                    queryParameters = queryParameters.append('applStatusGroupCode', element);
                });
            }
            if (araMatchStatus) {
                araMatchStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('araMatchStatus', element);
                });
            }
            if (cancerActivities) {
                cancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('cancerActivities', element);
                });
            }
            if (composedGrantNumber !== undefined && composedGrantNumber !== null) {
                queryParameters = queryParameters.set('composedGrantNumber', composedGrantNumber);
            }
            if (dualCas !== undefined && dualCas !== null) {
                queryParameters = queryParameters.set('dualCas', dualCas);
            }
            if (formerGrantNumber !== undefined && formerGrantNumber !== null) {
                queryParameters = queryParameters.set('formerGrantNumber', formerGrantNumber);
            }
            if (fyFrom !== undefined && fyFrom !== null) {
                queryParameters = queryParameters.set('fyFrom', fyFrom);
            }
            if (fyTo !== undefined && fyTo !== null) {
                queryParameters = queryParameters.set('fyTo', fyTo);
            }
            if (grantIc !== undefined && grantIc !== null) {
                queryParameters = queryParameters.set('grantIc', grantIc);
            }
            if (grantMech !== undefined && grantMech !== null) {
                queryParameters = queryParameters.set('grantMech', grantMech);
            }
            if (grantSerial !== undefined && grantSerial !== null) {
                queryParameters = queryParameters.set('grantSerial', grantSerial);
            }
            if (grantSuffix !== undefined && grantSuffix !== null) {
                queryParameters = queryParameters.set('grantSuffix', grantSuffix);
            }
            if (grantsWitCa !== undefined && grantsWitCa !== null) {
                queryParameters = queryParameters.set('grantsWitCa', grantsWitCa);
            }
            if (grantType !== undefined && grantType !== null) {
                queryParameters = queryParameters.set('grantType', grantType);
            }
            if (grantYear !== undefined && grantYear !== null) {
                queryParameters = queryParameters.set('grantYear', grantYear);
            }
            if (groupCode !== undefined && groupCode !== null) {
                queryParameters = queryParameters.set('groupCode', groupCode);
            }
            if (includeDeleted !== undefined && includeDeleted !== null) {
                queryParameters = queryParameters.set('includeDeleted', includeDeleted);
            }
            if (includeOrphans !== undefined && includeOrphans !== null) {
                queryParameters = queryParameters.set('includeOrphans', includeOrphans);
            }
            if (institution !== undefined && institution !== null) {
                queryParameters = queryParameters.set('institution', institution);
            }
            if (irgCode !== undefined && irgCode !== null) {
                queryParameters = queryParameters.set('irgCode', irgCode);
            }
            if (irgFlexCode !== undefined && irgFlexCode !== null) {
                queryParameters = queryParameters.set('irgFlexCode', irgFlexCode);
            }
            if (myCancerActivities) {
                myCancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('myCancerActivities', element);
                });
            }
            if (ncabFrom !== undefined && ncabFrom !== null) {
                queryParameters = queryParameters.set('ncabFrom', ncabFrom);
            }
            if (ncabTo !== undefined && ncabTo !== null) {
                queryParameters = queryParameters.set('ncabTo', ncabTo);
            }
            if (notifyFlag !== undefined && notifyFlag !== null) {
                queryParameters = queryParameters.set('notifyFlag', notifyFlag);
            }
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pdAssignmentSearch !== undefined && pdAssignmentSearch !== null) {
                queryParameters = queryParameters.set('pdAssignmentSearch', pdAssignmentSearch);
            }
            if (pdId !== undefined && pdId !== null) {
                queryParameters = queryParameters.set('pdId', pdId);
            }
            if (piName !== undefined && piName !== null) {
                queryParameters = queryParameters.set('piName', piName);
            }
            if (referralOfficer !== undefined && referralOfficer !== null) {
                queryParameters = queryParameters.set('referralOfficer', referralOfficer);
            }
            if (referralStatus) {
                referralStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('referralStatus', element);
                });
            }
            if (remainingParams !== undefined && remainingParams !== null) {
                queryParameters = queryParameters.set('remainingParams', remainingParams);
            }
            if (rfaPaNumber) {
                rfaPaNumber.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaPaNumber', element);
                });
            }
            if (role !== undefined && role !== null) {
                queryParameters = queryParameters.set('role', role);
            }
            if (roNpnId !== undefined && roNpnId !== null) {
                queryParameters = queryParameters.set('roNpnId', roNpnId);
            }
            if (selectFrom !== undefined && selectFrom !== null) {
                queryParameters = queryParameters.set('selectFrom', selectFrom);
            }
            if (sraDesignatorCode !== undefined && sraDesignatorCode !== null) {
                queryParameters = queryParameters.set('sraDesignatorCode', sraDesignatorCode);
            }
            if (sraFlexCode !== undefined && sraFlexCode !== null) {
                queryParameters = queryParameters.set('sraFlexCode', sraFlexCode);
            }
            if (wBSearch !== undefined && wBSearch !== null) {
                queryParameters = queryParameters.set('WBSearch', wBSearch);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/pd-assignment/search", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.searchReferralGrantsUsingGET = function (remainingParams, accessionNum, activeSegments, applIds, applStatusGroupCode, araMatchStatus, cancerActivities, composedGrantNumber, dualCas, formerGrantNumber, fyFrom, fyTo, grantIc, grantMech, grantSerial, grantSuffix, grantsWitCa, grantType, grantYear, groupCode, includeDeleted, includeOrphans, institution, irgCode, irgFlexCode, myCancerActivities, ncabFrom, ncabTo, notifyFlag, npnId, orderBy, pdAssignmentSearch, pdId, piName, referralOfficer, referralStatus, rfaPaNumber, role, roNpnId, selectFrom, sraDesignatorCode, sraFlexCode, wBSearch, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (remainingParams === null || remainingParams === undefined) {
                throw new Error('Required parameter remainingParams was null or undefined when calling searchReferralGrantsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (accessionNum !== undefined && accessionNum !== null) {
                queryParameters = queryParameters.set('accessionNum', accessionNum);
            }
            if (activeSegments !== undefined && activeSegments !== null) {
                queryParameters = queryParameters.set('activeSegments', activeSegments);
            }
            if (applIds) {
                applIds.forEach(function (element) {
                    queryParameters = queryParameters.append('applIds', element);
                });
            }
            if (applStatusGroupCode) {
                applStatusGroupCode.forEach(function (element) {
                    queryParameters = queryParameters.append('applStatusGroupCode', element);
                });
            }
            if (araMatchStatus) {
                araMatchStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('araMatchStatus', element);
                });
            }
            if (cancerActivities) {
                cancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('cancerActivities', element);
                });
            }
            if (composedGrantNumber !== undefined && composedGrantNumber !== null) {
                queryParameters = queryParameters.set('composedGrantNumber', composedGrantNumber);
            }
            if (dualCas !== undefined && dualCas !== null) {
                queryParameters = queryParameters.set('dualCas', dualCas);
            }
            if (formerGrantNumber !== undefined && formerGrantNumber !== null) {
                queryParameters = queryParameters.set('formerGrantNumber', formerGrantNumber);
            }
            if (fyFrom !== undefined && fyFrom !== null) {
                queryParameters = queryParameters.set('fyFrom', fyFrom);
            }
            if (fyTo !== undefined && fyTo !== null) {
                queryParameters = queryParameters.set('fyTo', fyTo);
            }
            if (grantIc !== undefined && grantIc !== null) {
                queryParameters = queryParameters.set('grantIc', grantIc);
            }
            if (grantMech !== undefined && grantMech !== null) {
                queryParameters = queryParameters.set('grantMech', grantMech);
            }
            if (grantSerial !== undefined && grantSerial !== null) {
                queryParameters = queryParameters.set('grantSerial', grantSerial);
            }
            if (grantSuffix !== undefined && grantSuffix !== null) {
                queryParameters = queryParameters.set('grantSuffix', grantSuffix);
            }
            if (grantsWitCa !== undefined && grantsWitCa !== null) {
                queryParameters = queryParameters.set('grantsWitCa', grantsWitCa);
            }
            if (grantType !== undefined && grantType !== null) {
                queryParameters = queryParameters.set('grantType', grantType);
            }
            if (grantYear !== undefined && grantYear !== null) {
                queryParameters = queryParameters.set('grantYear', grantYear);
            }
            if (groupCode !== undefined && groupCode !== null) {
                queryParameters = queryParameters.set('groupCode', groupCode);
            }
            if (includeDeleted !== undefined && includeDeleted !== null) {
                queryParameters = queryParameters.set('includeDeleted', includeDeleted);
            }
            if (includeOrphans !== undefined && includeOrphans !== null) {
                queryParameters = queryParameters.set('includeOrphans', includeOrphans);
            }
            if (institution !== undefined && institution !== null) {
                queryParameters = queryParameters.set('institution', institution);
            }
            if (irgCode !== undefined && irgCode !== null) {
                queryParameters = queryParameters.set('irgCode', irgCode);
            }
            if (irgFlexCode !== undefined && irgFlexCode !== null) {
                queryParameters = queryParameters.set('irgFlexCode', irgFlexCode);
            }
            if (myCancerActivities) {
                myCancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('myCancerActivities', element);
                });
            }
            if (ncabFrom !== undefined && ncabFrom !== null) {
                queryParameters = queryParameters.set('ncabFrom', ncabFrom);
            }
            if (ncabTo !== undefined && ncabTo !== null) {
                queryParameters = queryParameters.set('ncabTo', ncabTo);
            }
            if (notifyFlag !== undefined && notifyFlag !== null) {
                queryParameters = queryParameters.set('notifyFlag', notifyFlag);
            }
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pdAssignmentSearch !== undefined && pdAssignmentSearch !== null) {
                queryParameters = queryParameters.set('pdAssignmentSearch', pdAssignmentSearch);
            }
            if (pdId !== undefined && pdId !== null) {
                queryParameters = queryParameters.set('pdId', pdId);
            }
            if (piName !== undefined && piName !== null) {
                queryParameters = queryParameters.set('piName', piName);
            }
            if (referralOfficer !== undefined && referralOfficer !== null) {
                queryParameters = queryParameters.set('referralOfficer', referralOfficer);
            }
            if (referralStatus) {
                referralStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('referralStatus', element);
                });
            }
            if (remainingParams !== undefined && remainingParams !== null) {
                queryParameters = queryParameters.set('remainingParams', remainingParams);
            }
            if (rfaPaNumber) {
                rfaPaNumber.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaPaNumber', element);
                });
            }
            if (role !== undefined && role !== null) {
                queryParameters = queryParameters.set('role', role);
            }
            if (roNpnId !== undefined && roNpnId !== null) {
                queryParameters = queryParameters.set('roNpnId', roNpnId);
            }
            if (selectFrom !== undefined && selectFrom !== null) {
                queryParameters = queryParameters.set('selectFrom', selectFrom);
            }
            if (sraDesignatorCode !== undefined && sraDesignatorCode !== null) {
                queryParameters = queryParameters.set('sraDesignatorCode', sraDesignatorCode);
            }
            if (sraFlexCode !== undefined && sraFlexCode !== null) {
                queryParameters = queryParameters.set('sraFlexCode', sraFlexCode);
            }
            if (wBSearch !== undefined && wBSearch !== null) {
                queryParameters = queryParameters.set('WBSearch', wBSearch);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-grants/search", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.searchReferralGrantsUsingPOST = function (remainingParams, accessionNum, activeSegments, applIds, applStatusGroupCode, araMatchStatus, cancerActivities, composedGrantNumber, dualCas, formerGrantNumber, fyFrom, fyTo, grantIc, grantMech, grantSerial, grantSuffix, grantsWitCa, grantType, grantYear, groupCode, includeDeleted, includeOrphans, institution, irgCode, irgFlexCode, myCancerActivities, ncabFrom, ncabTo, notifyFlag, npnId, orderBy, pdAssignmentSearch, pdId, piName, referralOfficer, referralStatus, rfaPaNumber, role, roNpnId, selectFrom, sraDesignatorCode, sraFlexCode, wBSearch, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (remainingParams === null || remainingParams === undefined) {
                throw new Error('Required parameter remainingParams was null or undefined when calling searchReferralGrantsUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (accessionNum !== undefined && accessionNum !== null) {
                queryParameters = queryParameters.set('accessionNum', accessionNum);
            }
            if (activeSegments !== undefined && activeSegments !== null) {
                queryParameters = queryParameters.set('activeSegments', activeSegments);
            }
            if (applIds) {
                applIds.forEach(function (element) {
                    queryParameters = queryParameters.append('applIds', element);
                });
            }
            if (applStatusGroupCode) {
                applStatusGroupCode.forEach(function (element) {
                    queryParameters = queryParameters.append('applStatusGroupCode', element);
                });
            }
            if (araMatchStatus) {
                araMatchStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('araMatchStatus', element);
                });
            }
            if (cancerActivities) {
                cancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('cancerActivities', element);
                });
            }
            if (composedGrantNumber !== undefined && composedGrantNumber !== null) {
                queryParameters = queryParameters.set('composedGrantNumber', composedGrantNumber);
            }
            if (dualCas !== undefined && dualCas !== null) {
                queryParameters = queryParameters.set('dualCas', dualCas);
            }
            if (formerGrantNumber !== undefined && formerGrantNumber !== null) {
                queryParameters = queryParameters.set('formerGrantNumber', formerGrantNumber);
            }
            if (fyFrom !== undefined && fyFrom !== null) {
                queryParameters = queryParameters.set('fyFrom', fyFrom);
            }
            if (fyTo !== undefined && fyTo !== null) {
                queryParameters = queryParameters.set('fyTo', fyTo);
            }
            if (grantIc !== undefined && grantIc !== null) {
                queryParameters = queryParameters.set('grantIc', grantIc);
            }
            if (grantMech !== undefined && grantMech !== null) {
                queryParameters = queryParameters.set('grantMech', grantMech);
            }
            if (grantSerial !== undefined && grantSerial !== null) {
                queryParameters = queryParameters.set('grantSerial', grantSerial);
            }
            if (grantSuffix !== undefined && grantSuffix !== null) {
                queryParameters = queryParameters.set('grantSuffix', grantSuffix);
            }
            if (grantsWitCa !== undefined && grantsWitCa !== null) {
                queryParameters = queryParameters.set('grantsWitCa', grantsWitCa);
            }
            if (grantType !== undefined && grantType !== null) {
                queryParameters = queryParameters.set('grantType', grantType);
            }
            if (grantYear !== undefined && grantYear !== null) {
                queryParameters = queryParameters.set('grantYear', grantYear);
            }
            if (groupCode !== undefined && groupCode !== null) {
                queryParameters = queryParameters.set('groupCode', groupCode);
            }
            if (includeDeleted !== undefined && includeDeleted !== null) {
                queryParameters = queryParameters.set('includeDeleted', includeDeleted);
            }
            if (includeOrphans !== undefined && includeOrphans !== null) {
                queryParameters = queryParameters.set('includeOrphans', includeOrphans);
            }
            if (institution !== undefined && institution !== null) {
                queryParameters = queryParameters.set('institution', institution);
            }
            if (irgCode !== undefined && irgCode !== null) {
                queryParameters = queryParameters.set('irgCode', irgCode);
            }
            if (irgFlexCode !== undefined && irgFlexCode !== null) {
                queryParameters = queryParameters.set('irgFlexCode', irgFlexCode);
            }
            if (myCancerActivities) {
                myCancerActivities.forEach(function (element) {
                    queryParameters = queryParameters.append('myCancerActivities', element);
                });
            }
            if (ncabFrom !== undefined && ncabFrom !== null) {
                queryParameters = queryParameters.set('ncabFrom', ncabFrom);
            }
            if (ncabTo !== undefined && ncabTo !== null) {
                queryParameters = queryParameters.set('ncabTo', ncabTo);
            }
            if (notifyFlag !== undefined && notifyFlag !== null) {
                queryParameters = queryParameters.set('notifyFlag', notifyFlag);
            }
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pdAssignmentSearch !== undefined && pdAssignmentSearch !== null) {
                queryParameters = queryParameters.set('pdAssignmentSearch', pdAssignmentSearch);
            }
            if (pdId !== undefined && pdId !== null) {
                queryParameters = queryParameters.set('pdId', pdId);
            }
            if (piName !== undefined && piName !== null) {
                queryParameters = queryParameters.set('piName', piName);
            }
            if (referralOfficer !== undefined && referralOfficer !== null) {
                queryParameters = queryParameters.set('referralOfficer', referralOfficer);
            }
            if (referralStatus) {
                referralStatus.forEach(function (element) {
                    queryParameters = queryParameters.append('referralStatus', element);
                });
            }
            if (remainingParams !== undefined && remainingParams !== null) {
                queryParameters = queryParameters.set('remainingParams', remainingParams);
            }
            if (rfaPaNumber) {
                rfaPaNumber.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaPaNumber', element);
                });
            }
            if (role !== undefined && role !== null) {
                queryParameters = queryParameters.set('role', role);
            }
            if (roNpnId !== undefined && roNpnId !== null) {
                queryParameters = queryParameters.set('roNpnId', roNpnId);
            }
            if (selectFrom !== undefined && selectFrom !== null) {
                queryParameters = queryParameters.set('selectFrom', selectFrom);
            }
            if (sraDesignatorCode !== undefined && sraDesignatorCode !== null) {
                queryParameters = queryParameters.set('sraDesignatorCode', sraDesignatorCode);
            }
            if (sraFlexCode !== undefined && sraFlexCode !== null) {
                queryParameters = queryParameters.set('sraFlexCode', sraFlexCode);
            }
            if (wBSearch !== undefined && wBSearch !== null) {
                queryParameters = queryParameters.set('WBSearch', wBSearch);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/referral-grants/search", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NciReferralGrantsControllerService.prototype.searchUsingGET = function (applId, cancerActivity, grantsWithoutInterest, mech, minDaysSinceReferral, ncabFromDate, ncabToDate, orderBy, pocNpnId, referralDateHigh, referralDateLow, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (applId) {
                applId.forEach(function (element) {
                    queryParameters = queryParameters.append('applId', element);
                });
            }
            if (cancerActivity !== undefined && cancerActivity !== null) {
                queryParameters = queryParameters.set('cancerActivity', cancerActivity);
            }
            if (grantsWithoutInterest !== undefined && grantsWithoutInterest !== null) {
                queryParameters = queryParameters.set('grantsWithoutInterest', grantsWithoutInterest);
            }
            if (mech !== undefined && mech !== null) {
                queryParameters = queryParameters.set('mech', mech);
            }
            if (minDaysSinceReferral !== undefined && minDaysSinceReferral !== null) {
                queryParameters = queryParameters.set('minDaysSinceReferral', minDaysSinceReferral);
            }
            if (ncabFromDate !== undefined && ncabFromDate !== null) {
                queryParameters = queryParameters.set('ncabFromDate', ncabFromDate);
            }
            if (ncabToDate !== undefined && ncabToDate !== null) {
                queryParameters = queryParameters.set('ncabToDate', ncabToDate);
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            if (pocNpnId !== undefined && pocNpnId !== null) {
                queryParameters = queryParameters.set('pocNpnId', pocNpnId);
            }
            if (referralDateHigh !== undefined && referralDateHigh !== null) {
                queryParameters = queryParameters.set('referralDateHigh', referralDateHigh);
            }
            if (referralDateLow !== undefined && referralDateLow !== null) {
                queryParameters = queryParameters.set('referralDateLow', referralDateLow);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-grants", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return NciReferralGrantsControllerService;
    }());
    NciReferralGrantsControllerService.decorators = [
        { type: core.Injectable }
    ];
    NciReferralGrantsControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PaylineCertificationsTEntityService = /** @class */ (function () {
        function PaylineCertificationsTEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PaylineCertificationsTEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingDELETE = function (id, paylinestatusestId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingDELETE.');
            }
            if (paylinestatusestId === null || paylinestatusestId === undefined) {
                throw new Error('Required parameter paylinestatusestId was null or undefined when calling paylineCertificationsTPaylineStatusesUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses/" + encodeURIComponent(String(paylinestatusestId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingDELETE1 = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingDELETE1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingGET1 = function (id, paylinestatusestId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingGET1.');
            }
            if (paylinestatusestId === null || paylinestatusestId === undefined) {
                throw new Error('Required parameter paylinestatusestId was null or undefined when calling paylineCertificationsTPaylineStatusesUsingGET1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/hal+json'
            ];
            return this.httpClient.get(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses/" + encodeURIComponent(String(paylinestatusestId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling paylineCertificationsTPaylineStatusesUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling paylineCertificationsTPaylineStatusesUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineCertificationsTEntityService.prototype.paylineCertificationsTPaylineStatusesUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling paylineCertificationsTPaylineStatusesUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineCertificationsTPaylineStatusesUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/paylineCertificationsTs/" + encodeURIComponent(String(id)) + "/paylineStatuses", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PaylineCertificationsTEntityService;
    }());
    PaylineCertificationsTEntityService.decorators = [
        { type: core.Injectable }
    ];
    PaylineCertificationsTEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PaylineControllerService = /** @class */ (function () {
        function PaylineControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PaylineControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PaylineControllerService.prototype.cancelPaylinesUsingPATCH = function (paylineId, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylineId === null || paylineId === undefined) {
                throw new Error('Required parameter paylineId was null or undefined when calling cancelPaylinesUsingPATCH.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling cancelPaylinesUsingPATCH.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (paylineId !== undefined && paylineId !== null) {
                queryParameters = queryParameters.set('payline_id', paylineId);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.patch(this.basePath + "/api/v1/paylines/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.certifyPaylinesUsingPOST = function (paylinesDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylinesDto === null || paylinesDto === undefined) {
                throw new Error('Required parameter paylinesDto was null or undefined when calling certifyPaylinesUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylines/certify", paylinesDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.findCertifiedPaylinesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/certified-paylines", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getFiscalYearUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/fiscal-years", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getNewPaylinesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/new-paylines", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getOEFIAPaylinesUsingGET = function (certifiedFlag, fy, isOefiaCertifier, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (certifiedFlag !== undefined && certifiedFlag !== null) {
                queryParameters = queryParameters.set('certifiedFlag', certifiedFlag);
            }
            if (fy !== undefined && fy !== null) {
                queryParameters = queryParameters.set('fy', fy);
            }
            if (isOefiaCertifier !== undefined && isOefiaCertifier !== null) {
                queryParameters = queryParameters.set('isOefiaCertifier', isOefiaCertifier);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/oefia-paylines", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getPaylineHistoryByIdUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getPaylineHistoryByIdUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylines/history/id/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getPaylineHistoryUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getPaylineHistoryUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylines/" + encodeURIComponent(String(id)) + "/history", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getPaylinesByIdUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getPaylinesByIdUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/view-paylines/id/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getPaylinesByParametersUsingGET = function (fy, activityCode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPaylinesByParametersUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activityCode !== undefined && activityCode !== null) {
                queryParameters = queryParameters.set('activityCode', activityCode);
            }
            if (fy !== undefined && fy !== null) {
                queryParameters = queryParameters.set('fy', fy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylines/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getPaylinesUsingGET = function (activityCode, fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (activityCode === null || activityCode === undefined) {
                throw new Error('Required parameter activityCode was null or undefined when calling getPaylinesUsingGET.');
            }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPaylinesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylines/" + encodeURIComponent(String(fy)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.getPaylinesUsingGET1 = function (activityCode, fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (activityCode === null || activityCode === undefined) {
                throw new Error('Required parameter activityCode was null or undefined when calling getPaylinesUsingGET1.');
            }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPaylinesUsingGET1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylines/" + encodeURIComponent(String(fy)) + "/" + encodeURIComponent(String(activityCode)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineControllerService.prototype.unCertifyPaylinesUsingPOST = function (paylinesDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylinesDto === null || paylinesDto === undefined) {
                throw new Error('Required parameter paylinesDto was null or undefined when calling unCertifyPaylinesUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylines/un-certify", paylinesDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PaylineControllerService;
    }());
    PaylineControllerService.decorators = [
        { type: core.Injectable }
    ];
    PaylineControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PaylineStatusesTEntityService = /** @class */ (function () {
        function PaylineStatusesTEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PaylineStatusesTEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PaylineStatusesTEntityService.prototype.paylineStatusesTStatusIdUsingDELETE = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineStatusesTStatusIdUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/paylineStatusesTs/" + encodeURIComponent(String(id)) + "/statusId", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineStatusesTEntityService.prototype.paylineStatusesTStatusIdUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineStatusesTStatusIdUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/paylineStatusesTs/" + encodeURIComponent(String(id)) + "/statusId", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineStatusesTEntityService.prototype.paylineStatusesTStatusIdUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling paylineStatusesTStatusIdUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineStatusesTStatusIdUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/paylineStatusesTs/" + encodeURIComponent(String(id)) + "/statusId", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineStatusesTEntityService.prototype.paylineStatusesTStatusIdUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling paylineStatusesTStatusIdUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineStatusesTStatusIdUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/paylineStatusesTs/" + encodeURIComponent(String(id)) + "/statusId", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylineStatusesTEntityService.prototype.paylineStatusesTStatusIdUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling paylineStatusesTStatusIdUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling paylineStatusesTStatusIdUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/paylineStatusesTs/" + encodeURIComponent(String(id)) + "/statusId", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PaylineStatusesTEntityService;
    }());
    PaylineStatusesTEntityService.decorators = [
        { type: core.Injectable }
    ];
    PaylineStatusesTEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PaylistControllerService = /** @class */ (function () {
        function PaylistControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PaylistControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PaylistControllerService.prototype.certifyPaylistUsingPOST = function (paylistDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylistDto === null || paylistDto === undefined) {
                throw new Error('Required parameter paylistDto was null or undefined when calling certifyPaylistUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylists/certify-paylist", paylistDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.deletePaylistUsingDELETE = function (paylistId, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylistId === null || paylistId === undefined) {
                throw new Error('Required parameter paylistId was null or undefined when calling deletePaylistUsingDELETE.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling deletePaylistUsingDELETE.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (paylistId !== undefined && paylistId !== null) {
                queryParameters = queryParameters.set('paylistId', paylistId);
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.delete(this.basePath + "/api/v1/paylists/delete", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.findPaylistsUsingPOST = function (criteriaDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (criteriaDto === null || criteriaDto === undefined) {
                throw new Error('Required parameter criteriaDto was null or undefined when calling findPaylistsUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylists/find-paylists", criteriaDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getDeactivatedUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/deactivated-paylists", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getPaylineHistoryByIdUsingGET1 = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getPaylineHistoryByIdUsingGET1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylists/history/id/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getPaylistFiscalYearsUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-fiscal-years", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getPaylistGrantsByIdUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getPaylistGrantsByIdUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-grants/id/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getPaylistGrantsUsingGET = function (activityCode, fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (activityCode === null || activityCode === undefined) {
                throw new Error('Required parameter activityCode was null or undefined when calling getPaylistGrantsUsingGET.');
            }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPaylistGrantsUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-grants/" + encodeURIComponent(String(fy)) + "/" + encodeURIComponent(String(activityCode)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getPaylistsUsingGET = function (fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPaylistsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (fy !== undefined && fy !== null) {
                queryParameters = queryParameters.set('fy', fy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/view-paylists", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getPendingGrantsUsingGET = function (fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPendingGrantsUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (fy !== undefined && fy !== null) {
                queryParameters = queryParameters.set('fy', fy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/pending-grants", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.getUncertifiedUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/uncertified-paylists", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistControllerService.prototype.savePaylistUsingPOST = function (paylistDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (paylistDto === null || paylistDto === undefined) {
                throw new Error('Required parameter paylistDto was null or undefined when calling savePaylistUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylists/save-paylist", paylistDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PaylistControllerService;
    }());
    PaylistControllerService.decorators = [
        { type: core.Injectable }
    ];
    PaylistControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PaylistGrantsControllerService = /** @class */ (function () {
        function PaylistGrantsControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PaylistGrantsControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PaylistGrantsControllerService.prototype.findPaylistGrantsUsingPOST = function (criteriaDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (criteriaDto === null || criteriaDto === undefined) {
                throw new Error('Required parameter criteriaDto was null or undefined when calling findPaylistGrantsUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylist-grants/find-open", criteriaDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistGrantsControllerService.prototype.getExceptionMappingUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-grants/exception-mapping", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistGrantsControllerService.prototype.massGenPaylistEnabledUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-grants/mass-gen-enabled", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistGrantsControllerService.prototype.massGeneratePaylistsUsingPOST = function (userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling massGeneratePaylistsUsingPOST.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/paylist-grants/mass-gen-paylists", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistGrantsControllerService.prototype.retrievePaylistGrantsByIdUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling retrievePaylistGrantsByIdUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-grants/retrieve/id/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistGrantsControllerService.prototype.searchPaylinePaylistGrantsUsingPOST = function (criteriaDto, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (criteriaDto === null || criteriaDto === undefined) {
                throw new Error('Required parameter criteriaDto was null or undefined when calling searchPaylinePaylistGrantsUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/paylist-grants/search-ppg", criteriaDto, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PaylistGrantsControllerService;
    }());
    PaylistGrantsControllerService.decorators = [
        { type: core.Injectable }
    ];
    PaylistGrantsControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PaylistUtilControllerService = /** @class */ (function () {
        function PaylistUtilControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PaylistUtilControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PaylistUtilControllerService.prototype.getBudgetMechanismsForFyUsingGET = function (fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getBudgetMechanismsForFyUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-util/budget-mechanisms/" + encodeURIComponent(String(fy)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistUtilControllerService.prototype.getCostCentersUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-util/cost-centers", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistUtilControllerService.prototype.getPaylistStatusesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-util/paylist-statuses", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PaylistUtilControllerService.prototype.getPaylistTypesUsingGET = function (fy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (fy === null || fy === undefined) {
                throw new Error('Required parameter fy was null or undefined when calling getPaylistTypesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/paylist-util/paylist-types/" + encodeURIComponent(String(fy)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PaylistUtilControllerService;
    }());
    PaylistUtilControllerService.decorators = [
        { type: core.Injectable }
    ];
    PaylistUtilControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PdControllerService = /** @class */ (function () {
        function PdControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PdControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PdControllerService.prototype.getPDListUsingGET = function (active, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (active === null || active === undefined) {
                throw new Error('Required parameter active was null or undefined when calling getPDListUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/pd-list/" + encodeURIComponent(String(active)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PdControllerService.prototype.getPDPortfoliosUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/pd-portfolios/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PdControllerService.prototype.getPdsByCayCodeUsingGET = function (ca, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (ca === null || ca === undefined) {
                throw new Error('Required parameter ca was null or undefined when calling getPdsByCayCodeUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/pds/" + encodeURIComponent(String(ca)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PdControllerService.prototype.getPdsByCayCodesUsingGET = function (cas, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (cas === null || cas === undefined) {
                throw new Error('Required parameter cas was null or undefined when calling getPdsByCayCodesUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (cas) {
                cas.forEach(function (element) {
                    queryParameters = queryParameters.append('cas', element);
                });
            }
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/pds/ca/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PdControllerService.prototype.isPdHasActiveGrantPortfolioUsingGET = function (npeId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npeId === null || npeId === undefined) {
                throw new Error('Required parameter npeId was null or undefined when calling isPdHasActiveGrantPortfolioUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/check-pd-has-active-grant-portfolio/" + encodeURIComponent(String(npeId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PdControllerService;
    }());
    PdControllerService.decorators = [
        { type: core.Injectable }
    ];
    PdControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var PropertiesControllerService = /** @class */ (function () {
        function PropertiesControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        PropertiesControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        PropertiesControllerService.prototype.getPropertiesUsingGET = function (app, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (app === null || app === undefined) {
                throw new Error('Required parameter app was null or undefined when calling getPropertiesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/properties/" + encodeURIComponent(String(app)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PropertiesControllerService.prototype.getPropertiesUsingGET1 = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/properties/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PropertiesControllerService.prototype.getPropertyUsingGET = function (app, propKey, defaultValue, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (app === null || app === undefined) {
                throw new Error('Required parameter app was null or undefined when calling getPropertyUsingGET.');
            }
            if (propKey === null || propKey === undefined) {
                throw new Error('Required parameter propKey was null or undefined when calling getPropertyUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (defaultValue !== undefined && defaultValue !== null) {
                queryParameters = queryParameters.set('defaultValue', defaultValue);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/properties/" + encodeURIComponent(String(app)) + "/" + encodeURIComponent(String(propKey)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return PropertiesControllerService;
    }());
    PropertiesControllerService.decorators = [
        { type: core.Injectable }
    ];
    PropertiesControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralApplNotifyCommentsTEntityService = /** @class */ (function () {
        function ReferralApplNotifyCommentsTEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralApplNotifyCommentsTEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralApplNotifyCommentsTEntityService.prototype.referralApplNotifyCommentsTNotifyUsingDELETE = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/referralApplNotifyCommentsTs/" + encodeURIComponent(String(id)) + "/notify", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyCommentsTEntityService.prototype.referralApplNotifyCommentsTNotifyUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/referralApplNotifyCommentsTs/" + encodeURIComponent(String(id)) + "/notify", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyCommentsTEntityService.prototype.referralApplNotifyCommentsTNotifyUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/referralApplNotifyCommentsTs/" + encodeURIComponent(String(id)) + "/notify", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyCommentsTEntityService.prototype.referralApplNotifyCommentsTNotifyUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/referralApplNotifyCommentsTs/" + encodeURIComponent(String(id)) + "/notify", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyCommentsTEntityService.prototype.referralApplNotifyCommentsTNotifyUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/referralApplNotifyCommentsTs/" + encodeURIComponent(String(id)) + "/notify", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralApplNotifyCommentsTEntityService;
    }());
    ReferralApplNotifyCommentsTEntityService.decorators = [
        { type: core.Injectable }
    ];
    ReferralApplNotifyCommentsTEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralApplNotifyControllerService = /** @class */ (function () {
        function ReferralApplNotifyControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralApplNotifyControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralApplNotifyControllerService.prototype.getNotifyForApplIdUsingGET = function (applId, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getNotifyForApplIdUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/notify/" + encodeURIComponent(String(applId)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralApplNotifyControllerService;
    }());
    ReferralApplNotifyControllerService.decorators = [
        { type: core.Injectable }
    ];
    ReferralApplNotifyControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralApplNotifyTEntityService = /** @class */ (function () {
        function ReferralApplNotifyTEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralApplNotifyTEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingDELETE = function (id, referralapplnotifycommentstId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingDELETE.');
            }
            if (referralapplnotifycommentstId === null || referralapplnotifycommentstId === undefined) {
                throw new Error('Required parameter referralapplnotifycommentstId was null or undefined when calling referralApplNotifyTCommentsUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments/" + encodeURIComponent(String(referralapplnotifycommentstId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingDELETE1 = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingDELETE1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingGET1 = function (id, referralapplnotifycommentstId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingGET1.');
            }
            if (referralapplnotifycommentstId === null || referralapplnotifycommentstId === undefined) {
                throw new Error('Required parameter referralapplnotifycommentstId was null or undefined when calling referralApplNotifyTCommentsUsingGET1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/hal+json'
            ];
            return this.httpClient.get(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments/" + encodeURIComponent(String(referralapplnotifycommentstId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralApplNotifyTCommentsUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralApplNotifyTCommentsUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralApplNotifyTEntityService.prototype.referralApplNotifyTCommentsUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralApplNotifyTCommentsUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralApplNotifyTCommentsUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/referralApplNotifyTs/" + encodeURIComponent(String(id)) + "/comments", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralApplNotifyTEntityService;
    }());
    ReferralApplNotifyTEntityService.decorators = [
        { type: core.Injectable }
    ];
    ReferralApplNotifyTEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralMessagesControllerService = /** @class */ (function () {
        function ReferralMessagesControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralMessagesControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralMessagesControllerService.prototype.getMessagesForApplIdUsingGET = function (applId, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getMessagesForApplIdUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/message/" + encodeURIComponent(String(applId)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesControllerService.prototype.readAllMessagesUsingPOST = function (applId, npnId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling readAllMessagesUsingPOST.');
            }
            if (npnId === null || npnId === undefined) {
                throw new Error('Required parameter npnId was null or undefined when calling readAllMessagesUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/referral/message-read/" + encodeURIComponent(String(applId)) + "/" + encodeURIComponent(String(npnId)), null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesControllerService.prototype.readMessageUsingPOST = function (message, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (message === null || message === undefined) {
                throw new Error('Required parameter message was null or undefined when calling readMessageUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/message-read", message, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesControllerService.prototype.saveMessageUsingPOST = function (message, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (message === null || message === undefined) {
                throw new Error('Required parameter message was null or undefined when calling saveMessageUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/message", message, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralMessagesControllerService;
    }());
    ReferralMessagesControllerService.decorators = [
        { type: core.Injectable }
    ];
    ReferralMessagesControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralMessagesTEntityService = /** @class */ (function () {
        function ReferralMessagesTEntityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralMessagesTEntityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingDELETE = function (id, referralmessagesreadtId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingDELETE.');
            }
            if (referralmessagesreadtId === null || referralmessagesreadtId === undefined) {
                throw new Error('Required parameter referralmessagesreadtId was null or undefined when calling referralMessagesTMessagesReadUsingDELETE.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead/" + encodeURIComponent(String(referralmessagesreadtId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingDELETE1 = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingDELETE1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            return this.httpClient.delete(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingGET = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/hal+json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingGET1 = function (id, referralmessagesreadtId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingGET1.');
            }
            if (referralmessagesreadtId === null || referralmessagesreadtId === undefined) {
                throw new Error('Required parameter referralmessagesreadtId was null or undefined when calling referralMessagesTMessagesReadUsingGET1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/hal+json'
            ];
            return this.httpClient.get(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead/" + encodeURIComponent(String(referralmessagesreadtId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingPATCH = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralMessagesTMessagesReadUsingPATCH.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingPOST = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralMessagesTMessagesReadUsingPOST.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralMessagesTEntityService.prototype.referralMessagesTMessagesReadUsingPUT = function (body, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling referralMessagesTMessagesReadUsingPUT.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling referralMessagesTMessagesReadUsingPUT.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'text/uri-list',
                'application/x-spring-data-compact+json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/referralMessagesTs/" + encodeURIComponent(String(id)) + "/messagesRead", body, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralMessagesTEntityService;
    }());
    ReferralMessagesTEntityService.decorators = [
        { type: core.Injectable }
    ];
    ReferralMessagesTEntityService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralSearchCriteriaControllerService = /** @class */ (function () {
        function ReferralSearchCriteriaControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralSearchCriteriaControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralSearchCriteriaControllerService.prototype.getAraMatchStatusesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ara-statuses/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralSearchCriteriaControllerService.prototype.getI2eStatusesUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/i2e-statuses", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralSearchCriteriaControllerService.prototype.getReferralCloseReasonsUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-close-reasons", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralSearchCriteriaControllerService.prototype.getReferralFromUsingGET = function (role, npnId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (role === null || role === undefined) {
                throw new Error('Required parameter role was null or undefined when calling getReferralFromUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (npnId !== undefined && npnId !== null) {
                queryParameters = queryParameters.set('npnId', npnId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-from/" + encodeURIComponent(String(role)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralSearchCriteriaControllerService.prototype.getReferralStatusesUsingGET = function (role, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (role === null || role === undefined) {
                throw new Error('Required parameter role was null or undefined when calling getReferralStatusesUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-statuses/" + encodeURIComponent(String(role)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralSearchCriteriaControllerService;
    }());
    ReferralSearchCriteriaControllerService.decorators = [
        { type: core.Injectable }
    ];
    ReferralSearchCriteriaControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var ReferralWorkflowControllerService = /** @class */ (function () {
        function ReferralWorkflowControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ReferralWorkflowControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ReferralWorkflowControllerService.prototype.acceptUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling acceptUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling acceptUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/accept/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.addCaInterestUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling addCaInterestUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling addCaInterestUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/add-ca-interest/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.assignROUsingPOST = function (applToRos, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applToRos === null || applToRos === undefined) {
                throw new Error('Required parameter applToRos was null or undefined when calling assignROUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling assignROUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/assign-ro/" + encodeURIComponent(String(userId)), applToRos, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.closeReferralUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling closeReferralUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling closeReferralUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/close-referral/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.deleteNotifyUsingPATCH = function (notify, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (notify === null || notify === undefined) {
                throw new Error('Required parameter notify was null or undefined when calling deleteNotifyUsingPATCH.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling deleteNotifyUsingPATCH.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/api/v1/referral/notify/" + encodeURIComponent(String(userId)), notify, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.getCurrentRefPssCodeUsingGET = function (applId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getCurrentRefPssCodeUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/current-ref-pss-code/" + encodeURIComponent(String(applId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.getPreviousPdCaUsingGET = function (applId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getPreviousPdCaUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/previous-pd-ca/" + encodeURIComponent(String(applId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.getReferralActionHistoryUsingGET = function (applId, orderBy, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getReferralActionHistoryUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (orderBy !== undefined && orderBy !== null) {
                queryParameters = queryParameters.set('orderBy', orderBy);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral-action-history/" + encodeURIComponent(String(applId)), {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.getReopenPssCodeUsingGET = function (applId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getReopenPssCodeUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/reopen-pss-code/" + encodeURIComponent(String(applId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.getReopenPssDescriptionUsingGET = function (applId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling getReopenPssDescriptionUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/reopen-pss-description/" + encodeURIComponent(String(applId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.notifyUsingPOST = function (notify, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (notify === null || notify === undefined) {
                throw new Error('Required parameter notify was null or undefined when calling notifyUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling notifyUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/notify/" + encodeURIComponent(String(userId)), notify, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.referUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling referUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling referUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/refer/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.rejectReferralUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling rejectReferralUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling rejectReferralUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/reject-referral/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.releaseDualSpclCaseUsingPOST = function (npnId, referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npnId === null || npnId === undefined) {
                throw new Error('Required parameter npnId was null or undefined when calling releaseDualSpclCaseUsingPOST.');
            }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling releaseDualSpclCaseUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling releaseDualSpclCaseUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/release-dual-spcl-case/" + encodeURIComponent(String(userId)) + "/" + encodeURIComponent(String(npnId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.releaseDualUsingPOST = function (npnId, referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npnId === null || npnId === undefined) {
                throw new Error('Required parameter npnId was null or undefined when calling releaseDualUsingPOST.');
            }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling releaseDualUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling releaseDualUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/release-dual/" + encodeURIComponent(String(userId)) + "/" + encodeURIComponent(String(npnId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.removeCaInterestUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling removeCaInterestUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling removeCaInterestUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/remove-ca-interest/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.reopenReferralUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling reopenReferralUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling reopenReferralUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/reopen-referral/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.transferUsingPOST = function (isXfer, npeId, transfers, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (isXfer === null || isXfer === undefined) {
                throw new Error('Required parameter isXfer was null or undefined when calling transferUsingPOST.');
            }
            if (npeId === null || npeId === undefined) {
                throw new Error('Required parameter npeId was null or undefined when calling transferUsingPOST.');
            }
            if (transfers === null || transfers === undefined) {
                throw new Error('Required parameter transfers was null or undefined when calling transferUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling transferUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/pd-assignment/transfer/" + encodeURIComponent(String(userId)) + "/" + encodeURIComponent(String(npeId)) + "/" + encodeURIComponent(String(isXfer)), transfers, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.transferUsingPOST1 = function (npnId, referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npnId === null || npnId === undefined) {
                throw new Error('Required parameter npnId was null or undefined when calling transferUsingPOST1.');
            }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling transferUsingPOST1.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling transferUsingPOST1.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/transfer/" + encodeURIComponent(String(userId)) + "/" + encodeURIComponent(String(npnId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.unreferUsingPOST = function (referrals, userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (referrals === null || referrals === undefined) {
                throw new Error('Required parameter referrals was null or undefined when calling unreferUsingPOST.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling unreferUsingPOST.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/api/v1/referral/unrefer/" + encodeURIComponent(String(userId)), referrals, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.validateReferralActionUsingGET = function (action, applId, userNpnId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (action === null || action === undefined) {
                throw new Error('Required parameter action was null or undefined when calling validateReferralActionUsingGET.');
            }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling validateReferralActionUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (action !== undefined && action !== null) {
                queryParameters = queryParameters.set('action', action);
            }
            if (applId) {
                applId.forEach(function (element) {
                    queryParameters = queryParameters.append('applId', element);
                });
            }
            if (userNpnId !== undefined && userNpnId !== null) {
                queryParameters = queryParameters.set('userNpnId', userNpnId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/referral/validation", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ReferralWorkflowControllerService.prototype.validateTransferGrantActionUsingGET = function (applId, userCayCodes, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (applId === null || applId === undefined) {
                throw new Error('Required parameter applId was null or undefined when calling validateTransferGrantActionUsingGET.');
            }
            if (userCayCodes === null || userCayCodes === undefined) {
                throw new Error('Required parameter userCayCodes was null or undefined when calling validateTransferGrantActionUsingGET.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (applId) {
                applId.forEach(function (element) {
                    queryParameters = queryParameters.append('applId', element);
                });
            }
            if (userCayCodes) {
                userCayCodes.forEach(function (element) {
                    queryParameters = queryParameters.append('userCayCodes', element);
                });
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/transferGrants/validation", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return ReferralWorkflowControllerService;
    }());
    ReferralWorkflowControllerService.decorators = [
        { type: core.Injectable }
    ];
    ReferralWorkflowControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var RoAssignmentControllerService = /** @class */ (function () {
        function RoAssignmentControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        RoAssignmentControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        RoAssignmentControllerService.prototype.getActiveROListUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ro-list/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        RoAssignmentControllerService.prototype.getDefaultROUsingGET = function (isDefaultRO, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (isDefaultRO === null || isDefaultRO === undefined) {
                throw new Error('Required parameter isDefaultRO was null or undefined when calling getDefaultROUsingGET.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ro-assignment-rules/" + encodeURIComponent(String(isDefaultRO)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        RoAssignmentControllerService.prototype.getRoAssignmentRulesListUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/ro-assignment-rules/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        RoAssignmentControllerService.prototype.inactivateAllRoAssignmentsUsingPATCH = function (roNpeId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (roNpeId === null || roNpeId === undefined) {
                throw new Error('Required parameter roNpeId was null or undefined when calling inactivateAllRoAssignmentsUsingPATCH.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (roNpeId !== undefined && roNpeId !== null) {
                queryParameters = queryParameters.set('roNpeId', roNpeId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.patch(this.basePath + "/api/v1/ro-assignment-rules/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        RoAssignmentControllerService.prototype.saveOrUpdateDefaultRoUsingPUT = function (defaultRoNpeId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (defaultRoNpeId === null || defaultRoNpeId === undefined) {
                throw new Error('Required parameter defaultRoNpeId was null or undefined when calling saveOrUpdateDefaultRoUsingPUT.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (defaultRoNpeId !== undefined && defaultRoNpeId !== null) {
                queryParameters = queryParameters.set('defaultRoNpeId', defaultRoNpeId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.put(this.basePath + "/api/v1/ro-assignment-rules/", null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        RoAssignmentControllerService.prototype.saveRoAssignmentUsingPUT = function (npeId, userId, mechList, rfaList, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (npeId === null || npeId === undefined) {
                throw new Error('Required parameter npeId was null or undefined when calling saveRoAssignmentUsingPUT.');
            }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling saveRoAssignmentUsingPUT.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (mechList) {
                mechList.forEach(function (element) {
                    queryParameters = queryParameters.append('mechList[]', element);
                });
            }
            if (rfaList) {
                rfaList.forEach(function (element) {
                    queryParameters = queryParameters.append('rfaList[]', element);
                });
            }
            if (userId !== undefined && userId !== null) {
                queryParameters = queryParameters.set('userId', userId);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.put(this.basePath + "/api/v1/ro-assignments/" + encodeURIComponent(String(npeId)), null, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return RoAssignmentControllerService;
    }());
    RoAssignmentControllerService.decorators = [
        { type: core.Injectable }
    ];
    RoAssignmentControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var UserControllerService = /** @class */ (function () {
        function UserControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        UserControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        UserControllerService.prototype.getUsersUsingGET = function (activeFlag, term, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (activeFlag !== undefined && activeFlag !== null) {
                queryParameters = queryParameters.set('activeFlag', activeFlag);
            }
            if (term !== undefined && term !== null) {
                queryParameters = queryParameters.set('term', term);
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/nci-people/", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingDELETE = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.delete(this.basePath + "/api/v1/user", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/user", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingHEAD = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.head(this.basePath + "/api/v1/user", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingOPTIONS = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.options(this.basePath + "/api/v1/user", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingPATCH = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.patch(this.basePath + "/api/v1/user", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingPOST = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.post(this.basePath + "/api/v1/user", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        UserControllerService.prototype.userUsingPUT = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            return this.httpClient.put(this.basePath + "/api/v1/user", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return UserControllerService;
    }());
    UserControllerService.decorators = [
        { type: core.Injectable }
    ];
    UserControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var WorkbenchControllerService = /** @class */ (function () {
        function WorkbenchControllerService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        WorkbenchControllerService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        WorkbenchControllerService.prototype.getWorkbenchReferralActivityAppletUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml',
                'text/html'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/workbench/referral-activity-applet", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkbenchControllerService.prototype.getWorkbenchReferralAppletUsingGET = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json',
                'application/xml',
                'text/html'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.get(this.basePath + "/api/v1/workbench/referral-applet", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        return WorkbenchControllerService;
    }());
    WorkbenchControllerService.decorators = [
        { type: core.Injectable }
    ];
    WorkbenchControllerService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: core.Optional }] }
    ]; };

    var APIS = [ActivitiesCodeControllerService, ApiQueueEntityService, AppNavigationTControllerService, AppNavigationTEntityService, AraControllerService, AraReasonsControllerService, BoardsControllerService, CancerActivityControllerService, CancerActivityRolesControllerService, CgRefCodControllerService, EmControllerService, ExportControllerService, GwbLinksControllerService, I2eUserActiveRolesControllerService, IcDataControllerService, JasperReportControllerService, LookupsControllerService, NciReferralGrantsControllerService, PaylineCertificationsTEntityService, PaylineControllerService, PaylineStatusesTEntityService, PaylistControllerService, PaylistGrantsControllerService, PaylistUtilControllerService, PdControllerService, PropertiesControllerService, ReferralApplNotifyCommentsTEntityService, ReferralApplNotifyControllerService, ReferralApplNotifyTEntityService, ReferralMessagesControllerService, ReferralMessagesTEntityService, ReferralSearchCriteriaControllerService, ReferralWorkflowControllerService, RoAssignmentControllerService, UserControllerService, WorkbenchControllerService];

    exports.ModelAndView = void 0;
    (function (ModelAndView) {
        ModelAndView.StatusEnum = {
            ACCEPTED: 'ACCEPTED',
            ALREADYREPORTED: 'ALREADY_REPORTED',
            BADGATEWAY: 'BAD_GATEWAY',
            BADREQUEST: 'BAD_REQUEST',
            BANDWIDTHLIMITEXCEEDED: 'BANDWIDTH_LIMIT_EXCEEDED',
            CHECKPOINT: 'CHECKPOINT',
            CONFLICT: 'CONFLICT',
            CONTINUE: 'CONTINUE',
            CREATED: 'CREATED',
            DESTINATIONLOCKED: 'DESTINATION_LOCKED',
            EXPECTATIONFAILED: 'EXPECTATION_FAILED',
            FAILEDDEPENDENCY: 'FAILED_DEPENDENCY',
            FORBIDDEN: 'FORBIDDEN',
            FOUND: 'FOUND',
            GATEWAYTIMEOUT: 'GATEWAY_TIMEOUT',
            GONE: 'GONE',
            HTTPVERSIONNOTSUPPORTED: 'HTTP_VERSION_NOT_SUPPORTED',
            IMUSED: 'IM_USED',
            INSUFFICIENTSPACEONRESOURCE: 'INSUFFICIENT_SPACE_ON_RESOURCE',
            INSUFFICIENTSTORAGE: 'INSUFFICIENT_STORAGE',
            INTERNALSERVERERROR: 'INTERNAL_SERVER_ERROR',
            IAMATEAPOT: 'I_AM_A_TEAPOT',
            LENGTHREQUIRED: 'LENGTH_REQUIRED',
            LOCKED: 'LOCKED',
            LOOPDETECTED: 'LOOP_DETECTED',
            METHODFAILURE: 'METHOD_FAILURE',
            METHODNOTALLOWED: 'METHOD_NOT_ALLOWED',
            MOVEDPERMANENTLY: 'MOVED_PERMANENTLY',
            MOVEDTEMPORARILY: 'MOVED_TEMPORARILY',
            MULTIPLECHOICES: 'MULTIPLE_CHOICES',
            MULTISTATUS: 'MULTI_STATUS',
            NETWORKAUTHENTICATIONREQUIRED: 'NETWORK_AUTHENTICATION_REQUIRED',
            NONAUTHORITATIVEINFORMATION: 'NON_AUTHORITATIVE_INFORMATION',
            NOTACCEPTABLE: 'NOT_ACCEPTABLE',
            NOTEXTENDED: 'NOT_EXTENDED',
            NOTFOUND: 'NOT_FOUND',
            NOTIMPLEMENTED: 'NOT_IMPLEMENTED',
            NOTMODIFIED: 'NOT_MODIFIED',
            NOCONTENT: 'NO_CONTENT',
            OK: 'OK',
            PARTIALCONTENT: 'PARTIAL_CONTENT',
            PAYLOADTOOLARGE: 'PAYLOAD_TOO_LARGE',
            PAYMENTREQUIRED: 'PAYMENT_REQUIRED',
            PERMANENTREDIRECT: 'PERMANENT_REDIRECT',
            PRECONDITIONFAILED: 'PRECONDITION_FAILED',
            PRECONDITIONREQUIRED: 'PRECONDITION_REQUIRED',
            PROCESSING: 'PROCESSING',
            PROXYAUTHENTICATIONREQUIRED: 'PROXY_AUTHENTICATION_REQUIRED',
            REQUESTEDRANGENOTSATISFIABLE: 'REQUESTED_RANGE_NOT_SATISFIABLE',
            REQUESTENTITYTOOLARGE: 'REQUEST_ENTITY_TOO_LARGE',
            REQUESTHEADERFIELDSTOOLARGE: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
            REQUESTTIMEOUT: 'REQUEST_TIMEOUT',
            REQUESTURITOOLONG: 'REQUEST_URI_TOO_LONG',
            RESETCONTENT: 'RESET_CONTENT',
            SEEOTHER: 'SEE_OTHER',
            SERVICEUNAVAILABLE: 'SERVICE_UNAVAILABLE',
            SWITCHINGPROTOCOLS: 'SWITCHING_PROTOCOLS',
            TEMPORARYREDIRECT: 'TEMPORARY_REDIRECT',
            TOOEARLY: 'TOO_EARLY',
            TOOMANYREQUESTS: 'TOO_MANY_REQUESTS',
            UNAUTHORIZED: 'UNAUTHORIZED',
            UNAVAILABLEFORLEGALREASONS: 'UNAVAILABLE_FOR_LEGAL_REASONS',
            UNPROCESSABLEENTITY: 'UNPROCESSABLE_ENTITY',
            UNSUPPORTEDMEDIATYPE: 'UNSUPPORTED_MEDIA_TYPE',
            UPGRADEREQUIRED: 'UPGRADE_REQUIRED',
            URITOOLONG: 'URI_TOO_LONG',
            USEPROXY: 'USE_PROXY',
            VARIANTALSONEGOTIATES: 'VARIANT_ALSO_NEGOTIATES'
        };
    })(exports.ModelAndView || (exports.ModelAndView = {}));

    exports.Payload = void 0;
    (function (Payload) {
        Payload.StatusEnum = {
            ACCEPTED: 'ACCEPTED',
            ALREADYREPORTED: 'ALREADY_REPORTED',
            BADGATEWAY: 'BAD_GATEWAY',
            BADREQUEST: 'BAD_REQUEST',
            BANDWIDTHLIMITEXCEEDED: 'BANDWIDTH_LIMIT_EXCEEDED',
            CHECKPOINT: 'CHECKPOINT',
            CONFLICT: 'CONFLICT',
            CONTINUE: 'CONTINUE',
            CREATED: 'CREATED',
            DESTINATIONLOCKED: 'DESTINATION_LOCKED',
            EXPECTATIONFAILED: 'EXPECTATION_FAILED',
            FAILEDDEPENDENCY: 'FAILED_DEPENDENCY',
            FORBIDDEN: 'FORBIDDEN',
            FOUND: 'FOUND',
            GATEWAYTIMEOUT: 'GATEWAY_TIMEOUT',
            GONE: 'GONE',
            HTTPVERSIONNOTSUPPORTED: 'HTTP_VERSION_NOT_SUPPORTED',
            IMUSED: 'IM_USED',
            INSUFFICIENTSPACEONRESOURCE: 'INSUFFICIENT_SPACE_ON_RESOURCE',
            INSUFFICIENTSTORAGE: 'INSUFFICIENT_STORAGE',
            INTERNALSERVERERROR: 'INTERNAL_SERVER_ERROR',
            IAMATEAPOT: 'I_AM_A_TEAPOT',
            LENGTHREQUIRED: 'LENGTH_REQUIRED',
            LOCKED: 'LOCKED',
            LOOPDETECTED: 'LOOP_DETECTED',
            METHODFAILURE: 'METHOD_FAILURE',
            METHODNOTALLOWED: 'METHOD_NOT_ALLOWED',
            MOVEDPERMANENTLY: 'MOVED_PERMANENTLY',
            MOVEDTEMPORARILY: 'MOVED_TEMPORARILY',
            MULTIPLECHOICES: 'MULTIPLE_CHOICES',
            MULTISTATUS: 'MULTI_STATUS',
            NETWORKAUTHENTICATIONREQUIRED: 'NETWORK_AUTHENTICATION_REQUIRED',
            NONAUTHORITATIVEINFORMATION: 'NON_AUTHORITATIVE_INFORMATION',
            NOTACCEPTABLE: 'NOT_ACCEPTABLE',
            NOTEXTENDED: 'NOT_EXTENDED',
            NOTFOUND: 'NOT_FOUND',
            NOTIMPLEMENTED: 'NOT_IMPLEMENTED',
            NOTMODIFIED: 'NOT_MODIFIED',
            NOCONTENT: 'NO_CONTENT',
            OK: 'OK',
            PARTIALCONTENT: 'PARTIAL_CONTENT',
            PAYLOADTOOLARGE: 'PAYLOAD_TOO_LARGE',
            PAYMENTREQUIRED: 'PAYMENT_REQUIRED',
            PERMANENTREDIRECT: 'PERMANENT_REDIRECT',
            PRECONDITIONFAILED: 'PRECONDITION_FAILED',
            PRECONDITIONREQUIRED: 'PRECONDITION_REQUIRED',
            PROCESSING: 'PROCESSING',
            PROXYAUTHENTICATIONREQUIRED: 'PROXY_AUTHENTICATION_REQUIRED',
            REQUESTEDRANGENOTSATISFIABLE: 'REQUESTED_RANGE_NOT_SATISFIABLE',
            REQUESTENTITYTOOLARGE: 'REQUEST_ENTITY_TOO_LARGE',
            REQUESTHEADERFIELDSTOOLARGE: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
            REQUESTTIMEOUT: 'REQUEST_TIMEOUT',
            REQUESTURITOOLONG: 'REQUEST_URI_TOO_LONG',
            RESETCONTENT: 'RESET_CONTENT',
            SEEOTHER: 'SEE_OTHER',
            SERVICEUNAVAILABLE: 'SERVICE_UNAVAILABLE',
            SWITCHINGPROTOCOLS: 'SWITCHING_PROTOCOLS',
            TEMPORARYREDIRECT: 'TEMPORARY_REDIRECT',
            TOOEARLY: 'TOO_EARLY',
            TOOMANYREQUESTS: 'TOO_MANY_REQUESTS',
            UNAUTHORIZED: 'UNAUTHORIZED',
            UNAVAILABLEFORLEGALREASONS: 'UNAVAILABLE_FOR_LEGAL_REASONS',
            UNPROCESSABLEENTITY: 'UNPROCESSABLE_ENTITY',
            UNSUPPORTEDMEDIATYPE: 'UNSUPPORTED_MEDIA_TYPE',
            UPGRADEREQUIRED: 'UPGRADE_REQUIRED',
            URITOOLONG: 'URI_TOO_LONG',
            USEPROXY: 'USE_PROXY',
            VARIANTALSONEGOTIATES: 'VARIANT_ALSO_NEGOTIATES'
        };
    })(exports.Payload || (exports.Payload = {}));

    /**
     * Api Documentation
     * Api Documentation
     *
     * OpenAPI spec version: 1.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */
    exports.ResponseEntity = void 0;
    (function (ResponseEntity) {
        ResponseEntity.StatusCodeEnum = {
            ACCEPTED: 'ACCEPTED',
            ALREADYREPORTED: 'ALREADY_REPORTED',
            BADGATEWAY: 'BAD_GATEWAY',
            BADREQUEST: 'BAD_REQUEST',
            BANDWIDTHLIMITEXCEEDED: 'BANDWIDTH_LIMIT_EXCEEDED',
            CHECKPOINT: 'CHECKPOINT',
            CONFLICT: 'CONFLICT',
            CONTINUE: 'CONTINUE',
            CREATED: 'CREATED',
            DESTINATIONLOCKED: 'DESTINATION_LOCKED',
            EXPECTATIONFAILED: 'EXPECTATION_FAILED',
            FAILEDDEPENDENCY: 'FAILED_DEPENDENCY',
            FORBIDDEN: 'FORBIDDEN',
            FOUND: 'FOUND',
            GATEWAYTIMEOUT: 'GATEWAY_TIMEOUT',
            GONE: 'GONE',
            HTTPVERSIONNOTSUPPORTED: 'HTTP_VERSION_NOT_SUPPORTED',
            IMUSED: 'IM_USED',
            INSUFFICIENTSPACEONRESOURCE: 'INSUFFICIENT_SPACE_ON_RESOURCE',
            INSUFFICIENTSTORAGE: 'INSUFFICIENT_STORAGE',
            INTERNALSERVERERROR: 'INTERNAL_SERVER_ERROR',
            IAMATEAPOT: 'I_AM_A_TEAPOT',
            LENGTHREQUIRED: 'LENGTH_REQUIRED',
            LOCKED: 'LOCKED',
            LOOPDETECTED: 'LOOP_DETECTED',
            METHODFAILURE: 'METHOD_FAILURE',
            METHODNOTALLOWED: 'METHOD_NOT_ALLOWED',
            MOVEDPERMANENTLY: 'MOVED_PERMANENTLY',
            MOVEDTEMPORARILY: 'MOVED_TEMPORARILY',
            MULTIPLECHOICES: 'MULTIPLE_CHOICES',
            MULTISTATUS: 'MULTI_STATUS',
            NETWORKAUTHENTICATIONREQUIRED: 'NETWORK_AUTHENTICATION_REQUIRED',
            NONAUTHORITATIVEINFORMATION: 'NON_AUTHORITATIVE_INFORMATION',
            NOTACCEPTABLE: 'NOT_ACCEPTABLE',
            NOTEXTENDED: 'NOT_EXTENDED',
            NOTFOUND: 'NOT_FOUND',
            NOTIMPLEMENTED: 'NOT_IMPLEMENTED',
            NOTMODIFIED: 'NOT_MODIFIED',
            NOCONTENT: 'NO_CONTENT',
            OK: 'OK',
            PARTIALCONTENT: 'PARTIAL_CONTENT',
            PAYLOADTOOLARGE: 'PAYLOAD_TOO_LARGE',
            PAYMENTREQUIRED: 'PAYMENT_REQUIRED',
            PERMANENTREDIRECT: 'PERMANENT_REDIRECT',
            PRECONDITIONFAILED: 'PRECONDITION_FAILED',
            PRECONDITIONREQUIRED: 'PRECONDITION_REQUIRED',
            PROCESSING: 'PROCESSING',
            PROXYAUTHENTICATIONREQUIRED: 'PROXY_AUTHENTICATION_REQUIRED',
            REQUESTEDRANGENOTSATISFIABLE: 'REQUESTED_RANGE_NOT_SATISFIABLE',
            REQUESTENTITYTOOLARGE: 'REQUEST_ENTITY_TOO_LARGE',
            REQUESTHEADERFIELDSTOOLARGE: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
            REQUESTTIMEOUT: 'REQUEST_TIMEOUT',
            REQUESTURITOOLONG: 'REQUEST_URI_TOO_LONG',
            RESETCONTENT: 'RESET_CONTENT',
            SEEOTHER: 'SEE_OTHER',
            SERVICEUNAVAILABLE: 'SERVICE_UNAVAILABLE',
            SWITCHINGPROTOCOLS: 'SWITCHING_PROTOCOLS',
            TEMPORARYREDIRECT: 'TEMPORARY_REDIRECT',
            TOOEARLY: 'TOO_EARLY',
            TOOMANYREQUESTS: 'TOO_MANY_REQUESTS',
            UNAUTHORIZED: 'UNAUTHORIZED',
            UNAVAILABLEFORLEGALREASONS: 'UNAVAILABLE_FOR_LEGAL_REASONS',
            UNPROCESSABLEENTITY: 'UNPROCESSABLE_ENTITY',
            UNSUPPORTEDMEDIATYPE: 'UNSUPPORTED_MEDIA_TYPE',
            UPGRADEREQUIRED: 'UPGRADE_REQUIRED',
            URITOOLONG: 'URI_TOO_LONG',
            USEPROXY: 'USE_PROXY',
            VARIANTALSONEGOTIATES: 'VARIANT_ALSO_NEGOTIATES'
        };
    })(exports.ResponseEntity || (exports.ResponseEntity = {}));

    /**
     * Api Documentation
     * Api Documentation
     *
     * OpenAPI spec version: 1.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */
    exports.TemplateVariable = void 0;
    (function (TemplateVariable) {
        TemplateVariable.TypeEnum = {
            COMPOSITEPARAM: 'COMPOSITE_PARAM',
            FRAGMENT: 'FRAGMENT',
            PATHVARIABLE: 'PATH_VARIABLE',
            REQUESTPARAM: 'REQUEST_PARAM',
            REQUESTPARAMCONTINUED: 'REQUEST_PARAM_CONTINUED',
            SEGMENT: 'SEGMENT'
        };
    })(exports.TemplateVariable || (exports.TemplateVariable = {}));

    var ApiModule = /** @class */ (function () {
        function ApiModule(parentModule, http) {
            if (parentModule) {
                throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
            }
            if (!http) {
                throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                    'See also https://github.com/angular/angular/issues/20575');
            }
        }
        ApiModule.forRoot = function (configurationFactory) {
            return {
                ngModule: ApiModule,
                providers: [{ provide: Configuration, useFactory: configurationFactory }]
            };
        };
        return ApiModule;
    }());
    ApiModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                    providers: [
                        ActivitiesCodeControllerService,
                        ApiQueueEntityService,
                        AppNavigationTControllerService,
                        AppNavigationTEntityService,
                        AraControllerService,
                        AraReasonsControllerService,
                        BoardsControllerService,
                        CancerActivityControllerService,
                        CancerActivityRolesControllerService,
                        CgRefCodControllerService,
                        EmControllerService,
                        ExportControllerService,
                        GwbLinksControllerService,
                        I2eUserActiveRolesControllerService,
                        IcDataControllerService,
                        JasperReportControllerService,
                        LookupsControllerService,
                        NciReferralGrantsControllerService,
                        PaylineCertificationsTEntityService,
                        PaylineControllerService,
                        PaylineStatusesTEntityService,
                        PaylistControllerService,
                        PaylistGrantsControllerService,
                        PaylistUtilControllerService,
                        PdControllerService,
                        PropertiesControllerService,
                        ReferralApplNotifyCommentsTEntityService,
                        ReferralApplNotifyControllerService,
                        ReferralApplNotifyTEntityService,
                        ReferralMessagesControllerService,
                        ReferralMessagesTEntityService,
                        ReferralSearchCriteriaControllerService,
                        ReferralWorkflowControllerService,
                        RoAssignmentControllerService,
                        UserControllerService,
                        WorkbenchControllerService
                    ]
                },] }
    ];
    ApiModule.ctorParameters = function () { return [
        { type: ApiModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
        { type: http.HttpClient, decorators: [{ type: core.Optional }] }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.APIS = APIS;
    exports.ActivitiesCodeControllerService = ActivitiesCodeControllerService;
    exports.ApiModule = ApiModule;
    exports.ApiQueueEntityService = ApiQueueEntityService;
    exports.AppNavigationTControllerService = AppNavigationTControllerService;
    exports.AppNavigationTEntityService = AppNavigationTEntityService;
    exports.AraControllerService = AraControllerService;
    exports.AraReasonsControllerService = AraReasonsControllerService;
    exports.BASE_PATH = BASE_PATH;
    exports.BoardsControllerService = BoardsControllerService;
    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.CancerActivityControllerService = CancerActivityControllerService;
    exports.CancerActivityRolesControllerService = CancerActivityRolesControllerService;
    exports.CgRefCodControllerService = CgRefCodControllerService;
    exports.Configuration = Configuration;
    exports.EmControllerService = EmControllerService;
    exports.ExportControllerService = ExportControllerService;
    exports.GwbLinksControllerService = GwbLinksControllerService;
    exports.I2eUserActiveRolesControllerService = I2eUserActiveRolesControllerService;
    exports.IcDataControllerService = IcDataControllerService;
    exports.JasperReportControllerService = JasperReportControllerService;
    exports.LookupsControllerService = LookupsControllerService;
    exports.NciReferralGrantsControllerService = NciReferralGrantsControllerService;
    exports.PaylineCertificationsTEntityService = PaylineCertificationsTEntityService;
    exports.PaylineControllerService = PaylineControllerService;
    exports.PaylineStatusesTEntityService = PaylineStatusesTEntityService;
    exports.PaylistControllerService = PaylistControllerService;
    exports.PaylistGrantsControllerService = PaylistGrantsControllerService;
    exports.PaylistUtilControllerService = PaylistUtilControllerService;
    exports.PdControllerService = PdControllerService;
    exports.PropertiesControllerService = PropertiesControllerService;
    exports.ReferralApplNotifyCommentsTEntityService = ReferralApplNotifyCommentsTEntityService;
    exports.ReferralApplNotifyControllerService = ReferralApplNotifyControllerService;
    exports.ReferralApplNotifyTEntityService = ReferralApplNotifyTEntityService;
    exports.ReferralMessagesControllerService = ReferralMessagesControllerService;
    exports.ReferralMessagesTEntityService = ReferralMessagesTEntityService;
    exports.ReferralSearchCriteriaControllerService = ReferralSearchCriteriaControllerService;
    exports.ReferralWorkflowControllerService = ReferralWorkflowControllerService;
    exports.RoAssignmentControllerService = RoAssignmentControllerService;
    exports.UserControllerService = UserControllerService;
    exports.WorkbenchControllerService = WorkbenchControllerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nci-cbiit-i2ecws-lib.umd.js.map
