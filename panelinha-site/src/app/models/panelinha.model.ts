export interface mensagem {
    args: args
}

export interface resMensagem {
    success: boolean,
    response: string
}

export interface args {
    to: string,
    content: string
}

export interface sendImg {
    args: imgModel
}

export interface imgModel {
    to: string,
    file: string,
    filename: string,
    caption: string,
    quotedMsgId: string,
    waitForId: boolean,
    ptt: boolean,
    withoutPreview: boolean,
    hideTags: boolean,
    viewOnce: boolean
}

export interface respImg{
    success: boolean,
    error: errorImg
}

export interface errorImg {
    name: string,
    message: string
  }