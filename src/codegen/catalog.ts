/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v0.0.12
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IItemArgs {
    itemId: string;
    version: number;
    name: string;
    description?: string;
}
export class Item {
    public itemId: string;
    public version: number;
    public name: string;
    public description: string;
    constructor(args?: IItemArgs) {
        if (args != null) {
            if (args.itemId != null) {
                this.itemId = args.itemId;
            }
            else {
                throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field itemId is unset!");
            }
            if (args.version != null) {
                this.version = args.version;
            }
            else {
                throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field version is unset!");
            }
            if (args.name != null) {
                this.name = args.name;
            }
            else {
                throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
            }
            if (args.description != null) {
                this.description = args.description;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("Item");
        if (this.itemId != null) {
            output.writeFieldBegin("itemId", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.itemId);
            output.writeFieldEnd();
        }
        if (this.version != null) {
            output.writeFieldBegin("version", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.version);
            output.writeFieldEnd();
        }
        if (this.name != null) {
            output.writeFieldBegin("name", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.name);
            output.writeFieldEnd();
        }
        if (this.description != null) {
            output.writeFieldBegin("description", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.description);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public read(input: thrift.TProtocol): void {
        input.readStructBegin();
        while (true) {
            const ret: {
                fname: string;
                ftype: thrift.Thrift.Type;
                fid: number;
            } = input.readFieldBegin();
            const ftype: thrift.Thrift.Type = ret.ftype;
            const fid: number = ret.fid;
            if (ftype === thrift.Thrift.Type.STOP) {
                break;
            }
            switch (fid) {
                case 1:
                    if (ftype === thrift.Thrift.Type.STRING) {
                        const value_1: string = input.readString();
                        this.itemId = value_1;
                    }
                    else {
                        input.skip(ftype);
                    }
                    break;
                case 2:
                    if (ftype === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        this.version = value_2;
                    }
                    else {
                        input.skip(ftype);
                    }
                    break;
                case 3:
                    if (ftype === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        this.name = value_3;
                    }
                    else {
                        input.skip(ftype);
                    }
                    break;
                case 4:
                    if (ftype === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        this.description = value_4;
                    }
                    else {
                        input.skip(ftype);
                    }
                    break;
                default: {
                    input.skip(ftype);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return;
    }
}
export namespace CatalogService {
    export interface IGetAllArgsArgs {
    }
    export class GetAllArgs {
        constructor(args?: IGetAllArgsArgs) {
            if (args != null) {
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetAllArgs");
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public read(input: thrift.TProtocol): void {
            input.readStructBegin();
            while (true) {
                const ret: {
                    fname: string;
                    ftype: thrift.Thrift.Type;
                    fid: number;
                } = input.readFieldBegin();
                const ftype: thrift.Thrift.Type = ret.ftype;
                const fid: number = ret.fid;
                if (ftype === thrift.Thrift.Type.STOP) {
                    break;
                }
                switch (fid) {
                    default: {
                        input.skip(ftype);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            return;
        }
    }
    export interface IGetAllResultArgs {
        success?: Array<Item>;
    }
    export class GetAllResult {
        public success: Array<Item>;
        constructor(args?: IGetAllResultArgs) {
            if (args != null) {
                if (args.success != null) {
                    this.success = args.success;
                }
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetAllResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.Thrift.Type.LIST, 0);
                output.writeListBegin(thrift.Thrift.Type.STRUCT, this.success.length);
                this.success.forEach((value_5: Item): void => {
                    value_5.write(output);
                });
                output.writeListEnd();
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public read(input: thrift.TProtocol): void {
            input.readStructBegin();
            while (true) {
                const ret: {
                    fname: string;
                    ftype: thrift.Thrift.Type;
                    fid: number;
                } = input.readFieldBegin();
                const ftype: thrift.Thrift.Type = ret.ftype;
                const fid: number = ret.fid;
                if (ftype === thrift.Thrift.Type.STOP) {
                    break;
                }
                switch (fid) {
                    case 0:
                        if (ftype === thrift.Thrift.Type.LIST) {
                            const value_6: Array<Item> = new Array<Item>();
                            const metadata_1: {
                                etype: thrift.Thrift.Type;
                                size: number;
                            } = input.readListBegin();
                            const size_1: number = metadata_1.size;
                            for (let i_1: number = 0; i_1 < size_1; i_1++) {
                                const value_7: Item = new Item();
                                value_7.read(input);
                                value_6.push(value_7);
                            }
                            input.readListEnd();
                            this.success = value_6;
                        }
                        else {
                            input.skip(ftype);
                        }
                        break;
                    default: {
                        input.skip(ftype);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            return;
        }
    }
    export class Client {
        public _seqid: number;
        public _reqs: {
            [name: number]: (err: Error | object | undefined, val?: any) => void;
        };
        public output: thrift.TTransport;
        public protocol: new (trans: thrift.TTransport) => thrift.TProtocol;
        constructor(output: thrift.TTransport, protocol: new (trans: thrift.TTransport) => thrift.TProtocol) {
            this._seqid = 0;
            this._reqs = {};
            this.output = output;
            this.protocol = protocol;
        }
        public incrementSeqId(): number {
            return this._seqid += 1;
        }
        public getAll(): Promise<Array<Item>> {
            const requestId: number = this.incrementSeqId();
            return new Promise<Array<Item>>((resolve, reject): void => {
                this._reqs[requestId] = (error, result) => {
                    delete this._reqs[requestId];
                    if (error != null) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                };
                this.send_getAll(requestId);
            });
        }
        public send_getAll(requestId: number): void {
            const output: thrift.TProtocol = new this.protocol(this.output);
            output.writeMessageBegin("getAll", thrift.Thrift.MessageType.CALL, requestId);
            const args: GetAllArgs = new GetAllArgs({});
            args.write(output);
            output.writeMessageEnd();
            return this.output.flush();
        }
        public recv_getAll(input: thrift.TProtocol, mtype: thrift.Thrift.MessageType, rseqid: number): void {
            const noop = (): any => null;
            const callback = this._reqs[rseqid] || noop;
            if (mtype === thrift.Thrift.MessageType.EXCEPTION) {
                const x: thrift.Thrift.TApplicationException = new thrift.Thrift.TApplicationException();
                x.read(input);
                input.readMessageEnd();
                return callback(x);
            }
            const result: GetAllResult = new GetAllResult();
            result.read(input);
            input.readMessageEnd();
            if (result.success != null) {
                return callback(undefined, result.success);
            }
            else {
                return callback(new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN, "getAll failed: unknown result"));
            }
        }
    }
    export interface IHandler<Context> {
        getAll: (context?: Context) => Array<Item> | Promise<Array<Item>>;
    }
    export class Processor<Context> {
        public _handler: IHandler<Context>;
        constructor(handler: IHandler<Context>) {
            this._handler = handler;
        }
        public process(input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): void {
            const metadata: {
                fname: string;
                mtype: thrift.Thrift.MessageType;
                rseqid: number;
            } = input.readMessageBegin();
            const fname: string = metadata.fname;
            const rseqid: number = metadata.rseqid;
            const methodName: string = "process_" + fname;
            switch (methodName) {
                case "process_getAll": {
                    return this.process_getAll(rseqid, input, output, context);
                }
                default: {
                    input.skip(thrift.Thrift.Type.STRUCT);
                    input.readMessageEnd();
                    const errMessage = "Unknown function " + fname;
                    const err = new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
                    output.writeMessageBegin(fname, thrift.Thrift.MessageType.EXCEPTION, rseqid);
                    err.write(output);
                    output.writeMessageEnd();
                    output.flush();
                }
            }
        }
        public process_getAll(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): void {
            const args = new GetAllArgs();
            args.read(input);
            input.readMessageEnd();
            new Promise<Array<Item>>((resolve, reject): void => {
                try {
                    resolve(this._handler.getAll(context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: Array<Item>): void => {
                const result: GetAllResult = new GetAllResult({ success: data });
                output.writeMessageBegin("getAll", thrift.Thrift.MessageType.REPLY, seqid);
                result.write(output);
                output.writeMessageEnd();
                output.flush();
            }).catch((err: Error): void => {
                const result: thrift.Thrift.TApplicationException = new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN, err.message);
                output.writeMessageBegin("getAll", thrift.Thrift.MessageType.EXCEPTION, seqid);
                result.write(output);
                output.writeMessageEnd();
                output.flush();
                return;
            });
        }
    }
}
