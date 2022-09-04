import { AxiosPromise } from 'axios';

export interface IServiceMethodFunc<ArgType = void, ReturnType = any> {
    (arg: ArgType): AxiosPromise<ReturnType>;
}
