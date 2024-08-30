import React, { useState } from 'react';
import axios from 'axios';
function Signup() {
const [username, setUsername] = useState('');
const handleSignup = async(e) => {
e.preventDefault();
try {
await axios.post('http://localhost:3000/signup', { username });
alert('Welcome ' + username);
document.getElementById("test").innerHTML=username
setUsername('');
} catch (error) { console.error('Error signing up:', error); alert('An error occurred.'); }
};
return (
<div>
<h1>Sign Up</h1>
<h1>dhruvi</h1>
<form onSubmit={handleSignup}>
<input type="text" placeholder="Username" value={username} onChange={(e) =>
setUsername(e.target.value)}/>
<button type="submit">Sign Up</button>
<h1 id="test"></h1>
</form>
</div>
);
}
export default Signup;