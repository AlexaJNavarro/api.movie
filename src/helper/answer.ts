export class Answer{
    public message 
    public typeMessage
    public error
    public data
    constructor(
        typeMessage:string,
        message:string,
        error:boolean,
        data:any
        ){
            this.typeMessage=typeMessage
            this.message= message
            this.error= error
            this.data=data
    }

}