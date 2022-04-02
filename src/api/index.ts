import axios from "axios";
export const API = {
  sendEmail(name: FormDataEntryValue | null, email: FormDataEntryValue | null, message: FormDataEntryValue | null)  {
    return axios.post( process.env.APP_URL_EMAIL_SERVER as string , {
      name: name,
      email: email,
      message: message
    })
  }
}
