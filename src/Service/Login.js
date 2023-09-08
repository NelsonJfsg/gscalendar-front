import Axios  from "axios"

export const getAllUser = async () => {

    //List
    var value = await Axios.get("http://localhost:3000/user");
    return value;

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