import Axios  from "axios"

export const getAllUser = () => {

    var value = Axios.get("http://localhost:3000/user");
    value.then(message => console.log(message.data));
}

export const addUser = (firstName, lastName, email, password) => {

    var result = Axios.post('http://localhost:3000/user/adduser', 
            
            //Body
            {
                firstName : firstName,
                lastName : lastName,
                email : email,
                password : password,

            }
        
        );

}