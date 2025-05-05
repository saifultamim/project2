

export async function registration(registrationData: any) {
try{
    const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
      const  createFromData = await response.json();
      return  createFromData
}catch(error){
    return error
}
}
