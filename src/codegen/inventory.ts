/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v0.0.12
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import { ItemID as catalog$ItemID } from "./catalog";
export interface IItemStatusArgs {
    itemId: catalog$ItemID;
    qty: number;
}
export class ItemStatus {
    public itemId: catalog$ItemID;
    public qty: number;
    constructor(args?: IItemStatusArgs) {
        if (args != null) {
            if (args.itemId != null) {
                this.itemId = args.itemId;
            }
            else {
                throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field itemId is unset!");
            }
            if (args.qty != null) {
                this.qty = args.qty;
            }
            else {
                throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field qty is unset!");
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ItemStatus");
        if (this.itemId != null) {
            output.writeFieldBegin("itemId", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.itemId);
            output.writeFieldEnd();
        }
        if (this.qty != null) {
            output.writeFieldBegin("qty", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.qty);
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
                        this.qty = value_2;
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
export interface IItemStatusExceptionArgs {
    message: string;
    id: number;
}
export class ItemStatusException {
    public message: string;
    public id: number;
    constructor(args?: IItemStatusExceptionArgs) {
        if (args != null) {
            if (args.message != null) {
                this.message = args.message;
            }
            if (args.id != null) {
                this.id = args.id;
            }
            else {
                throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ItemStatusException");
        if (this.message != null) {
            output.writeFieldBegin("message", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.message);
            output.writeFieldEnd();
        }
        if (this.id != null) {
            output.writeFieldBegin("id", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.id);
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
                        const value_3: string = input.readString();
                        this.message = value_3;
                    }
                    else {
                        input.skip(ftype);
                    }
                    break;
                case 2:
                    if (ftype === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        this.id = value_4;
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
export namespace InventoryService {
    export interface IGetArgsArgs {
        itemId: catalog$ItemID;
    }
    export class GetArgs {
        public itemId: catalog$ItemID;
        constructor(args?: IGetArgsArgs) {
            if (args != null) {
                if (args.itemId != null) {
                    this.itemId = args.itemId;
                }
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetArgs");
            if (this.itemId != null) {
                output.writeFieldBegin("itemId", thrift.Thrift.Type.STRING, -1);
                output.writeString(this.itemId);
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
                    case -1:
                        if (ftype === thrift.Thrift.Type.STRING) {
                            const value_5: string = input.readString();
                            this.itemId = value_5;
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
    export interface IReduceArgsArgs {
        itemId: catalog$ItemID;
        qty: number;
    }
    export class ReduceArgs {
        public itemId: catalog$ItemID;
        public qty: number;
        constructor(args?: IReduceArgsArgs) {
            if (args != null) {
                if (args.itemId != null) {
                    this.itemId = args.itemId;
                }
                if (args.qty != null) {
                    this.qty = args.qty;
                }
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("ReduceArgs");
            if (this.itemId != null) {
                output.writeFieldBegin("itemId", thrift.Thrift.Type.STRING, -1);
                output.writeString(this.itemId);
                output.writeFieldEnd();
            }
            if (this.qty != null) {
                output.writeFieldBegin("qty", thrift.Thrift.Type.I32, -2);
                output.writeI32(this.qty);
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
                    case -1:
                        if (ftype === thrift.Thrift.Type.STRING) {
                            const value_6: string = input.readString();
                            this.itemId = value_6;
                        }
                        else {
                            input.skip(ftype);
                        }
                        break;
                    case -2:
                        if (ftype === thrift.Thrift.Type.I32) {
                            const value_7: number = input.readI32();
                            this.qty = value_7;
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
    export interface IGetResultArgs {
        success?: ItemStatus;
        itemException?: ItemStatusException;
    }
    export class GetResult {
        public success: ItemStatus;
        public itemException: ItemStatusException;
        constructor(args?: IGetResultArgs) {
            if (args != null) {
                if (args.success != null) {
                    this.success = args.success;
                }
                if (args.itemException != null) {
                    this.itemException = args.itemException;
                }
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.Thrift.Type.STRUCT, 0);
                this.success.write(output);
                output.writeFieldEnd();
            }
            if (this.itemException != null) {
                output.writeFieldBegin("itemException", thrift.Thrift.Type.STRUCT, 1);
                this.itemException.write(output);
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
                        if (ftype === thrift.Thrift.Type.STRUCT) {
                            const value_8: ItemStatus = new ItemStatus();
                            value_8.read(input);
                            this.success = value_8;
                        }
                        else {
                            input.skip(ftype);
                        }
                        break;
                    case 1:
                        if (ftype === thrift.Thrift.Type.STRUCT) {
                            const value_9: ItemStatusException = new ItemStatusException();
                            value_9.read(input);
                            this.itemException = value_9;
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
    export interface IReduceResultArgs {
        success?: ItemStatus;
        itemException?: ItemStatusException;
    }
    export class ReduceResult {
        public success: ItemStatus;
        public itemException: ItemStatusException;
        constructor(args?: IReduceResultArgs) {
            if (args != null) {
                if (args.success != null) {
                    this.success = args.success;
                }
                if (args.itemException != null) {
                    this.itemException = args.itemException;
                }
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("ReduceResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.Thrift.Type.STRUCT, 0);
                this.success.write(output);
                output.writeFieldEnd();
            }
            if (this.itemException != null) {
                output.writeFieldBegin("itemException", thrift.Thrift.Type.STRUCT, 1);
                this.itemException.write(output);
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
                        if (ftype === thrift.Thrift.Type.STRUCT) {
                            const value_10: ItemStatus = new ItemStatus();
                            value_10.read(input);
                            this.success = value_10;
                        }
                        else {
                            input.skip(ftype);
                        }
                        break;
                    case 1:
                        if (ftype === thrift.Thrift.Type.STRUCT) {
                            const value_11: ItemStatusException = new ItemStatusException();
                            value_11.read(input);
                            this.itemException = value_11;
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
        public get(itemId: catalog$ItemID): Promise<ItemStatus> {
            const requestId: number = this.incrementSeqId();
            return new Promise<ItemStatus>((resolve, reject): void => {
                this._reqs[requestId] = (error, result) => {
                    delete this._reqs[requestId];
                    if (error != null) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                };
                this.send_get(itemId, requestId);
            });
        }
        public reduce(itemId: catalog$ItemID, qty: number): Promise<ItemStatus> {
            const requestId: number = this.incrementSeqId();
            return new Promise<ItemStatus>((resolve, reject): void => {
                this._reqs[requestId] = (error, result) => {
                    delete this._reqs[requestId];
                    if (error != null) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                };
                this.send_reduce(itemId, qty, requestId);
            });
        }
        public send_get(itemId: catalog$ItemID, requestId: number): void {
            const output: thrift.TProtocol = new this.protocol(this.output);
            output.writeMessageBegin("get", thrift.Thrift.MessageType.CALL, requestId);
            const args: GetArgs = new GetArgs({ itemId });
            args.write(output);
            output.writeMessageEnd();
            return this.output.flush();
        }
        public send_reduce(itemId: catalog$ItemID, qty: number, requestId: number): void {
            const output: thrift.TProtocol = new this.protocol(this.output);
            output.writeMessageBegin("reduce", thrift.Thrift.MessageType.CALL, requestId);
            const args: ReduceArgs = new ReduceArgs({ itemId, qty });
            args.write(output);
            output.writeMessageEnd();
            return this.output.flush();
        }
        public recv_get(input: thrift.TProtocol, mtype: thrift.Thrift.MessageType, rseqid: number): void {
            const noop = (): any => null;
            const callback = this._reqs[rseqid] || noop;
            if (mtype === thrift.Thrift.MessageType.EXCEPTION) {
                const x: thrift.Thrift.TApplicationException = new thrift.Thrift.TApplicationException();
                x.read(input);
                input.readMessageEnd();
                return callback(x);
            }
            const result: GetResult = new GetResult();
            result.read(input);
            input.readMessageEnd();
            if (result.itemException != null) {
                return callback(result.itemException);
            }
            if (result.success != null) {
                return callback(undefined, result.success);
            }
            else {
                return callback(new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN, "get failed: unknown result"));
            }
        }
        public recv_reduce(input: thrift.TProtocol, mtype: thrift.Thrift.MessageType, rseqid: number): void {
            const noop = (): any => null;
            const callback = this._reqs[rseqid] || noop;
            if (mtype === thrift.Thrift.MessageType.EXCEPTION) {
                const x: thrift.Thrift.TApplicationException = new thrift.Thrift.TApplicationException();
                x.read(input);
                input.readMessageEnd();
                return callback(x);
            }
            const result: ReduceResult = new ReduceResult();
            result.read(input);
            input.readMessageEnd();
            if (result.itemException != null) {
                return callback(result.itemException);
            }
            if (result.success != null) {
                return callback(undefined, result.success);
            }
            else {
                return callback(new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN, "reduce failed: unknown result"));
            }
        }
    }
    export interface IHandler<Context> {
        get: (itemId: catalog$ItemID, context?: Context) => ItemStatus | Promise<ItemStatus>;
        reduce: (itemId: catalog$ItemID, qty: number, context?: Context) => ItemStatus | Promise<ItemStatus>;
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
                case "process_get": {
                    return this.process_get(rseqid, input, output, context);
                }
                case "process_reduce": {
                    return this.process_reduce(rseqid, input, output, context);
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
        public process_get(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): void {
            const args = new GetArgs();
            args.read(input);
            input.readMessageEnd();
            new Promise<ItemStatus>((resolve, reject): void => {
                try {
                    resolve(this._handler.get(args.itemId, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: ItemStatus): void => {
                const result: GetResult = new GetResult({ success: data });
                output.writeMessageBegin("get", thrift.Thrift.MessageType.REPLY, seqid);
                result.write(output);
                output.writeMessageEnd();
                output.flush();
            }).catch((err: Error): void => {
                if (err instanceof ItemStatusException) {
                    const result: GetResult = new GetResult({ itemException: err });
                    output.writeMessageBegin("get", thrift.Thrift.MessageType.REPLY, seqid);
                    result.write(output);
                    output.writeMessageEnd();
                    output.flush();
                    return;
                }
                else {
                    const result: thrift.Thrift.TApplicationException = new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN, err.message);
                    output.writeMessageBegin("get", thrift.Thrift.MessageType.EXCEPTION, seqid);
                    result.write(output);
                    output.writeMessageEnd();
                    output.flush();
                    return;
                }
            });
        }
        public process_reduce(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): void {
            const args = new ReduceArgs();
            args.read(input);
            input.readMessageEnd();
            new Promise<ItemStatus>((resolve, reject): void => {
                try {
                    resolve(this._handler.reduce(args.itemId, args.qty, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: ItemStatus): void => {
                const result: ReduceResult = new ReduceResult({ success: data });
                output.writeMessageBegin("reduce", thrift.Thrift.MessageType.REPLY, seqid);
                result.write(output);
                output.writeMessageEnd();
                output.flush();
            }).catch((err: Error): void => {
                if (err instanceof ItemStatusException) {
                    const result: ReduceResult = new ReduceResult({ itemException: err });
                    output.writeMessageBegin("reduce", thrift.Thrift.MessageType.REPLY, seqid);
                    result.write(output);
                    output.writeMessageEnd();
                    output.flush();
                    return;
                }
                else {
                    const result: thrift.Thrift.TApplicationException = new thrift.Thrift.TApplicationException(thrift.Thrift.TApplicationExceptionType.UNKNOWN, err.message);
                    output.writeMessageBegin("reduce", thrift.Thrift.MessageType.EXCEPTION, seqid);
                    result.write(output);
                    output.writeMessageEnd();
                    output.flush();
                    return;
                }
            });
        }
    }
}
