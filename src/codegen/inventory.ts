/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v1.1.4
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import { ItemID as catalog$ItemID } from "./catalog";
export interface IItemStatusArgs {
    itemId: catalog$ItemID;
    qty: number;
}
export class ItemStatus implements thrift.StructLike {
    public itemId: catalog$ItemID;
    public qty: number;
    constructor(args: IItemStatusArgs) {
        if (args != null && args.itemId != null) {
            this.itemId = args.itemId;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field itemId is unset!");
        }
        if (args != null && args.qty != null) {
            this.qty = args.qty;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field qty is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ItemStatus");
        if (this.itemId != null) {
            output.writeFieldBegin("itemId", thrift.TType.STRING, 1);
            output.writeString(this.itemId);
            output.writeFieldEnd();
        }
        if (this.qty != null) {
            output.writeFieldBegin("qty", thrift.TType.I32, 2);
            output.writeI32(this.qty);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ItemStatus {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.itemId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_2: number = input.readI32();
                        _args.qty = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.itemId !== undefined && _args.qty !== undefined) {
            return new ItemStatus(_args);
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ItemStatus from input");
        }
    }
}
export interface IItemStatusExceptionArgs {
    message?: string;
    id: number;
}
export class ItemStatusException implements thrift.StructLike {
    public message?: string;
    public id: number;
    constructor(args: IItemStatusExceptionArgs) {
        if (args != null && args.message != null) {
            this.message = args.message;
        }
        if (args != null && args.id != null) {
            this.id = args.id;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ItemStatusException");
        if (this.message != null) {
            output.writeFieldBegin("message", thrift.TType.STRING, 1);
            output.writeString(this.message);
            output.writeFieldEnd();
        }
        if (this.id != null) {
            output.writeFieldBegin("id", thrift.TType.I32, 2);
            output.writeI32(this.id);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ItemStatusException {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.message = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_4: number = input.readI32();
                        _args.id = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.id !== undefined) {
            return new ItemStatusException(_args);
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ItemStatusException from input");
        }
    }
}
export namespace InventoryService {
    export interface IGetArgsArgs {
        itemId: catalog$ItemID;
    }
    export class GetArgs implements thrift.StructLike {
        public itemId: catalog$ItemID;
        constructor(args: IGetArgsArgs) {
            if (args != null && args.itemId != null) {
                this.itemId = args.itemId;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field itemId is unset!");
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetArgs");
            if (this.itemId != null) {
                output.writeFieldBegin("itemId", thrift.TType.STRING, -1);
                output.writeString(this.itemId);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): GetArgs {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case -1:
                        if (fieldType === thrift.TType.STRING) {
                            const value_5: string = input.readString();
                            _args.itemId = value_5;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            if (_args.itemId !== undefined) {
                return new GetArgs(_args);
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetArgs from input");
            }
        }
    }
    export interface IReduceArgsArgs {
        itemId: catalog$ItemID;
        qty: number;
    }
    export class ReduceArgs implements thrift.StructLike {
        public itemId: catalog$ItemID;
        public qty: number;
        constructor(args: IReduceArgsArgs) {
            if (args != null && args.itemId != null) {
                this.itemId = args.itemId;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field itemId is unset!");
            }
            if (args != null && args.qty != null) {
                this.qty = args.qty;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field qty is unset!");
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("ReduceArgs");
            if (this.itemId != null) {
                output.writeFieldBegin("itemId", thrift.TType.STRING, -1);
                output.writeString(this.itemId);
                output.writeFieldEnd();
            }
            if (this.qty != null) {
                output.writeFieldBegin("qty", thrift.TType.I32, -2);
                output.writeI32(this.qty);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): ReduceArgs {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case -1:
                        if (fieldType === thrift.TType.STRING) {
                            const value_6: string = input.readString();
                            _args.itemId = value_6;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case -2:
                        if (fieldType === thrift.TType.I32) {
                            const value_7: number = input.readI32();
                            _args.qty = value_7;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            if (_args.itemId !== undefined && _args.qty !== undefined) {
                return new ReduceArgs(_args);
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ReduceArgs from input");
            }
        }
    }
    export interface IGetResultArgs {
        success?: ItemStatus;
        itemException?: ItemStatusException;
    }
    export class GetResult implements thrift.StructLike {
        public success?: ItemStatus;
        public itemException?: ItemStatusException;
        constructor(args?: IGetResultArgs) {
            if (args != null && args.success != null) {
                this.success = args.success;
            }
            if (args != null && args.itemException != null) {
                this.itemException = args.itemException;
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
                this.success.write(output);
                output.writeFieldEnd();
            }
            if (this.itemException != null) {
                output.writeFieldBegin("itemException", thrift.TType.STRUCT, 1);
                this.itemException.write(output);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): GetResult {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case 0:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_8: ItemStatus = ItemStatus.read(input);
                            _args.success = value_8;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 1:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_9: ItemStatusException = ItemStatusException.read(input);
                            _args.itemException = value_9;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            return new GetResult(_args);
        }
    }
    export interface IReduceResultArgs {
        success?: ItemStatus;
        itemException?: ItemStatusException;
    }
    export class ReduceResult implements thrift.StructLike {
        public success?: ItemStatus;
        public itemException?: ItemStatusException;
        constructor(args?: IReduceResultArgs) {
            if (args != null && args.success != null) {
                this.success = args.success;
            }
            if (args != null && args.itemException != null) {
                this.itemException = args.itemException;
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("ReduceResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
                this.success.write(output);
                output.writeFieldEnd();
            }
            if (this.itemException != null) {
                output.writeFieldBegin("itemException", thrift.TType.STRUCT, 1);
                this.itemException.write(output);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): ReduceResult {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case 0:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_10: ItemStatus = ItemStatus.read(input);
                            _args.success = value_10;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 1:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_11: ItemStatusException = ItemStatusException.read(input);
                            _args.itemException = value_11;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            return new ReduceResult(_args);
        }
    }
    export class Client<Context = any> {
        protected _requestId: number;
        protected transport: thrift.ITransportConstructor;
        protected protocol: thrift.IProtocolConstructor;
        protected connection: thrift.IThriftConnection<Context>;
        constructor(connection: thrift.IThriftConnection<Context>) {
            this._requestId = 0;
            this.transport = connection.Transport;
            this.protocol = connection.Protocol;
            this.connection = connection;
        }
        public incrementRequestId(): number {
            return this._requestId += 1;
        }
        public get(itemId: catalog$ItemID, context?: Context): Promise<ItemStatus> {
            const writer: thrift.TTransport = new this.transport();
            const output: thrift.TProtocol = new this.protocol(writer);
            output.writeMessageBegin("get", thrift.MessageType.CALL, this.incrementRequestId());
            const args: GetArgs = new GetArgs({ itemId });
            args.write(output);
            output.writeMessageEnd();
            return this.connection.send(writer.flush(), context).then((data: Buffer) => {
                const reader: thrift.TTransport = this.transport.receiver(data);
                const input: thrift.TProtocol = new this.protocol(reader);
                try {
                    const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                    if (fieldName === "get") {
                        if (messageType === thrift.MessageType.EXCEPTION) {
                            const err: thrift.TApplicationException = thrift.TApplicationException.read(input);
                            input.readMessageEnd();
                            return Promise.reject(err);
                        }
                        const result: GetResult = GetResult.read(input);
                        input.readMessageEnd();
                        if (result.itemException != null) {
                            return Promise.reject(result.itemException);
                        }
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "get failed: unknown result"));
                        }
                    }
                    else {
                        return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            });
        }
        public reduce(itemId: catalog$ItemID, qty: number, context?: Context): Promise<ItemStatus> {
            const writer: thrift.TTransport = new this.transport();
            const output: thrift.TProtocol = new this.protocol(writer);
            output.writeMessageBegin("reduce", thrift.MessageType.CALL, this.incrementRequestId());
            const args: ReduceArgs = new ReduceArgs({ itemId, qty });
            args.write(output);
            output.writeMessageEnd();
            return this.connection.send(writer.flush(), context).then((data: Buffer) => {
                const reader: thrift.TTransport = this.transport.receiver(data);
                const input: thrift.TProtocol = new this.protocol(reader);
                try {
                    const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                    if (fieldName === "reduce") {
                        if (messageType === thrift.MessageType.EXCEPTION) {
                            const err: thrift.TApplicationException = thrift.TApplicationException.read(input);
                            input.readMessageEnd();
                            return Promise.reject(err);
                        }
                        const result: ReduceResult = ReduceResult.read(input);
                        input.readMessageEnd();
                        if (result.itemException != null) {
                            return Promise.reject(result.itemException);
                        }
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "reduce failed: unknown result"));
                        }
                    }
                    else {
                        return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            });
        }
    }
    export interface IHandler<Context = any> {
        get: (itemId: catalog$ItemID, context?: Context) => ItemStatus | Promise<ItemStatus>;
        reduce: (itemId: catalog$ItemID, qty: number, context?: Context) => ItemStatus | Promise<ItemStatus>;
    }
    export class Processor<Context = any> {
        public _handler: IHandler<Context>;
        constructor(handler: IHandler<Context>) {
            this._handler = handler;
        }
        public process(input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): Promise<Buffer> {
            return new Promise<Buffer>((resolve, reject): void => {
                const metadata: thrift.IThriftMessage = input.readMessageBegin();
                const fieldName: string = metadata.fieldName;
                const requestId: number = metadata.requestId;
                const methodName: string = "process_" + fieldName;
                switch (methodName) {
                    case "process_get": {
                        resolve(this.process_get(requestId, input, output, context));
                    }
                    case "process_reduce": {
                        resolve(this.process_reduce(requestId, input, output, context));
                    }
                    default: {
                        input.skip(thrift.TType.STRUCT);
                        input.readMessageEnd();
                        const errMessage = "Unknown function " + fieldName;
                        const err = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
                        output.writeMessageBegin(fieldName, thrift.MessageType.EXCEPTION, requestId);
                        err.write(output);
                        output.writeMessageEnd();
                        resolve(output.flush());
                    }
                }
            });
        }
        public process_get(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): Promise<Buffer> {
            return new Promise<ItemStatus>((resolve, reject): void => {
                try {
                    const args: GetArgs = GetArgs.read(input);
                    input.readMessageEnd();
                    resolve(this._handler.get(args.itemId, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: ItemStatus): Buffer => {
                const result: GetResult = new GetResult({ success: data });
                output.writeMessageBegin("get", thrift.MessageType.REPLY, requestId);
                result.write(output);
                output.writeMessageEnd();
                return output.flush();
            }).catch((err: Error): Buffer => {
                if (err instanceof ItemStatusException) {
                    const result: GetResult = new GetResult({ itemException: err });
                    output.writeMessageBegin("get", thrift.MessageType.REPLY, requestId);
                    result.write(output);
                    output.writeMessageEnd();
                    return output.flush();
                }
                else {
                    const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
                    output.writeMessageBegin("get", thrift.MessageType.EXCEPTION, requestId);
                    result.write(output);
                    output.writeMessageEnd();
                    return output.flush();
                }
            });
        }
        public process_reduce(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context?: Context): Promise<Buffer> {
            return new Promise<ItemStatus>((resolve, reject): void => {
                try {
                    const args: ReduceArgs = ReduceArgs.read(input);
                    input.readMessageEnd();
                    resolve(this._handler.reduce(args.itemId, args.qty, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: ItemStatus): Buffer => {
                const result: ReduceResult = new ReduceResult({ success: data });
                output.writeMessageBegin("reduce", thrift.MessageType.REPLY, requestId);
                result.write(output);
                output.writeMessageEnd();
                return output.flush();
            }).catch((err: Error): Buffer => {
                if (err instanceof ItemStatusException) {
                    const result: ReduceResult = new ReduceResult({ itemException: err });
                    output.writeMessageBegin("reduce", thrift.MessageType.REPLY, requestId);
                    result.write(output);
                    output.writeMessageEnd();
                    return output.flush();
                }
                else {
                    const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
                    output.writeMessageBegin("reduce", thrift.MessageType.EXCEPTION, requestId);
                    result.write(output);
                    output.writeMessageEnd();
                    return output.flush();
                }
            });
        }
    }
}
