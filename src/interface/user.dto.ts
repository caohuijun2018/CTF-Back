//创建用户
interface User {
  name : string,
  password : string,
  id: number, //为每个用户生成 id 
  date: Date,
}

const createUser = (params : User) : Promise<void> => {
  return 
}

//用户登陆
interface loginUser {
  name: string,
  password: string,
  date: Date
}
const loginUser = (params : loginUser) : Promise<void> => {return}

