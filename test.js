const nodeMailer = require("nodemailer");
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1a27103a719938",
        pass: "36b56c2bdfddfb"
    }   // auth Object 끝
};  // email 끝


const send = async ( option ) => {
    nodeMailer.createTransport( email ).sendMail(option, (error, info) => {

        if(error) {
            console.log(error);
        } else {
            console.log(info);

            return info.response;
        }   // if(error) - else 끝

    });
}; 

let emailData = {
    from : "junyharang8592@gmail.com",
    to : "junyharang8592@gmail.com",
    subject : "테스트 메일 입니다!",
    text : "주니하랑의 node 공부하기!"
} // emailData Object 끝

send(emailData);