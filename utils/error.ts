export class BaseError extends Error {
    code: string = ''
    name: string = ''

    constructor(message: string = '', code: string = '9000', name: string = 'UnknownError') {
        super(message, {
            cause: {
                customErrorInfo: {
                    code,
                    name
                }
            }
        })
        this.code = code
        this.name = name
    }
}

export function isInstanceOfAPIError(object: unknown): object is BaseError {
    return (
        object instanceof BaseError &&
        ('name' in object)
    )
}

export class NeedLoginError extends BaseError {
    constructor() {
        super("로그인이 필요한 서비스", '7010', 'NeedLoginError')
    }
}

export class NeedAdlCertiError extends BaseError {
    constructor() {
        super("성인인증이 필요한 서비스", '7060', 'NeedAdlCertiError')
    }
}

export class FailAdlCertiError extends BaseError {
    constructor() {
        super("성인인증 후 미성년으로 서비스 이용 불가", '7050', 'FailAdlCertiError')
    }
}

export class UnknownError extends BaseError {
    constructor() {
        super("알 수 없는 오류입니다.", '9000', 'UnknownError')
    }
}

export class CustomError extends BaseError {
    constructor(message: string, code: string | undefined, name: string | undefined) {
        super(message || 'UnknownError', code || '9000', name || 'UnknowError')
    }
}
