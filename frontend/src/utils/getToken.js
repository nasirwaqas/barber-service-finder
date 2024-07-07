export const decodeJWT = (token) => {
    const base64Url = token?.split('.')[1]; // Extract the base64-encoded payload
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/'); // Replace characters to make it valid base64
    const decodedPayload = JSON.parse(atob(base64)); // Decode and parse JSON
  
    return decodedPayload;
  };