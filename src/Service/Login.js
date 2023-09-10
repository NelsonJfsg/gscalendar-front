import Axios  from "axios"

const rootURL = "http://localhost:3000/";

export const getAllUser = async () => {

    //List
    var value = await Axios.get("http://localhost:3000/user");
    return value;

}

export const addUser = async (firstName, fatherSurname, motherSurname, email, password) => {

    var result = Axios.post('http://localhost:3000/user/adduser', 
            
            //Body
            {
                firstName : firstName,
                fatherSurname : fatherSurname,
                motherSurname : motherSurname,
                email : email,
                password : password
              }
        
        );

    await result.then(response => {
        if(response.data){
            alert("Usuario registrado con exito");
        }else{
            alert("Que pedo");
        }
    });
        
    
}


export const verifyUser =  async (id) => {
    var result = await Axios.post(rootURL + "/user/verify", {id : 0});
}