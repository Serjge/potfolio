import axios from "axios";
export const API = {
  sendEmail(name: FormDataEntryValue | null, email: FormDataEntryValue | null, message: FormDataEntryValue | null)  {
    return axios.post( 'https://gmail-portfolio.herokuapp.com' as string , {
      name: name,
      email: email,
      message: message
    })
  }
}
