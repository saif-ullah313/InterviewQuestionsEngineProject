// import axios from "axios";
// import {useForm} from "react-hook-form"
// export default function DemoForm() {
//     const {register,handleSubmit} = useForm();

//     const registerUser = async (data) => {
//         await axios.post('http://localhost:8082/api/UserRegistration/Registration',data)
//         console.log(data)
//         .then((res) => {
//             console.log(res);
//         })
//     }

//     return(
//         <div>
// <form onSubmit={handleSubmit(registerUser)}>
//     <input type="text" {...register("firstName",{required:true})} />
//     <input type="text" {...register("lastName",{required:"Last name is requiured"}) }/>
//     <input type="text" {...register("userEmail",{required:"Email is requiured"}) }/>
//     <input type="text" {...register("password",{required:"Password is requiured"}) }/>
//     <input type="text" {...register("confromPassword",{required:"Confrim Password is requiured"}) }/>
//     <input type="text" {...register("contactNumber",{required:"Number is requiured"} )}/>
//     <input type="text" {...register("roleSelection")}/>
//     <button type="submit">Submit</button>
// </form>
//         </div>
//     );
// }