class loginpage
{
  constructor(page)
  {
    this.page = page;
    this.username = this.page.getByPlaceholder('you@email.com');
    this.password = this.page.getByLabel('password');
    this.signinbtbn = this.page.locator('#login-btn')


  }
  async ValidLogin(email, pwd)
{
    await this.username.fill(email);
    await this.password.fill(pwd);
    await this.signinbtbn.click();
}
     
}

export default loginpage;