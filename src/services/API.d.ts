declare namespace API {
  export interface CurrentUser {
    // avatar?: string;
    // name?: string;
    // title?: string;
    // group?: string;
    // signature?: string;
    // tags?: {
    //   key: string;
    //   label: string;
    // }[];
    // userid?: string;
    // access?: 'user' | 'guest' | 'admin';
    // unreadCount?: number;
    access: array;
    code: number;
    data: {
      COMPANYNAME: string;
      CONTRACTPIC: number;
      CONTRACTSIGN: number;
      ENVIROMENT: string;
      FROMAPI: number;
      MOBILE: string;
      PAYMENTRECARD: number;
      PAYMENTREQUIRED: number;
      SESSIONID: string;
      SHIPPERAUDITSTATUS: number;
      SHIPPERNAME: string;
      STATICVERSION: number;
      UIN: number;
      WAYBILLNUMPERAPPLY: string;
    };
    msg:string;
    time:number;
    token:number;
  }

  export interface LoginStateType {
    code: number;
    status?: 'ok' | 'error';
    type?: string;
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }
}
