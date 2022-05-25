/* tslint:disable */
/* eslint-disable */
/**
 * Belajar OpenAPI
 * Untuk belajar membuat RESTfull API
 *
 * OpenAPI spec version: 1.0
 * Contact: yogajprasutiyo@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ArrayTodoList } from '../models';
import { CreateOrUpdateTodoList } from '../models';
import { InlineResponse200 } from '../models';
import { TodoList } from '../models';
/**
 * TodoListApi - axios parameter creator
 * @export
 */
export const TodoListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all active todolist data by default
         * @summary Get all todolist data
         * @param {boolean} [includeDone] Is include done todolist
         * @param {string} [name] Filter todolist by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todolistGet: async (includeDone?: boolean, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/todolist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TodolistAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Auth-API-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["Auth-API-Key"] = localVarApiKeyValue;
            }

            if (includeDone !== undefined) {
                localVarQueryParameter['include-done'] = includeDone;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create new todolist to database
         * @summary Create new todolist
         * @param {CreateOrUpdateTodoList} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todolistPost: async (body: CreateOrUpdateTodoList, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling todolistPost.');
            }
            const localVarPath = `/todolist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TodolistAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Auth-API-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["Auth-API-Key"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete existing todolist in database
         * @summary Delete existing todolist
         * @param {string} todolistId Todolist id for deleted data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todolistTodolistIdDelete: async (todolistId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todolistId' is not null or undefined
            if (todolistId === null || todolistId === undefined) {
                throw new RequiredError('todolistId','Required parameter todolistId was null or undefined when calling todolistTodolistIdDelete.');
            }
            const localVarPath = `/todolist/{todolistId}`
                .replace(`{${"todolistId"}}`, encodeURIComponent(String(todolistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TodolistAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Auth-API-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["Auth-API-Key"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Update existing todolist in database
         * @summary Update existing todolist
         * @param {CreateOrUpdateTodoList} body 
         * @param {string} todolistId Todolist id for updated data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todolistTodolistIdPut: async (body: CreateOrUpdateTodoList, todolistId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling todolistTodolistIdPut.');
            }
            // verify required parameter 'todolistId' is not null or undefined
            if (todolistId === null || todolistId === undefined) {
                throw new RequiredError('todolistId','Required parameter todolistId was null or undefined when calling todolistTodolistIdPut.');
            }
            const localVarPath = `/todolist/{todolistId}`
                .replace(`{${"todolistId"}}`, encodeURIComponent(String(todolistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TodolistAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Auth-API-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["Auth-API-Key"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoListApi - functional programming interface
 * @export
 */
export const TodoListApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get all active todolist data by default
         * @summary Get all todolist data
         * @param {boolean} [includeDone] Is include done todolist
         * @param {string} [name] Filter todolist by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistGet(includeDone?: boolean, name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ArrayTodoList>>> {
            const localVarAxiosArgs = await TodoListApiAxiosParamCreator(configuration).todolistGet(includeDone, name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create new todolist to database
         * @summary Create new todolist
         * @param {CreateOrUpdateTodoList} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistPost(body: CreateOrUpdateTodoList, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TodoList>>> {
            const localVarAxiosArgs = await TodoListApiAxiosParamCreator(configuration).todolistPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete existing todolist in database
         * @summary Delete existing todolist
         * @param {string} todolistId Todolist id for deleted data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistTodolistIdDelete(todolistId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await TodoListApiAxiosParamCreator(configuration).todolistTodolistIdDelete(todolistId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update existing todolist in database
         * @summary Update existing todolist
         * @param {CreateOrUpdateTodoList} body 
         * @param {string} todolistId Todolist id for updated data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistTodolistIdPut(body: CreateOrUpdateTodoList, todolistId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TodoList>>> {
            const localVarAxiosArgs = await TodoListApiAxiosParamCreator(configuration).todolistTodolistIdPut(body, todolistId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TodoListApi - factory interface
 * @export
 */
export const TodoListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get all active todolist data by default
         * @summary Get all todolist data
         * @param {boolean} [includeDone] Is include done todolist
         * @param {string} [name] Filter todolist by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistGet(includeDone?: boolean, name?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ArrayTodoList>> {
            return TodoListApiFp(configuration).todolistGet(includeDone, name, options).then((request) => request(axios, basePath));
        },
        /**
         * Create new todolist to database
         * @summary Create new todolist
         * @param {CreateOrUpdateTodoList} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistPost(body: CreateOrUpdateTodoList, options?: AxiosRequestConfig): Promise<AxiosResponse<TodoList>> {
            return TodoListApiFp(configuration).todolistPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete existing todolist in database
         * @summary Delete existing todolist
         * @param {string} todolistId Todolist id for deleted data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistTodolistIdDelete(todolistId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return TodoListApiFp(configuration).todolistTodolistIdDelete(todolistId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update existing todolist in database
         * @summary Update existing todolist
         * @param {CreateOrUpdateTodoList} body 
         * @param {string} todolistId Todolist id for updated data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todolistTodolistIdPut(body: CreateOrUpdateTodoList, todolistId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<TodoList>> {
            return TodoListApiFp(configuration).todolistTodolistIdPut(body, todolistId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoListApi - object-oriented interface
 * @export
 * @class TodoListApi
 * @extends {BaseAPI}
 */
export class TodoListApi extends BaseAPI {
    /**
     * Get all active todolist data by default
     * @summary Get all todolist data
     * @param {boolean} [includeDone] Is include done todolist
     * @param {string} [name] Filter todolist by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoListApi
     */
    public async todolistGet(includeDone?: boolean, name?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ArrayTodoList>> {
        return TodoListApiFp(this.configuration).todolistGet(includeDone, name, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create new todolist to database
     * @summary Create new todolist
     * @param {CreateOrUpdateTodoList} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoListApi
     */
    public async todolistPost(body: CreateOrUpdateTodoList, options?: AxiosRequestConfig) : Promise<AxiosResponse<TodoList>> {
        return TodoListApiFp(this.configuration).todolistPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete existing todolist in database
     * @summary Delete existing todolist
     * @param {string} todolistId Todolist id for deleted data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoListApi
     */
    public async todolistTodolistIdDelete(todolistId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return TodoListApiFp(this.configuration).todolistTodolistIdDelete(todolistId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update existing todolist in database
     * @summary Update existing todolist
     * @param {CreateOrUpdateTodoList} body 
     * @param {string} todolistId Todolist id for updated data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoListApi
     */
    public async todolistTodolistIdPut(body: CreateOrUpdateTodoList, todolistId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<TodoList>> {
        return TodoListApiFp(this.configuration).todolistTodolistIdPut(body, todolistId, options).then((request) => request(this.axios, this.basePath));
    }
}
