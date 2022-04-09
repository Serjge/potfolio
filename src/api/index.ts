import axios from "axios";

const server = process.env.APP_URL_EMAIL_SERVER as string
export const API = {
  sendEmail(name: FormDataEntryValue | null, email: FormDataEntryValue | null, message: FormDataEntryValue | null)  {
    console.log(process.env.APP_URL_EMAIL_SERVER)
    return axios.post( 'https://gmail-portfolio.herokuapp.com/sendMessage' as string , {
      name: name,
      email: email,
      message: message
    })
  }
}
