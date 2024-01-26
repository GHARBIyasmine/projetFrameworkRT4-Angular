export class Person {

  username: string
  email: string
  password: string
  imageUrl: string

  constructor(username='',email='',password='',imageUrl=''){
    this.username =username;
    this.email=email;
    this.password=password
    this.imageUrl=imageUrl;
  }
}
